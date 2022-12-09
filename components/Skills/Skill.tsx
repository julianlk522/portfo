import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { SkillInterface } from './SkillsData'

export interface SkillComponentInterface extends SkillInterface {
	index: number
	src: StaticImageData
	text: string
	hoveredIcon: null | number
	setHoveredIcon: React.Dispatch<any>
}

function Skill({
	index,
	src,
	text,
	hoveredIcon,
	setHoveredIcon,
}: SkillComponentInterface) {
	return (
		<motion.div
			className='mr-2 flex h-16 w-16 select-none flex-col items-center justify-center whitespace-nowrap rounded-md bg-white bg-opacity-40 p-2 text-center sm:mr-4 sm:p-4 tall:h-20 tall:w-20'
			style={{
				boxShadow: 'rgb(0 0 0 / 20%) 4px 5px 50px -5px',
			}}
			onHoverStart={() => setHoveredIcon(index)}
			onTouchStart={() => setHoveredIcon(index)}
			onTouchEnd={() => setHoveredIcon(null)}
			animate={
				hoveredIcon !== null
					? {
							y:
								hoveredIcon === index
									? -10
									: Math.abs(hoveredIcon - index) === 1
									? -5
									: 0,
					  }
					: { y: 0 }
			}
			transition={{ type: 'spring', bounce: 0.6, damping: 6 }}
		>
			<div className='pointer-events-none block tall:hidden'>
				<Image
					className='h-1/2 opacity-60'
					src={src}
					alt={text}
					height={text ? 24 : 36}
					width={text ? 24 : 36}
				/>
			</div>
			<div className='pointer-events-none hidden tall:block'>
				<Image
					className='h-1/2 opacity-60'
					src={src}
					alt={text}
					height={text ? 36 : 48}
					width={text ? 36 : 48}
				/>
			</div>

			{text && <p className='text-[8px] tall:text-[10px]'>{text}</p>}
		</motion.div>
	)
}

export default Skill
