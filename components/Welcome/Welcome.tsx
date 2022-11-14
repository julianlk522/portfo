import React, { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import styles from './Welcome.module.css'

function Welcome({ darkMode }) {
	const innerCircleRef = useRef(null)
	const middleCircleRef = useRef(null)
	const outerCircleRef = useRef(null)

	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [1, 0])
	const showLightModeBg = useTransform(
		scrollYProgress,
		(progress) => progress <= 0.1
	).get()

	const welcomeSectionVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.5,
			},
		},
	}

	const childVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	const startCirclesAnimation = () => {
		innerCircleRef.current.classList.add(styles.innerCircleAnimating)
		middleCircleRef.current.classList.add(styles.middleCircleAnimating)
		outerCircleRef.current.classList.add(styles.outerCircleAnimating)
	}

	const endAnimation = () => {
		innerCircleRef.current.classList.remove(styles.innerCircleAnimating)
		middleCircleRef.current.classList.remove(styles.middleCircleAnimating)
		outerCircleRef.current.classList.remove(styles.outerCircleAnimating)
	}
	return (
		<motion.section
			id='welcomeContainer'
			className='relative mx-auto flex h-screen max-w-7xl flex-col justify-center overflow-hidden px-16 text-stone-500 dark:text-white'
			style={{
				opacity: opacityTransform,
			}}
			variants={welcomeSectionVariants}
			initial='initial'
			animate='visible'
			onAnimationComplete={() => {
				startCirclesAnimation()
				setTimeout(() => {
					endAnimation()
				}, 1500)
			}}
		>
			<AnimatePresence>
				{!darkMode && showLightModeBg && (
					<motion.div
						id='welcomeLightModeBg'
						className='fixed inset-0 z-[-1] h-full w-full bg-mainBg bg-cover'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					></motion.div>
				)}
			</AnimatePresence>
			<motion.div id='circleEffects' variants={childVariants}>
				<div
					id='bgCircleEffectPink'
					className='absolute top-[10%] right-[40%] h-64 w-64 rounded-full bg-[#FFACC6]  opacity-[12%] blur-3xl dark:opacity-10 sm:h-[60vw] sm:w-[60vw] lg:right-[50%] lg:h-1/2 lg:w-1/2'
				></div>
				<div
					id='bgCircleEffectBlue'
					className='absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-[#00d8ff] opacity-[7%] blur-3xl sm:h-[60vw] sm:w-[60vw] lg:left-[50%] lg:h-1/2 lg:w-1/2'
				></div>
			</motion.div>
			<motion.div
				id='welcomeTitleContainer'
				className='flex items-center'
				variants={childVariants}
			>
				<h1
					className='mr-8 dark:text-white'
					style={{
						fontSize: 'clamp(2rem, 10vw, 10vh)',
					}}
				>
					Welcome
				</h1>
				<motion.div
					id='welcomeTextCircles'
					ref={outerCircleRef}
					className={`relative h-12 w-12 self-center rounded-full border-4 border-[#00d8ff] opacity-20 sm:h-24 sm:w-24 sm:border-8 ${styles}`}
					onHoverStart={startCirclesAnimation}
					onHoverEnd={endAnimation}
				>
					<div
						id='middleCircle'
						ref={middleCircleRef}
						className='absolute top-[10%] left-[10%] h-8 w-8 rounded-full border-4 border-[#00d8ff] sm:h-16 sm:w-16 sm:border-8'
					></div>
					<div
						id='innerCircle'
						ref={innerCircleRef}
						className='absolute left-[30%] top-[30%] h-4 w-4 rounded-full border-4 border-[#00d8ff] sm:h-8 sm:w-8 sm:border-8'
					></div>
				</motion.div>
			</motion.div>
			<motion.div
				id='toTheFrontierContainer'
				className='my-8 flex items-center drop-shadow-sm'
				style={{ fontSize: 'clamp(2rem, 10vw, 10vh)' }}
				variants={childVariants}
			>
				<h2 className='min-w-fit opacity-40 dark:text-white'>
					to the&nbsp;
				</h2>
				<br />
				<h2 className='bg-tomatoToLightPink bg-clip-text text-transparent'>
					frontier
				</h2>
			</motion.div>
			<motion.h2
				className='dark:text-white'
				style={{
					fontSize: 'clamp(1.25rem, 4vw, 4vh)',
				}}
				variants={childVariants}
			>
				of web development.
			</motion.h2>
			<div
				id='continueButtonFlexContainer'
				className='mt-32 ml-2 max-w-3xl md:mt-16'
			>
				<motion.button
					id='continueButton'
					className='relative rounded-[3rem] bg-[rgba(255,255,255,0.9)] px-4 before:absolute before:inset-[-2px] before:z-[-1] before:rounded-[3rem] before:bg-tomatoToLightPink hover:bg-tomatoToLightPink hover:bg-no-repeat hover:text-white dark:bg-slate-800 dark:shadow-2xl'
					style={{
						fontSize: 'clamp(1.25rem, 4vw, 4vh)',
						width: 'min(100%, 250px)',
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() =>
						document
							.getElementById('aboutContainer')
							.scrollIntoView({ behavior: 'smooth' })
					}
					variants={childVariants}
				>
					Continue
				</motion.button>
			</div>
		</motion.section>
	)
}

export default Welcome