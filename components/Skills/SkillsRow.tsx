import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Skill, { SkillInterface } from './Skill'
import styles from './SkillsRow.module.css'

interface SkillRowInterface {
	data: SkillInterface[]
	caption: string
	bracesWidth: number
}

function SkillRow({ data, caption, bracesWidth }: SkillRowInterface) {
	const widthRef = useRef(null)
	const [rowWidth, setRowWidth] = useState(0)
	const { width: windowWidth } = useWindowDimensions()

	useEffect(() => {
		widthRef.current && setRowWidth(widthRef.current.offsetWidth)
	}, [windowWidth])

	//	margin to prevent Skill component appearing slightly on both sides at the same time
	const marginRef = useRef(80)
	//	set to Skill component width (80)

	//	also have to account for section padding, which reduces the width needed to exceed the right side of the viewport
	const paddingRef = useRef(32)

	//	2rem (32px) padding until sm screen size, then 4rem (64px)
	if (windowWidth >= 640) {
		paddingRef.current = 64
	} else paddingRef.current = 32

	const overflowing =
		bracesWidth && rowWidth && windowWidth >= 1024
			? rowWidth >= bracesWidth + marginRef.current - paddingRef.current
			: rowWidth >=
			  windowWidth + marginRef.current - paddingRef.current * 2

	return (
		<div
			className={`'mt-4 flex h-auto w-auto flex-col items-start ${
				!overflowing ? 'lg:items-center' : ''
			} lg:mt-0' justify-end`}
		>
			<p className='my-4 w-full text-xs font-bold sm:text-sm'>
				{caption}
			</p>
			<div
				className={`${
					overflowing ? styles.scrolling : styles.notScrolling
				} flex`}
			>
				<div ref={widthRef} className='row1 grid grid-flow-col'>
					{data.map((item: SkillInterface, i: number) => {
						return <Skill key={i} src={item.src} text={item.text} />
					})}
				</div>
				<div
					className={`row2 grid-flow-col ${
						overflowing ? 'grid' : 'hidden'
					}`}
					style={{ transform: 'translateX(-200%)' }}
				>
					{data.map((item: SkillInterface, j: number) => {
						return <Skill key={j} src={item.src} text={item.text} />
					})}
				</div>
			</div>
		</div>
	)
}

export default SkillRow
