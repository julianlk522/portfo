import React from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import scrollDown from '../../public/scrollUp.webp'
import SvgPhoto from './SvgPhoto'

function Welcome({ darkMode }) {
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [1, 0])
	const showLightModeBg = useTransform(
		scrollYProgress,
		(progress) => progress <= 0.1
	).get()

	return (
		<motion.section
			id='welcome'
			className='relative h-screen overflow-hidden px-16 text-stone-600 dark:text-white'
			style={{
				opacity: opacityTransform,
			}}
		>
			<AnimatePresence>
				{!darkMode && showLightModeBg && (
					<motion.div
						id='welcomeLightModeBg'
						className='pointer-events-none fixed inset-0 z-[-1] h-full w-full bg-introAndOutroBg bg-cover'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					></motion.div>
				)}
			</AnimatePresence>
			<motion.div id='bgCircleEffects'>
				<div className='pointer-events-none absolute top-[10%] right-[40%] h-64 w-64 rounded-full bg-primaryPink opacity-[12%] blur-3xl dark:opacity-5 sm:h-[60vw] sm:w-[60vw] lg:right-[50%] lg:h-1/2 lg:w-1/2'></div>
				{!darkMode && (
					<div className='pointer-events-none absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-primaryBlue opacity-[7%] blur-3xl sm:h-[60vw] sm:w-[60vw] lg:left-[50%] lg:h-1/2 lg:w-1/2'></div>
				)}
			</motion.div>
			<div
				id='welcomeContentFlexWrapper'
				className='flex h-full justify-center'
			>
				<motion.div
					id='welcomeTextContent'
					className='flex h-full w-full flex-col justify-center sm:mr-8 sm:w-min lg:mr-32 2xl:mr-64'
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<h1
						className='font-bold dark:text-white'
						style={{
							fontSize: 'clamp(1rem, 6vw, 6vh)',
						}}
					>
						Julian Lindsay-Kaufman
					</h1>
					<h2
						className='mt-8 min-w-fit opacity-60 dark:text-white'
						style={{
							fontSize: 'clamp(1rem, 2vw, 2vh)',
						}}
					>
						a well-rounded repertoire of
					</h2>
					<h2>
						<span
							className='bg-none font-bold text-stone-600 opacity-60 dark:text-white'
							style={{
								fontSize: 'clamp(1rem, 4vw, 4vh)',
							}}
						>
							full-stack&nbsp;
						</span>
						<span
							className='bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink'
							style={{
								fontSize: 'clamp(1rem, 6vw, 6vh)',
							}}
						>
							design&nbsp;
						</span>
					</h2>
					<h2>
						<span
							className='bg-none font-normal text-stone-600 opacity-60 dark:text-white'
							style={{
								fontSize: 'clamp(1rem, 4vw, 4vh)',
							}}
						>
							and&nbsp;
						</span>
						<span
							className='bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink'
							style={{
								fontSize: 'clamp(1rem, 6vw, 6vh)',
							}}
						>
							development.
						</span>
					</h2>
					<motion.button
						id='welcomeContinueButton'
						className='buttonContainer mt-16 flex max-w-fit'
						whileHover={{ scale: 1.25 }}
						whileTap={{ scale: 1.1 }}
						onClick={() => {
							document
								.getElementById('about')
								.scrollIntoView({ behavior: 'smooth' })
						}}
					>
						<div className='relative h-4 w-8'>
							<div className='buttonArrowContainer'>
								<Image
									src={scrollDown}
									alt='continue to About section'
									width={19}
									height={10}
									className='rotate-180 opacity-20 dark:invert'
								/>
							</div>
						</div>
						<p className='ml-4 w-min text-xs lg:text-[0.6rem] 2xl:text-xs'>
							Continue
						</p>
					</motion.button>
				</motion.div>
				<div className='flex items-center'>
					<SvgPhoto darkMode={darkMode} />
				</div>
			</div>
		</motion.section>
	)
}

export default Welcome
