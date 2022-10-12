import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import portrait from '../public/portrait.webp'
import scrollUp from '../public/scrollUp.webp'
import AboutSpiral from './AboutSpiral'
import styles from './About.module.css'

export default function About({ darkMode }) {
	const textContentRef = useRef(null)
	const containerRef = useRef(null)
	const containerInView = useInView(containerRef, { amount: 'all' })
	const mdScreenOrGreater =
		containerRef.current && containerRef.current.clientWidth >= 768
	const scrollDownRef = useRef(null)
	const scrollDownRefInView = useInView(scrollDownRef, { amount: 'some' })
	const scrollDownControls = useAnimationControls()
	const spiralControls = useAnimationControls()
	const handControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const allOpacityTransform = useTransform(
		scrollYProgress,
		[0.2, 0.33, 0.53],
		[0, 1, 0]
	)

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
			x: -50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const photoSectionVariants = {
		initial: {
			opacity: 0,
			transition: {
				ease: 'easeOut',
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.25,
			},
		},
	}

	const photoChildVariants = {
		initial: {
			y: 0,
		},
		visible: {},
		bouncing: {
			y: [null, 16],
			x: 0,
			transition: {
				y: {
					repeat: Infinity,
					repeatType: 'reverse',
					duration: 2,
					delay: mdScreenOrGreater ? 1 : 0,
				},
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
		if (!scrollDownRefInView) {
			scrollDownControls.stop()
			scrollDownControls.set('initial')
		}
	}, [scrollDownRefInView, scrollDownControls])

	useEffect(() => {
		const textScrollTimeout = setTimeout(() => {
			if (!containerInView) {
				textContentRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(textScrollTimeout)
	}, [containerInView])

	return (
		<motion.section
			id='aboutContainer'
			ref={containerRef}
			className={`${
				darkMode && 'bg-slate-800 text-white'
			} relative h-full flex-col items-center justify-between overflow-hidden text-center md:flex-row`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 10vw, 20vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
			<AboutSpiral
				darkMode={darkMode}
				spiralControls={spiralControls}
				handControls={handControls}
			/>
			<motion.div
				ref={textContentRef}
				id='aboutOverflowContainer'
				className={`flex h-full flex-col justify-between overflow-y-scroll md:flex-row md:overflow-visible ${styles.aboutOverflowContainer}`}
			>
				<motion.div
					id='aboutTextContent'
					className='relative mb-16 flex h-auto flex-col items-start justify-between space-y-16 rounded-xl text-left after:absolute after:z-[-1] after:h-full after:w-full after:bg-aboutTextContentBackdrop md:max-w-[50%] md:space-y-8 lg:h-full lg:max-w-[60%] lg:justify-evenly lg:pr-8'
					style={{
						opacity: darkMode ? allOpacityTransform : '',
					}}
					variants={textVariants}
					initial='initial'
					whileInView='visible'
					viewport={{ amount: 'some' }}
					onAnimationComplete={() => {
						if (containerInView) {
							spiralControls.start('visible')
						}
					}}
				>
					<motion.h2
						id='aboutTitle'
						className={`mt-8 text-center ${
							darkMode
								? 'text-white drop-shadow-mediumDark'
								: 'drop-shadow-xl'
						}`}
						style={{
							fontSize: 'clamp(2rem, 6vw, 7vh)',
						}}
						variants={textChildVariants}
					>
						<motion.span
							initial='initial'
							animate={handControls}
							variants={handVariants}
							className='inline-block rotate-[15deg]'
						>
							👋
						</motion.span>{' '}
						Hello and
						<br />
						<span
							className={`bg-clip-text text-transparent ${
								darkMode ? 'bg-tomatoToLightPink' : 'bg-sunrise'
							}`}
						>
							Welcome!
						</span>
					</motion.h2>
					<motion.h3
						className='max-w-[80%]  text-xs opacity-60 sm:max-w-[100%] lg:text-sm'
						style={{ width: 'min(100%, 500px)' }}
						variants={textChildVariants}
					>
						I&apos;m Julian and my passion is in designing and
						building exciting new solutions that leverage the powers
						of the web. For the last 11 months I&apos;ve immersed
						myself deeply in learning full-stack development
						strategies.
					</motion.h3>
					<motion.h3
						className='max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] lg:text-sm'
						style={{ width: 'min(100%, 500px)' }}
						variants={textChildVariants}
					>
						I&apos;m fascinated by 🧬 reverse-engineering intricate
						user experiences and experimenting with new techniques
						and technologies to see what&apos;s possible.
					</motion.h3>
					<motion.h3
						className='max-w-[80%] text-xs opacity-60 sm:max-w-[100%] lg:text-sm'
						style={{ width: 'min(100%, 500px)' }}
						variants={textChildVariants}
					>
						I love puzzles, games, challenges, and careful
						designwork of all shapes and sizes. ⚙
					</motion.h3>
					<motion.h3
						className='my-16 max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] lg:text-sm'
						style={{ width: 'min(100%, 500px)' }}
						variants={textChildVariants}
					>
						Aside from coding I like to read nonfiction and try out
						different ways to achieve personal fitness - lately that
						has been tennis with my girlfriend, Sneha. I also love
						to cook and eat spicy food! 😋
					</motion.h3>
				</motion.div>
				<motion.div
					id='aboutPhotoSection'
					className='flex w-full flex-col items-center justify-evenly pb-16 md:justify-center md:pb-0'
					variants={photoSectionVariants}
					initial='initial'
					whileInView='visible'
					viewport={{ amount: mdScreenOrGreater ? 'all' : 'some' }}
					onAnimationComplete={() => {
						if (scrollDownRefInView) {
							scrollDownControls.start('bouncing')
						}
					}}
				>
					<motion.div
						id='aboutPhotoMask'
						className='relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full shadow-thick lg:h-72 lg:w-72'
						style={{
							backgroundImage:
								'linear-gradient(166deg, rgba(255,172,198,0.5) 25%, rgba(255,91,35,0.75) 100%)',
						}}
						variants={photoChildVariants}
					>
						<Image
							src={portrait}
							layout='fill'
							objectFit='cover'
							alt='photo of the author of this page'
						/>
					</motion.div>
					<motion.button
						ref={scrollDownRef}
						id='aboutScrollDownButton'
						className={`${darkMode && 'invert'} my-16 opacity-10`}
						animate={scrollDownControls}
						variants={photoChildVariants}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							scrollDownControls.set('initial')
							spiralControls.set('hidden')
							handControls.set('initial')
							document
								.getElementById('workContainer')
								.scrollIntoView({ behavior: 'smooth' })
						}}
					>
						{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
						<Image
							src={scrollUp}
							alt='button to scroll to the next section'
							width={38}
							height={20}
							className='rotate-180'
						/>
					</motion.button>
					<p
						className={`mb-16 text-xs opacity-40 md:mb-0 ${
							darkMode ? 'text-white' : ''
						}`}
					>
						Click the down arrow to continue
					</p>
				</motion.div>
			</motion.div>
		</motion.section>
	)
}
