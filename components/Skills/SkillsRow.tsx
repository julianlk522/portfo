import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { motion } from 'framer-motion'
import { SkillInterface } from './SkillsData'
import Skill, { SkillComponentInterface } from './Skill'
import styles from './SkillsRow.module.css'

interface SkillRowInterface {
	data: SkillInterface[]
	caption: string
	bracesWidth: number
}

function SkillRow({ data, caption, bracesWidth }: SkillRowInterface) {
	const { width: windowWidth } = useWindowDimensions()
	const widthRef = useRef(null)
	const [rowWidth, setRowWidth] = useState(0)

	const [dragging, setDragging] = useState(false)
	const [readyToAnimate, setReadyToAnimate] = useState(true)

	const [hoveredIcon, setHoveredIcon] = useState(null)

	useEffect(() => {
		widthRef.current && setRowWidth(widthRef.current.offsetWidth)
	}, [windowWidth])

	//	also have to account for section padding, which reduces the width needed to exceed the right side of the viewport
	//	2rem (32px) padding until sm screen size, then 4rem (64px)
	const sectionPaddingRef = useRef(32)

	//	and icon padding: 0.5rem (8px) up to sm. screen size then 1rem (16px)
	const iconPaddingRef = useRef(8)

	if (windowWidth >= 640) {
		sectionPaddingRef.current = 64
		iconPaddingRef.current = 16
	} else {
		sectionPaddingRef.current = 32
		iconPaddingRef.current = 8
	}

	const overflowing =
		bracesWidth && rowWidth && windowWidth >= 1024
			? rowWidth >= bracesWidth
			: rowWidth &&
			  windowWidth &&
			  rowWidth >=
					windowWidth -
						sectionPaddingRef.current -
						iconPaddingRef.current

	useEffect(() => {
		let timeoutId = null
		if (dragging) {
			setReadyToAnimate(false)
			setHoveredIcon(null)
		} else {
			timeoutId = setTimeout(() => {
				setReadyToAnimate(true)
			}, 1000)
		}

		return () => clearTimeout(timeoutId)
	}, [dragging])

	return (
		<div
			className={`'mt-4 flex h-auto w-auto flex-col items-start ${
				!overflowing ? 'lg:items-center' : ''
			} lg:mt-0' justify-end`}
		>
			<p className='my-4 w-full text-xs font-bold sm:text-sm'>
				{caption}
			</p>
			<motion.div
				className={`flex ${styles.row} ${
					overflowing && readyToAnimate ? styles.scrolling : ''
				} ${dragging || !readyToAnimate ? styles.dragging : ''}`}
				drag={overflowing ? 'x' : false}
				dragConstraints={{
					left: 0,
					right: rowWidth,
				}}
				dragSnapToOrigin
				onDragStart={() => setDragging(true)}
				onDragEnd={() => setDragging(false)}
				onHoverEnd={() => setHoveredIcon(null)}
			>
				<div ref={widthRef} className='row1 grid grid-flow-col'>
					{data.map((item: SkillComponentInterface, i: number) => {
						return (
							<Skill
								key={i}
								index={i}
								src={item.src}
								text={item.text}
								hoveredIcon={hoveredIcon}
								setHoveredIcon={setHoveredIcon}
							/>
						)
					})}
				</div>
				<div
					className={`row2 grid-flow-col ${
						overflowing ? 'grid' : 'hidden'
					}`}
					style={{ transform: 'translateX(-200%)' }}
				>
					{data.map((item: SkillComponentInterface, j: number) => {
						return (
							<Skill
								key={j}
								index={j}
								src={item.src}
								text={item.text}
								hoveredIcon={hoveredIcon}
								setHoveredIcon={setHoveredIcon}
							/>
						)
					})}
				</div>
			</motion.div>
		</div>
	)
}

export default SkillRow
