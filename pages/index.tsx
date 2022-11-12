import React, { useRef } from 'react'
import Head from 'next/head'
import Work from '../components/Work/Work'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import DropdownMenu from '../components/Navbar/DropdownMenu'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import styles from './index.module.css'

export default function Index({ darkMode, showModal, setShowModal }) {
	const aboutSectionRef = useRef(null)
	const innerCircleRef = useRef(null)
	const middleCircleRef = useRef(null)
	const outerCircleRef = useRef(null)

	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [1, 0])

	const welcomeSectionVariants = {
		initial: {
			y: -50,
			transition: {
				delay: 0.5,
			},
		},
		visible: {
			y: 0,
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
		<>
			<Head>
				<title>Julian&apos;s Web Dev Portfolio</title>
				<meta
					name='description'
					content='A site where you can find info about me and my work as a full-stack developer'
					key='desc'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{showModal && <DropdownMenu setShowModal={setShowModal} />}
			<body
				className={`relative h-full w-full ${
					showModal ? 'overflow-hidden' : ''
				}`}
				onClick={() => {
					showModal && setShowModal(false)
				}}
			>
				<AnimatePresence>
					{darkMode && (
						<motion.div
							id='staticDarkModeBg'
							className='absolute inset-0 z-[-1] h-full w-full'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							style={{
								backgroundColor: 'rgb(30 41 59)',
							}}
						></motion.div>
					)}
				</AnimatePresence>
				<div
					id='modalBlurWrapper'
					className={`h-full ${showModal ? 'blur-sm' : ''}`}
				>
					<motion.section
						id='welcomeSectionContainer'
						className='relative flex h-full flex-col items-center justify-evenly overflow-hidden text-stone-500 dark:text-white'
						style={{
							padding:
								'clamp(8rem, 8vw, 8vh) clamp(2rem, 8vw, 8vh)',
							opacity: opacityTransform,
						}}
						variants={welcomeSectionVariants}
						whileInView='visible'
						viewport={{ once: true }}
						onAnimationComplete={() => {
							startCirclesAnimation()
							setTimeout(() => {
								endAnimation()
							}, 1500)
						}}
					>
						<AnimatePresence>
							{!darkMode && (
								<motion.div
									id='lightModeBg'
									className='absolute inset-0 z-[-1] h-full w-full bg-mainBg bg-cover'
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
							className='flex items-center justify-center'
							style={{ marginBottom: 'clamp(1rem, 3vw, 4vh)' }}
							variants={childVariants}
						>
							<h1
								className='dark:text-white'
								style={{
									fontSize: 'clamp(2rem, 10vw, 10vh)',
									marginRight: 'max(4vw, 2rem)',
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
							className='flex items-center justify-center drop-shadow-mediumDark'
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
							className='text-center dark:text-white'
							style={{
								fontSize: 'clamp(1.25rem, 4vw, 4vh)',
								margin: 'clamp(1rem, 3vw, 4vh) 0',
							}}
							variants={childVariants}
						>
							of web development.
						</motion.h2>
						<div
							id='continueButtonFlexContainer'
							className='flex w-[80%] max-w-3xl justify-center md:justify-end'
						>
							<motion.button
								id='continueButton'
								className='relative self-end rounded-[2rem] px-4 before:absolute before:inset-[-2px] before:z-[-1] before:rounded-[3rem] before:bg-tomatoToLightPink hover:bg-tomatoToLightPink hover:bg-no-repeat hover:text-white dark:shadow-2xl'
								style={{
									fontSize: 'clamp(1.25rem, 4vw, 4vh)',
									width: 'min(100%, 250px)',
									backgroundColor: darkMode
										? 'rgb(30 41 59)'
										: 'rgba(255,255,255,0.9)',
								}}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() =>
									aboutSectionRef.current.scrollIntoView({
										behavior: 'smooth',
									})
								}
								variants={childVariants}
							>
								Continue
							</motion.button>
						</div>
					</motion.section>
					<div ref={aboutSectionRef}></div>
					<About darkMode={darkMode} />
					<Work darkMode={darkMode} />
					<Contact darkMode={darkMode} />
				</div>
			</body>
		</>
	)
}
