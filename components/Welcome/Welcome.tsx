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
			id='welcomeContainer'
			className='relative mx-auto flex h-screen items-center justify-evenly overflow-hidden px-16 text-stone-600 dark:text-white lg:overflow-visible'
			style={{
				opacity: opacityTransform,
			}}
		>
			<AnimatePresence>
				{!darkMode && showLightModeBg && (
					<motion.div
						id='welcomeLightModeBg'
						className='fixed inset-0 z-[-1] h-full w-full bg-introAndOutroBg bg-cover'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					></motion.div>
				)}
			</AnimatePresence>
			<motion.div id='circleEffects'>
				<div
					id='bgCircleEffectPink'
					className='absolute top-[10%] right-[40%] h-64 w-64 rounded-full bg-primaryPink opacity-[12%] blur-xl dark:opacity-5 sm:h-[60vw] sm:w-[60vw] lg:right-[50%] lg:h-1/2 lg:w-1/2'
				></div>
				<div
					id='bgCircleEffectBlue'
					className='absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-primaryBlue opacity-[7%] blur-3xl sm:hidden sm:h-[60vw] sm:w-[60vw] lg:left-[50%] lg:h-1/2 lg:w-1/2'
				></div>
			</motion.div>
			<div
				id='welcomeTextContent'
				className='flex h-full w-full flex-col justify-center sm:w-min'
			>
				<h1
					className='mb-8 font-bold dark:text-white'
					style={{
						fontSize: 'clamp(1rem, 6vw, 6vh)',
					}}
				>
					Julian Lindsay-Kaufman
				</h1>
				<h2
					className='min-w-fit opacity-60 dark:text-white'
					style={{
						fontSize: 'clamp(1rem, 2vw, 2vh)',
					}}
				>
					a well-rounded repertoire of
				</h2>
				<h2
					style={{
						fontSize: 'clamp(1rem, 6vw, 6vh)',
					}}
				>
					<span
						className='font-bold opacity-60'
						style={{
							fontSize: 'clamp(1rem, 4vw, 4vh)',
						}}
					>
						full-stack&nbsp;
					</span>
					<span className='bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink'>
						design&nbsp;
					</span>
				</h2>
				<h2
					className='mb-8'
					style={{
						fontSize: 'clamp(1rem, 6vw, 6vh)',
					}}
				>
					<span
						className='font-bold opacity-60'
						style={{
							fontSize: 'clamp(1rem, 4vw, 4vh)',
						}}
					>
						and&nbsp;
					</span>
					<span className='bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink'>
						development.
					</span>
				</h2>
				<div
					id='continueButtonFlexContainer'
					className='mt-8 max-w-3xl'
				>
					<motion.button
						id='welcomeContinueButton'
						className='buttonContainer'
						whileHover={{ scale: 1.25 }}
						whileTap={{ scale: 1.1 }}
						onClick={() => {
							document
								.getElementById('aboutContainer')
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
				</div>
			</div>

			<div
				id='svgPhotoContainer'
				className='relative hidden h-full w-[40vw] min-w-0 max-w-xl items-center justify-center overflow-visible dark:text-black sm:flex'
			>
				<SvgPhoto darkMode={darkMode} />
			</div>
		</motion.section>
	)
}

export default Welcome
