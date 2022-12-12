import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
			id='about'
			className='relative h-screen w-screen flex-col items-center justify-center overflow-hidden pt-24 text-stone-600 dark:text-white md:flex-row md:px-16 md:pt-0'
		>
			<div
				ref={textContentRef}
				id='aboutOverflowContainer'
				className={`mx-auto flex h-full w-full max-w-7xl flex-col justify-between overflow-y-scroll md:flex-row md:overflow-visible ${styles.aboutOverflowContainer}`}
			>
				<motion.div
					id='aboutTextContent'
					className='relative flex h-auto flex-col items-start justify-center rounded-xl px-16 text-left text-stone-600 dark:text-white md:max-h-[80vh] md:max-w-[50%] md:self-center md:px-0 lg:h-full'
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
						className='bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink'
						style={{
							fontSize: 'clamp(1rem, 6vw, 6vh)',
							textShadow: darkMode
								? '4px 10px 4px rgb(255 255 255 / 5%)'
								: '4px 10px 4px rgb(0 0 0 / 5%)',
						}}
						variants={textChildVariants}
					>
						About Me
					</motion.h2>
					<motion.h3
						className='aboutText mt-8'
						variants={textChildVariants}
					>
						Hey! 👋 My name is Julian and I&apos;m a self-taught
						full stack developer who loves to&nbsp;
						<strong>push the limits</strong> of what technology and
						ingenuity allow.
					</motion.h3>
					<motion.h3
						className='aboutText mt-16'
						variants={textChildVariants}
					>
						I&apos;m motivated by&nbsp;
						<strong>puzzles, games, challenges</strong>, and&nbsp;
						<strong>careful designwork</strong> of all shapes and
						sizes. 🧩
					</motion.h3>
					<motion.h3
						className='aboutText mt-16'
						variants={textChildVariants}
					>
						Though I graduated from University of Miami with a
						degree in Finance, I&apos;ve come to adore web
						development for offering me endless opportunity to&nbsp;
						<strong>build out new ideas from scratch</strong>
						&nbsp;and try to&nbsp;
						<strong>reverse-engineer</strong> 🛠️ complex
						orchestrations into simple concepts.
					</motion.h3>
					<motion.h3
						className='aboutText mt-16'
						variants={textChildVariants}
					>
						Aside from writing code I like to get lost going down{' '}
						<i>Wikipedia</i> rabbit holes, experiment with cooking
						different types of foods, and spend time with my
						girlfriend Sneha!
					</motion.h3>
				</motion.div>
				<PhotoSection
					darkMode={darkMode}
					containerInView={containerInView}
				/>
			</div>
		</section>
	)
}
