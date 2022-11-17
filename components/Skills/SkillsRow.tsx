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
	//	set to 64 on sm. screen size and up (1/2 of Skill component width)
	if (windowWidth >= 640) {
		marginRef.current = 64
	} else marginRef.current = 40

	const overflowing = rowWidth && rowWidth >= windowWidth + marginRef.current
	return (
		<div
			className={`mb-8 flex h-full w-full flex-col ${
				overflowing ? 'items-start' : 'items-center'
			} sm:mb-12 sm:mt-8`}
		>
			<p className='mb-4 px-4 font-bold sm:mb-8 sm:px-8'>{caption}</p>
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
