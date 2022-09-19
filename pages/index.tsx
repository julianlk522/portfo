import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Work from '../components/Work'
import Contact from '../components/Contact'
import cloud from '../public/Cloud.svg'

export default function Home({ darkMode }) {
	const continueRef = useRef(null)
	const hueRotateRef = useRef(null)
	const innerCircleRef = useRef(null)
	const middleCircleRef = useRef(null)
	const outerCircleRef = useRef(null)
	const [hueCoef, setHueCoef] = useState<number>(0)
	const [brightnessMagnitude, setBrightnessMagnitude] = useState(1)
	const { scrollYProgress } = useScroll()

	const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0])

	const updateCloudOpacity = (e: React.MouseEvent) => {
		const navbarHeight = 0.05
		const heightInPxFromNavbar =
			e.clientY - window.innerHeight * navbarHeight
		const heightInPxAtScreenCenter =
			(window.innerHeight * (1 - navbarHeight)) / 2
		const distanceFromScreenCenter = Math.abs(
			heightInPxFromNavbar - heightInPxAtScreenCenter
		)
		const distanceFromEdges =
			heightInPxAtScreenCenter - distanceFromScreenCenter

		const minimumOpacity = 0.25
		const possibleOpacityGrowth = 1 - minimumOpacity
		const desiredOpacity =
			distanceFromEdges /
				(heightInPxAtScreenCenter * (1 / possibleOpacityGrowth)) +
			minimumOpacity

		setBrightnessMagnitude(desiredOpacity)
		document.getElementById('hueRotateRef').style.opacity =
			brightnessMagnitude.toString()
	}

	useEffect(() => {
		document.getElementById('welcomeContainer').style.opacity = '1'
	}, [darkMode])

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
				id='welcomeContainer'
				className={`${
					darkMode ? 'bg-slate-800' : 'bg-mainBgFaded'
				} bg-cover h-full flex flex-col items-center relative z-[1]`}
				style={{
					opacity: darkMode ? '1' : opacityTransform,
					padding: 'clamp(6rem, 8vw, 8vh) clamp(2rem, 6vw, 6vh)',
				}}
				onMouseMove={(e: React.MouseEvent) => {
					setHueCoef((prev) => prev + e.movementX / 4)
					document.getElementById(
						'hueRotateRef'
					).style.filter = `hue-rotate(${hueCoef}deg)`
					updateCloudOpacity(e)
				}}
			>
				<div
					id='welcomeTitleContainer'
					className='flex justify-center items-center'
					style={{ marginBottom: 'clamp(2rem, 12vw, 12vh)' }}
				>
					<h1
						className={`${darkMode && 'text-white'}`}
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
				</div>
				<div
					id='welcomeContentContainer'
					className='h-full flex justify-between'
				>
					<div
						id='welcomeTextContent'
						className='flex flex-col h-full w-full justify-between max-h-[50vw] sm:pr-8'
					>
						<h3
							className={`${
								darkMode && 'text-white'
							} self-end md:self-auto ml-[50%]`}
							style={{
								fontSize: 'clamp(1rem, 3vw, 6vh)',
							}}
						>
							to the
						</h3>

						<h2
							className='relative my-8 md:my-12 text-8xl bg-tomatoToLightPink text-transparent bg-clip-text after:absolute after:top-[-125%] md:after:top-[50%] after:left-[-100%] after:border-[6px] after:w-48 after:h-48 md:after:w-96 md:after:h-96 after:rounded-full md:after:border-[12px] after:border-opacity-10 after:border-[#00d8ff] drop-shadow-lg'
							style={{
								marginLeft: 'max(25%, 6rem)',
								fontSize: 'clamp(2rem, 10vw, 10vh)',
							}}
						>
							frontier
						</h2>
						<h3
							className={`${
								darkMode && 'text-white'
							} text-center sm:text-left mt-8 md:mt-12`}
							style={{
								fontSize: 'clamp(1.25rem, 4vw, 4vh)',
							}}
						>
							of web development.
						</h3>
					</div>
					<div
						id='welcomeVisualContent'
						className='hidden sm:flex flex-col items-center h-full justify-center md:justify-between max-h-[50vw]'
					>
						<div
							id='hueRotateRef'
							ref={hueRotateRef}
							className='flex flex-shrink relative max-h-[20vh] max-w-[50vw]'
						>
							<Image src={cloud} alt='illustration' />
						</div>
						<motion.button
							id='continueButton'
							className={`${
								darkMode
									? 'border-slate-100 border-opacity-50 shadow-2xl'
									: 'drop-shadow-mediusmark border-[#ffacc6]'
							} hidden md:block p-2 text-white rounded-lg bg-gradient-to-r from-[#FF5B23] to-[#ffacc6] border-2 `}
							style={{ fontSize: 'clamp(1rem, 3vw, 6vh)' }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() =>
								continueRef.current.scrollIntoView({
									behavior: 'smooth',
								})
							}
						>
							Continue
						</motion.button>
					</div>
				</div>
				<div
					id='hueRotateRef'
					ref={hueRotateRef}
					className='sm:hidden flex flex-shrink relative max-h-[20vh] max-w-[50vw]'
					style={{ marginTop: 'clamp(4rem, 12vw, 12vh)' }}
				>
					<Image src={cloud} alt='illustration' />
				</div>
				<motion.button
					id='continueButtonSmallScreen'
					className={`${
						darkMode
							? 'border-slate-100 border-opacity-50 shadow-2xl'
							: 'drop-shadow-mediusmark border-[#ffacc6]'
					} md:hidden max-w-[12rem] p-2 text-white rounded-lg bg-gradient-to-r from-[#FF5B23] to-[#ffacc6] border-2 `}
					style={{
						fontSize: 'clamp(1rem, 3vw, 6vh)',
						marginTop: 'clamp(4rem, 12vw, 12vh)',
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() =>
						continueRef.current.scrollIntoView({
							behavior: 'smooth',
						})
					}
				>
					Continue
				</motion.button>
			</motion.section>
			<div ref={continueRef}></div>
			<Work darkMode={darkMode} />
			<Contact darkMode={darkMode} />
		</>
	)
}
