import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import scrollUp from '../public/scrollUp.webp'

interface ScrollButtonInterface {
	section: string
	styles?: string
	variants?: Variants
	clickEvent?: () => void
}

function ScrollButton({
	section,
	styles,
	variants,
	clickEvent,
}: ScrollButtonInterface) {
	return (
		<motion.button
			className={`buttonContainer flex max-w-fit ${styles}`}
			variants={variants ?? {}}
			whileHover={{ scale: 1.25 }}
			whileTap={{ scale: 1.1 }}
			onClick={() => {
				clickEvent && clickEvent()
				document
					.getElementById(section)
					.scrollIntoView({ behavior: 'smooth' })
			}}
		>
			<div className='relative h-4 w-8'>
				<div className='buttonArrowContainer'>
					<Image
						src={scrollUp}
						alt={`continue to ${
							section.charAt(0).toUpperCase() + section.slice(1)
						} section`}
						width={19}
						height={10}
						className='rotate-180 opacity-20 dark:invert'
					/>
				</div>
			</div>
			<p className='ml-4 w-min text-xs lg:text-sm 2xl:text-xs'>
				Continue
			</p>
		</motion.button>
	)
}

export default ScrollButton
