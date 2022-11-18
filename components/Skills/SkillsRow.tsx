import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Skill, { SkillInterface } from './Skill'
import styles from './SkillsRow.module.css'

interface SkillRowInterface {
	data: SkillInterface[]
	caption: string
}

function SkillRow({ data, caption }: SkillRowInterface) {
	const widthRef = useRef(null)
	const [rowWidth, setRowWidth] = useState(0)
	const { width: windowWidth } = useWindowDimensions()

	useEffect(() => {
		widthRef.current && setRowWidth(widthRef.current.offsetWidth)
	}, [windowWidth])

	//	margin to prevent Skill component appearing slightly on both sides at the same time
	const marginRef = useRef(40)
	//	set to Skill component width (80) / 2

	//	also have to account for section padding, which reduces the width needed to exceed the right side of the viewport
	const paddingRef = useRef(64)

	//	4rem(64px) total padding until sm screen size, then 8rem (128px) total
	if (windowWidth >= 640) {
		paddingRef.current = 128
	} else paddingRef.current = 64

	const overflowing =
		rowWidth &&
		rowWidth >= windowWidth + marginRef.current - paddingRef.current

	return (
		<div className='flex h-full w-full flex-col items-start justify-end'>
			<p className='my-4 text-xs font-bold sm:mt-8 sm:text-sm'>
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
