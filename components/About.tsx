import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function About({ darkMode }) {
	const aboutContainerRef = useRef(null)

	const { scrollYProgress } = useScroll()
	const allOpacityTransform = useTransform(
		scrollYProgress,
		[0.2, 0.33, 0.53],
		[0, 1, 0]
	)

	useEffect(() => {
		if (darkMode) {
			aboutContainerRef.current.style.opacity = '1'
		}
	}, [darkMode])

	return (
		<motion.section
			id='aboutContainer'
			ref={aboutContainerRef}
			className={`${
				darkMode && 'bg-slate-800'
			} h-full flex flex-col items-center text-center relative overflow-x-hidden md:overflow-y-hidden`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 8vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
			<motion.h2
				id='aboutTitle'
				className={`${darkMode && 'text-white'} mb-8`}
				style={{
					fontSize: 'clamp(2rem, 8vw, 8vh)',
				}}
			>
				Some
				<span className='ml-4 bg-sunrise text-transparent bg-clip-text'>
					Introduction
				</span>
			</motion.h2>
		</motion.section>
	)
}
