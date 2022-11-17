import React, { useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styles from './About.module.css'
import PhotoSection from './PhotoSection'

export default function About({ darkMode }) {
	const { width } = useWindowDimensions()
	const textContentRef = useRef(null)
	const containerRef = useRef(null)
	const containerInView = useInView(containerRef, { amount: 'all' })

	const textVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.1,
			},
		},
	}

	const textChildVariants = {
		initial: {
			y: 5,
			x: -10,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.25,
			},
		},
	}

	useEffect(() => {
		const textScrollTimeout = setTimeout(() => {
			if (!containerInView) {
				textContentRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(textScrollTimeout)
	}, [containerInView])

	return (
		<section
			ref={containerRef}
			id='aboutContainer'
			className='relative h-screen w-screen overflow-hidden'
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
				id='aboutContent'
				className='relative h-full flex-col items-center justify-center pt-24 text-stone-600 dark:text-white md:flex-row md:px-16 md:pt-0'
			>
				<div
					ref={textContentRef}
					id='aboutOverflowContainer'
					className={`mx-auto flex h-full w-full max-w-7xl flex-col justify-between overflow-y-scroll md:flex-row md:overflow-visible ${styles.aboutOverflowContainer}`}
				>
					<motion.div
						id='aboutTextContent'
						className='relative flex h-auto flex-col items-start justify-center rounded-xl px-16 text-left text-stone-600 dark:text-white md:max-w-[60%] md:px-0 lg:h-full lg:max-w-lg'
						variants={textVariants}
						initial='initial'
						whileInView='visible'
						viewport={{
							once: true,
							margin: '0px 100px',
							amount: width >= 768 ? 'all' : 'some',
						}}
					>
						<motion.h2
							id='aboutTitle'
							className='bg-sunrise bg-clip-text font-bold text-transparent drop-shadow-sm dark:bg-tomatoToLightPink dark:drop-shadow-mediumDark'
							style={{
								fontSize: 'clamp(1rem, 6vw, 6vh)',
							}}
							variants={textChildVariants}
						>
							About Me
						</motion.h2>
						<motion.h3
							className='mt-8 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							variants={textChildVariants}
						>
							Hey! 👋 My name is Julian and I&apos;m a self-taught
							full stack developer who loves to&nbsp;
							<strong>push the limits</strong> of what technology
							and ingenuity allow.
						</motion.h3>
						<motion.h3
							className='mt-16 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							variants={textChildVariants}
						>
							I&apos;m motivated by&nbsp;
							<strong>puzzles, games, challenges</strong>,
							and&nbsp;
							<strong>careful designwork</strong> of all shapes
							and sizes. 🧩
						</motion.h3>
						<motion.h3
							className='mt-16 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							variants={textChildVariants}
						>
							Though I graduated from University of Miami with a
							degree in Finance, I&apos;ve come to adore web
							development for offering me endless opportunity
							to&nbsp;
							<strong>build out new ideas from scratch</strong>
							&nbsp;and try to&nbsp;
							<strong>reverse-engineer</strong> 🛠️ complex
							orchestrations into simple concepts.
						</motion.h3>
						<motion.h3
							className='mt-16 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							variants={textChildVariants}
						>
							Aside from writing code I like to get lost going
							down <i>Wikipedia</i> rabbit holes, experiment with
							cooking different types of foods, and spend time
							with my girlfriend Sneha!
						</motion.h3>
					</motion.div>
					<PhotoSection
						darkMode={darkMode}
						containerInView={containerInView}
					/>
				</div>
			</div>
		</section>
	)
}
