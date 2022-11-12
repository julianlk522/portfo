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
				className='relative h-full flex-col items-center justify-center overflow-hidden text-center dark:text-white md:flex-row'
				style={{
					padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 20vh)',
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
						className='relative my-auto flex h-auto flex-col items-start justify-between space-y-16 overflow-x-visible rounded-xl text-left sm:max-h-[800px] md:mb-auto md:max-w-[50%] md:space-y-4 lg:h-full lg:max-w-lg lg:justify-evenly'
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
							My name is Julian and I love to build high-quality
							applications that leverage the powers of the web.
							For the past year I&apos;ve immersed myself deeply
							in learning full-stack development strategies.
						</motion.h3>
						<motion.h3
							className='max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							Though my professional life began in the world of
							finance, I&apos;ve found that I&apos;m fascinated
							most by 🧬 reverse-engineering thrilling user
							experiences and experimenting with new techniques
							and technologies to see what can be achieved online.
						</motion.h3>
						<motion.h3
							className='max-w-[80%] text-xs opacity-60 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							I&apos;m motivated by puzzles, games, challenges,
							and careful designwork of all shapes and sizes. ⚙
						</motion.h3>
						<motion.h3
							className='my-16 max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] xl:text-sm'
							style={{ width: 'min(100%, 500px)' }}
							variants={textChildVariants}
						>
							Aside from writing code I like to read nonfiction,
							practice outdoor sports, experiment with cooking
							different types of foods, and spend time with my
							girlfriend, Sneha.
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
