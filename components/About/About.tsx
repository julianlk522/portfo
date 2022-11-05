import React, { useEffect, useRef } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import {
	motion,
	useInView,
	useAnimationControls,
	AnimatePresence,
} from 'framer-motion'
import AboutSpiral from './AboutSpiral'
import styles from './About.module.css'
import PhotoSection from './PhotoSection'

export default function About({ darkMode }) {
	const textContentRef = useRef(null)
	const containerRef = useRef(null)
	const containerInView = useInView(containerRef, { amount: 'all' })

	const { width } = useWindowDimensions()
	const mdScreenOrGreater = width && width >= 768

	const spiralControls = useAnimationControls()
	const handControls = useAnimationControls()

	const textVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.1,
				staggerChildren: 0.1,
			},
		},
	}

	const textChildVariants = {
		initial: {
			y: 5,
			x: -25,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.5,
			},
		},
	}

	const handVariants = {
		initial: { rotate: 15 },
		waving: {
			rotate: [null, 0, 30, 0, 15],
			transition: {
				type: 'spring',
				duration: 3,
			},
		},
	}

	useEffect(() => {
		if (darkMode) {
			containerRef.current.style.opacity = '1'
		}
	}, [darkMode])

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
			className='relative h-full w-full'
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
				className='relative h-full flex-col items-center justify-center overflow-hidden text-center dark:text-white md:flex-row'
				style={{
					padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 10vw, 20vh)',
				}}
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
						className='relative my-auto mb-16 flex h-full flex-col items-start justify-between space-y-8 overflow-x-visible rounded-xl text-left sm:max-h-[800px] md:mb-auto md:max-w-[50%] md:space-y-4 lg:h-full lg:max-w-lg lg:justify-evenly lg:pr-8'
						variants={textVariants}
						initial='initial'
						whileInView='visible'
						viewport={{
							amount: mdScreenOrGreater ? 'all' : 'some',
							margin: '0px 100px',
						}}
						onAnimationComplete={() => {
							if (containerInView) {
								spiralControls.start('visible')
							}
						}}
					>
						<div
							id='aboutTextContentBackdrop'
							className='absolute right-0 top-1/4 h-[100vw] w-[100vw] bg-aboutTextContentBackdrop opacity-10 dark:opacity-[7%] md:right-[-67%] md:top-[-10%] lg:right-[-10%] lg:h-[150%] lg:w-[150%]'
						></div>
						<motion.h2
							id='aboutTitle'
							className='text-center drop-shadow-xl dark:text-white dark:drop-shadow-mediumDark lg:mt-8'
							style={{
								fontSize: 'clamp(2rem, 6vw, 7vh)',
							}}
							variants={textChildVariants}
						>
							<motion.span
								initial='initial'
								animate={handControls}
								className='inline-block rotate-[15deg]'
								variants={handVariants}
							>
								👋
							</motion.span>{' '}
							Hello and
							<br />
							<span className='bg-sunrise bg-clip-text text-transparent dark:bg-tomatoToLightPink'>
								Welcome!
							</span>
						</motion.h2>
						<motion.h3
							className='max-w-[80%]  text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							I&apos;m Julian and my passion is in designing and
							building exciting new solutions that leverage the
							powers of the web. For the last 11 months I&apos;ve
							immersed myself deeply in learning full-stack
							development strategies.
						</motion.h3>
						<motion.h3
							className='max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							I&apos;m fascinated by 🧬 reverse-engineering
							intricate user experiences and experimenting with
							new techniques and technologies to see what&apos;s
							possible.
						</motion.h3>
						<motion.h3
							className='max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							I love puzzles, games, challenges, and careful
							designwork of all shapes and sizes. ⚙
						</motion.h3>
						<motion.h3
							className='my-16 max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							Aside from coding I like to read nonfiction and try
							out different ways to achieve personal fitness -
							lately that has been tennis with my girlfriend,
							Sneha. I also love to cook and eat spicy food! 😋
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
