import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Work from '../components/Work'
import Contact from '../components/Contact'
import cloud from '../public/Cloud.svg'

export default function Home({ darkMode }) {
	const welcomeContainerRef = useRef(null)
	const continueRef = useRef(null)
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

	const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0])

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
						: 'bg-mainBgFaded text-stone-500'
				} bg-cover h-full flex flex-col items-center relative z-[1]`}
				style={{
					padding: 'clamp(8rem, 8vw, 8vh) clamp(2rem, 6vw, 6vh)',
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
			>
				<div
					id='bgCloud'
					ref={hueRotateRef}
					className={`${
						darkMode ? 'opacity-5' : 'opacity-10'
					} absolute bottom-[-5%] right-[-10%] h-3/4 w-3/4`}
				>
					<Image
						src={cloud}
						layout='fill'
						objectFit='contain'
						alt='illustration'
					/>
				</div>
				<motion.div
					id='welcomeTitleContainer'
					className='flex justify-center items-center'
					style={{ marginBottom: 'clamp(2rem, 12vw, 12vh)' }}
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
						className='relative self-center w-24 h-24 rounded-full border-8 opacity-20 border-[#00d8ff]'
						onHoverStart={() => {
							innerCircleRef.current.style.animation =
								'innerCircleGlow 1.5s ease-in-out infinite'
							middleCircleRef.current.style.animation =
								'middleCircleGlow 1.5s ease-in-out infinite'
							outerCircleRef.current.style.animation =
								'outerCircleGlow 1.5s ease-in-out infinite'
						}}
						onHoverEnd={() => {
							innerCircleRef.current.style.animation = ''
							middleCircleRef.current.style.animation = ''
							outerCircleRef.current.style.animation = ''
						}}
					>
						<div
							id='middleCircle'
							ref={middleCircleRef}
							className='absolute top-[10%] left-[10%] w-16 h-16 rounded-full border-8 border-[#00d8ff]'
						></div>

						<div
							id='innerCircle'
							ref={innerCircleRef}
							className='absolute w-8 h-8 left-[30%] top-[30%] rounded-full border-8 border-[#00d8ff]'
						></div>
					</motion.div>
				</motion.div>

				<div
					id='welcomeContentContainer'
					className='h-full flex justify-between'
				>
					<div
						id='welcomeTextContent'
						className='flex flex-col h-full w-full justify-evenly max-h-[50vw]'
					>
						<motion.div
							className='flex justify-between items-center'
							style={{ fontSize: 'clamp(2rem, 10vw, 10vh)' }}
							variants={childVariants}
						>
							<span
								className={`${
									darkMode && 'text-white opacity-40'
								} min-w-fit`}
							>
								to the
							</span>
							<h2
								className='relative bg-tomatoToLightPink text-transparent bg-clip-text after:absolute after:top-[-125%] md:after:top-[50%] after:left-[-200%] after:border-[6px] after:w-48 after:h-48 md:after:w-96 md:after:h-96 after:rounded-full md:after:border-[12px] after:border-opacity-5 after:border-[#00d8ff] drop-shadow-lg'
								style={{
									marginLeft: 'min(25%, 2rem)',
								}}
							>
								frontier
							</h2>
						</motion.div>
						<div
							className='flex justify-between items-center mt-8 md:mt-12'
							style={{
								fontSize: 'clamp(1.25rem, 4vw, 4vh)',
							}}
						>
							<motion.h3
								className={`${
									darkMode && 'text-white'
								} text-center`}
								variants={childVariants}
							>
								of web development.
							</motion.h3>
							<motion.button
								id='continueButton'
								className={`relative px-4 hidden md:block rounded-[2rem] bg-tomatoToLightPink before:absolute before:top-[4px] before:left-[4px] before:right-[4px] before:bottom-[4px] before:bg-[rgba(255,255,255,0.9)] before:z-[-1] before:rounded-[3rem] hover:before:bg-transparent hover:text-white ${
									darkMode
										? 'border-slate-100 shadow-2xl text-white'
										: 'drop-shadow-mediumDark'
								}`}
								style={{ marginLeft: 'min(25%, 2rem)' }}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() =>
									continueRef.current.scrollIntoView({
										behavior: 'smooth',
									})
								}
								variants={childVariants}
							>
								Continue
							</motion.button>
						</div>
					</div>
				</div>
			</motion.section>
			<div ref={continueRef}></div>
			<Work darkMode={darkMode} />
			<Contact darkMode={darkMode} />
		</>
	)
}
