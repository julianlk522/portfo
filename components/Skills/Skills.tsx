import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useWindowDimensions from '../hooks/useWindowDimensions'
import {
	strongSkillsData,
	mediumSkillsData,
	futureSkillsData,
} from './SkillsData'
import SkillRow from './SkillsRow'
import Image from 'next/image'
import scrollDown from '../../public/scrollUp.webp'
import SkillsCurlyBraces from './SkillsCurlyBraces'
import SkillsEllipsis from './SkillsEllipsis'

function Skills({ darkMode }) {
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(
		scrollYProgress,
		[0.375, 0.5, 0.625],
		[0, 1, 0]
	)

	const { width } = useWindowDimensions()
	const [bracesWidth, setBracesWidth] = useState(0)
	const bracesWidthRef = useRef(null)

	useEffect(() => {
		if (bracesWidthRef.current) {
			setBracesWidth(bracesWidthRef.current.offsetWidth)
		}
	}, [width])

	return (
		<motion.section
			id='skillsContainer'
			className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden pl-8 pt-24 text-stone-600 dark:text-white sm:pl-16 lg:px-16'
			style={{
				opacity: opacityTransform,
			}}
		>
			{darkMode && (
				<div
					id='skillsBg'
					className='pointer-events-none fixed inset-0 h-full w-full bg-cover opacity-10 dark:opacity-10'
					style={{
						backgroundImage:
							'linear-gradient(-10deg, rgba(255, 91, 35, 0) 0%, rgb(0, 216, 255) 45%, rgba(255, 91, 35, 0) 85%)',
					}}
				></div>
			)}
			<div
				id='skillsContentContainer'
				className='flex h-full w-full max-w-7xl flex-col justify-center 2xl:max-w-[1500px]'
			>
				<motion.h2
					id='skillsTitle'
					className='my-auto self-start bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink lg:self-center tall:my-0 tall:mb-8'
					style={{
						fontSize: 'clamp(1rem, 6vw, 6vh)',
						textShadow: darkMode
							? '4px 10px 4px rgb(255 255 255 / 5%)'
							: '4px 10px 4px rgb(0 0 0 / 5%)',
					}}
				>
					Software Skills
				</motion.h2>
				<div
					ref={bracesWidthRef}
					id='bracesContainer'
					className='relative flex flex-col lg:max-w-[80%] lg:self-center lg:text-center 2xl:max-w-[60%]'
				>
					<SkillsCurlyBraces closing={false} />
					<div
						id='bracesOverflowContainer'
						className={`flex h-full w-full flex-col overflow-hidden border-dotted border-x-black border-opacity-5 ${
							darkMode ? '' : 'border-x-[1px]'
						}`}
					>
						<SkillRow
							data={strongSkillsData}
							caption="Some of the tools I'm most comfortable using..."
							bracesWidth={bracesWidth}
						/>
						<SkillRow
							data={mediumSkillsData}
							caption='I have some experience with these too but also lots to learn and improve on...'
							bracesWidth={bracesWidth}
						/>
						<div
							id='finalSkillRowFlexContainer'
							className='flex w-full items-end lg:justify-center tall:lg:pb-20'
						>
							<SkillRow
								data={futureSkillsData}
								caption="...and I haven't yet used these but am excited to try them!"
								bracesWidth={bracesWidth}
							/>
						</div>
						<motion.button
							id='skillsScrollDownButtonSm'
							className='buttonContainer mb-16 mt-8 mr-8 flex self-center sm:mr-16 lg:hidden tall:mt-16'
							whileHover={{ scale: 1.25 }}
							whileTap={{ scale: 1.1 }}
							onClick={() => {
								document
									.getElementById('workContainer')
									.scrollIntoView({ behavior: 'smooth' })
							}}
						>
							<div className='relative h-4 w-8'>
								<div className='buttonArrowContainer'>
									<Image
										src={scrollDown}
										alt='continue to Work section'
										width={19}
										height={10}
										className='rotate-180 opacity-20 dark:invert'
									/>
								</div>
							</div>
							<motion.p className='ml-4 w-min text-xs lg:text-[0.6rem] xl:text-xs'>
								Continue
							</motion.p>
						</motion.button>
					</div>
					<SkillsCurlyBraces closing />
					<SkillsEllipsis />
				</div>
				<motion.button
					id='skillsScrollDownButtonLg'
					className='buttonContainer mt-8 mb-16 hidden self-center lg:flex'
					style={{ width: 'min-content' }}
					whileHover={{ scale: 1.25 }}
					whileTap={{ scale: 1.1 }}
					onClick={() => {
						document
							.getElementById('workContainer')
							.scrollIntoView({ behavior: 'smooth' })
					}}
				>
					<div className='relative h-4 w-8'>
						<div className='buttonArrowContainer'>
							<Image
								src={scrollDown}
								alt='continue to Work section'
								width={19}
								height={10}
								className='rotate-180 opacity-20 dark:invert'
							/>
						</div>
					</div>
					<motion.p className='ml-4 w-min text-xs lg:text-[0.6rem] xl:text-xs'>
						Continue
					</motion.p>
				</motion.button>
			</div>
		</motion.section>
	)
}

export default Skills
