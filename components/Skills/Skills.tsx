import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
	strongSkillsData,
	mediumSkillsData,
	futureSkillsData,
} from './SkillsData'
import SkillRow from './SkillsRow'
import Image from 'next/image'
import scrollDown from '../../public/scrollUp.webp'

function Skills({ darkMode }) {
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(
		scrollYProgress,
		[0.375, 0.5, 0.625],
		[0, 1, 0]
	)

	return (
		<motion.section
			id='skillsContainer'
			className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden pl-8 pt-24 text-stone-600 dark:text-white sm:pl-16'
			style={{
				opacity: opacityTransform,
			}}
		>
			<div
				id='skillsBg'
				className='pointer-events-none fixed inset-0 z-[-1] h-full w-full bg-cover opacity-10 dark:opacity-10'
				style={{
					backgroundImage: darkMode
						? 'linear-gradient(-10deg, rgba(255, 91, 35, 0) 0%, rgb(0, 216, 255) 45%, rgba(255, 91, 35, 0) 85%)'
						: 'linear-gradient(135deg,hsl(341deg 100% 84%) 0%,hsl(353deg 100% 79%) 9%,hsl(3deg 100% 73%) 20%,hsl(15deg 100% 57%) 50%,hsl(3deg 100% 73%) 80%,hsl(353deg 100% 79%) 91%,hsl(341deg 100% 84%) 100%)',
				}}
			></div>
			<div
				id='skillsContentContainer'
				className='flex w-full max-w-7xl flex-col'
			>
				<motion.h2
					id='skillsTitle'
					className='my-auto self-start bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink tall:my-0'
					style={{
						fontSize: 'clamp(1rem, 6vw, 6vh)',
						textShadow: darkMode
							? '4px 10px 4px rgb(255 255 255 / 5%)'
							: '4px 10px 4px rgb(0 0 0 / 5%)',
					}}
				>
					Software Skills
				</motion.h2>
				<SkillRow
					data={strongSkillsData}
					caption="Some of the tools I'm most comfortable using..."
				/>
				<SkillRow
					data={mediumSkillsData}
					caption='I have some experience with these too but also lots to learn and improve on...'
				/>
				<div
					id='finalSkillRowFlexContainer'
					className='flex w-full items-end lg:pb-16'
				>
					<SkillRow
						data={futureSkillsData}
						caption="...and I haven't yet used these but am excited to try them!"
					/>
					<motion.button
						id='skillsScrollDownButtonLg'
						className='buttonContainer ml-32 mb-4 hidden h-fit lg:flex'
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
		</motion.section>
	)
}

export default Skills
