import React, { useEffect, useRef } from 'react'
import {
	motion,
	useInView,
	useAnimationControls,
	AnimatePresence,
} from 'framer-motion'
import styles from './About.module.css'
import PhotoSection from './PhotoSection'
import AboutSpiral from './AboutSpiral'

export default function About({ darkMode }) {
	const textContentRef = useRef(null)
	const containerRef = useRef(null)
	const containerInView = useInView(containerRef, { amount: 'all' })

	const spiralControls = useAnimationControls()
	const handControls = useAnimationControls()

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
			className='relative h-screen w-screen'
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
				className='relative h-full flex-col items-center justify-center overflow-hidden px-8 pt-24 dark:text-white sm:px-16 md:flex-row md:pt-0'
			>
				<AboutSpiral
					darkMode={darkMode}
					spiralControls={spiralControls}
					handControls={handControls}
				/>
				<div
					ref={textContentRef}
					id='aboutOverflowContainer'
					className={`mx-auto flex h-full w-full max-w-7xl flex-col justify-between overflow-y-scroll md:flex-row md:overflow-y-visible ${styles.aboutOverflowContainer}`}
				>
					<motion.div
						id='aboutTextContent'
						className='relative flex h-auto flex-col items-start justify-center overflow-x-visible rounded-xl text-left md:max-w-[60%] lg:h-full lg:max-w-lg'
						variants={textVariants}
						initial='initial'
						whileInView='visible'
						viewport={{
							once: true,
							margin: '0px 100px',
						}}
						onAnimationComplete={() => {
							if (containerInView) {
								spiralControls.start('visible')
							}
						}}
					>
						<motion.h2
							id='aboutTitle'
							className='bg-sunrise bg-clip-text text-transparent drop-shadow-xl dark:bg-tomatoToLightPink dark:drop-shadow-mediumDark'
							style={{
								fontSize: 'clamp(1rem, 6vw, 6vh)',
							}}
							variants={textChildVariants}
						>
							About Me
						</motion.h2>
						<motion.h3
							className='mt-8 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							Hey! 👋 My name is Julian and I&apos;m a self-taught
							full stack developer who loves to push the limits of
							what technology and ingenuity allow.
						</motion.h3>
						<motion.h3
							className='mt-16 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							I&apos;m motivated by puzzles, games, challenges,
							and careful designwork of all shapes and sizes. 🧩
						</motion.h3>
						<motion.h3
							className='mt-16 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							Though I graduated from University of Miami with a
							degree in Finance, I&apos;ve come to adore web
							development for offering me endless opportunity to
							build out new ideas from scratch and try to
							reverse-engineer 🛠️ mind-blowing orchestrations into
							bare concepts.
						</motion.h3>
						<motion.h3
							className='mt-16 max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							Aside from writing code I like to get lost going
							down Wikipedia rabbit holes, experiment with cooking
							different types of foods, and spend time with my
							girlfriend Sneha!
						</motion.h3>
					</motion.div>
					<PhotoSection
						spiralControls={spiralControls}
						handControls={handControls}
						containerInView={containerInView}
					/>
				</div>
			</div>
		</section>
	)
}
