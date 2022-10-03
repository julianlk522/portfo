import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Work from '../components/Work'
import Contact from '../components/Contact'
import cloud from '../public/Cloud.svg'
import About from '../components/About'

export default function Home({ darkMode }) {
	const welcomeContainerRef = useRef(null)
	const workSectionRef = useRef(null)
	const hueRotateRef = useRef(null)
	const innerCircleRef = useRef(null)
	const middleCircleRef = useRef(null)
	const outerCircleRef = useRef(null)
	const [hueCoef, setHueCoef] = useState<number>(0)

	const { scrollYProgress } = useScroll()

	const containerVariants = {
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

	useEffect(() => {
		if (darkMode) welcomeContainerRef.current.style.opacity = '1'
	}, [darkMode])

	const opacityTransform = useTransform(scrollYProgress, [0, 0.17], [1, 0])

	const startCirclesAnimation = () => {
		innerCircleRef.current.style.animation =
			'innerCircleGlow 1.5s ease-in-out infinite'
		middleCircleRef.current.style.animation =
			'middleCircleGlow 1.5s ease-in-out infinite'
		outerCircleRef.current.style.animation =
			'outerCircleGlow 1.5s ease-in-out infinite'
	}

	const endAnimation = () => {
		innerCircleRef.current.style.animation = ''
		middleCircleRef.current.style.animation = ''
		outerCircleRef.current.style.animation = ''
	}

	return (
		<>
			<Head>
				<title>Julian's Portfolio</title>
				<meta
					name='A site where you can find info about me and my work as a web developer'
					content='Created with NextJS'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<motion.section
				ref={welcomeContainerRef}
				id='welcomeContainer'
				className={`${
					darkMode
						? 'bg-slate-800 text-white'
						: 'bg-mainBg text-stone-500'
				} relative z-[1] flex h-full flex-col items-center justify-between overflow-y-auto overflow-x-hidden bg-cover`}
				style={{
					padding: 'clamp(8rem, 8vw, 8vh) clamp(2rem, 8vw, 8vh)',
					opacity: darkMode ? '1' : opacityTransform,
				}}
				onMouseMove={(e: React.MouseEvent) => {
					setHueCoef((prev) => prev + e.movementX / 4)
					hueRotateRef.current.style.filter = `hue-rotate(${hueCoef}deg)`
				}}
				initial='initial'
				variants={containerVariants}
				whileInView='visible'
				viewport={{ once: true }}
				onAnimationComplete={() => {
					startCirclesAnimation()
					setTimeout(() => {
						endAnimation()
					}, 1500)
				}}
			>
				<div
					id='bgCloud'
					ref={hueRotateRef}
					className={`${
						darkMode ? 'opacity-5' : 'opacity-10'
					} absolute bottom-0 right-[-10%] h-3/4 w-3/4`}
				>
					<Image
						src={cloud}
						layout='fill'
						objectFit='contain'
						alt='illustration'
						priority
					/>
				</div>
				<motion.div
					id='welcomeTitleContainer'
					className='flex items-center justify-center'
					style={{ marginBottom: 'clamp(1rem, 3vw, 4vh)' }}
					variants={childVariants}
				>
					<motion.h1
						className={`${darkMode && 'text-white'}`}
						style={{
							fontSize: 'clamp(2rem, 10vw, 10vh)',
							marginRight: 'max(4vw, 2rem)',
						}}
					>
						Welcome
					</motion.h1>
					<motion.div
						id='welcomeTextCircles'
						ref={outerCircleRef}
						className='relative h-24 w-24 self-center rounded-full border-8 border-[#00d8ff] opacity-20'
						onHoverStart={startCirclesAnimation}
						onHoverEnd={endAnimation}
					>
						<div
							id='middleCircle'
							ref={middleCircleRef}
							className='absolute top-[10%] left-[10%] h-16 w-16 rounded-full border-8 border-[#00d8ff]'
						></div>

						<div
							id='innerCircle'
							ref={innerCircleRef}
							className='absolute left-[30%] top-[30%] h-8 w-8 rounded-full border-8 border-[#00d8ff]'
						></div>
					</motion.div>
				</motion.div>

				<motion.div
					id='toTheFrontierContainer'
					className='flex items-center justify-center drop-shadow-mediumDark'
					style={{ fontSize: 'clamp(2rem, 10vw, 10vh)' }}
					variants={childVariants}
				>
					<span
						className={`${
							darkMode ? 'text-white opacity-40' : ''
						} min-w-fit`}
					>
						to the
					</span>
					<h2
						className='relative bg-tomatoToLightPink bg-clip-text text-transparent before:absolute before:top-[-125%] before:left-[-180%] before:h-48 before:w-48 before:rounded-full before:border-[6px] before:border-[#00d8ff] before:border-opacity-[2%] after:absolute after:top-[-125%] after:left-[-200%] after:h-48 after:w-48 after:rounded-full after:border-[6px] after:border-[#00d8ff] after:border-opacity-5 sm:before:top-[-100%] sm:before:h-32 sm:before:w-32 sm:before:border-[6px] sm:after:top-[50%] sm:after:h-96 sm:after:w-96 sm:after:border-[12px]'
						style={{
							marginLeft: 'max(4%, 0.75rem)',
						}}
					>
						frontier
					</h2>
				</motion.div>
				<motion.h3
					className={`text-center ${darkMode ? 'text-white' : ''}`}
					style={{
						fontSize: 'clamp(1.25rem, 4vw, 4vh)',
						margin: 'clamp(1rem, 3vw, 4vh) 0',
					}}
					variants={childVariants}
				>
					of web development.
				</motion.h3>

				<div
					id='continueButtonContainer'
					className='flex w-full max-w-3xl justify-center md:justify-end'
				>
					<motion.button
						id='continueButton'
						className={`relative self-end rounded-[2rem] px-4 before:absolute before:top-[-2px] before:left-[-2px] before:right-[-2px] before:bottom-[-2px] before:z-[-1] before:rounded-[2rem] before:bg-tomatoToLightPink hover:bg-tomatoToLightPink hover:bg-no-repeat ${
							darkMode
								? 'bg-slate-800 shadow-2xl'
								: 'bg-[rgba(255,255,255,0.9)] hover:text-white'
						}`}
						style={{
							fontSize: 'clamp(1.25rem, 4vw, 4vh)',
							width: 'min(100%, 250px)',
						}}
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
						onClick={() =>
							workSectionRef.current.scrollIntoView({
								behavior: 'smooth',
							})
						}
						variants={childVariants}
					>
						Continue
					</motion.button>
				</div>
			</motion.section>
			<div ref={workSectionRef}></div>
			<About darkMode={darkMode} />
			<Work darkMode={darkMode} />
			<Contact darkMode={darkMode} />
		</>
	)
}
