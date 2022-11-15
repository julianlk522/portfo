import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useInView,
	useAnimationControls,
	AnimatePresence,
	useScroll,
	useTransform,
} from 'framer-motion'
import scrollUp from '../../public/scrollUp.webp'
import ContactForm from './ContactForm'
import styles from './Contact.module.css'
import Experience from './Experience'

export default function Contact({ darkMode }) {
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(scrollYProgress, [0.9, 1], [0, 1])
	const showLightModeBg = useTransform(
		scrollYProgress,
		(progress) => progress >= 0.9
	).get()

	const containerRef = useRef(null)
	const containerInView = useInView(containerRef, { amount: 'all' })
	const contentBodyRef = useRef(null)
	const scrollUpSmRef = useRef(null)
	const scrollUpInView = useInView(scrollUpSmRef)
	const scrollPromptSmControls = useAnimationControls()

	const scrollPromptVariants = {
		initial: {
			y: 0,
			transition: {
				delay: 1,
			},
		},
		visible: {
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.5,
			},
		},
	}

	useEffect(() => {
		if (scrollUpInView) {
			scrollPromptSmControls.start('bouncing')
		} else {
			scrollPromptSmControls.stop()
			scrollPromptSmControls.set('initial')
		}
	}, [scrollUpInView, scrollPromptSmControls])

	useEffect(() => {
		const containerScrollTimeout = setTimeout(() => {
			if (!containerInView) {
				contentBodyRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(containerScrollTimeout)
	}, [containerInView])

	return (
		<motion.section
			ref={containerRef}
			id='contactContainer'
			className='relative h-screen w-screen overflow-hidden py-24 text-center text-stone-600 dark:text-white lg:py-0 lg:pb-0'
			style={{ opacity: opacityTransform }}
		>
			<div
				id='layeredWavesContainer'
				className='absolute bottom-[-20%] z-[2] h-[35%] w-full bg-layeredWaves bg-cover opacity-40 dark:opacity-10 sm:bottom-[-25%] lg:right-[-5%] lg:skew-y-[350deg] lg:skew-x-[350deg]'
			></div>
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
			<motion.section
				id='contactOpacityTransformContainer'
				className='relative m-auto flex h-full max-w-7xl flex-col items-center justify-center overflow-hidden px-8 xs:px-16 md:pt-0 lg:overflow-hidden'
			>
				<AnimatePresence>
					{!darkMode && showLightModeBg && (
						<motion.div
							id='contactLightModeBg'
							className='fixed inset-0 z-[-1] h-full w-full bg-mainBg bg-cover'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						></motion.div>
					)}
				</AnimatePresence>
				<h2
					id='contactTitle'
					className='mb-8 w-full max-w-7xl font-semibold dark:text-white lg:text-left'
					style={{ fontSize: 'clamp(1rem, 6vw, 6vh)' }}
				>
					Let&apos;s design your&nbsp;
					<span
						className={`bg-sunrise bg-clip-text font-bold text-transparent underline decoration-8 dark:bg-tomatoToLightPink dark:decoration-4 ${styles.titleHighlight}`}
					>
						dream&nbsp;
					</span>
					<br className='lg:hidden' /> web app!
				</h2>
				<div
					ref={contentBodyRef}
					id='contactContentBody'
					className={`mt-8 flex h-auto w-full max-w-7xl flex-col items-center overflow-x-hidden overflow-y-scroll text-start lg:mt-0 lg:max-h-[80%] lg:flex-row lg:overflow-visible ${styles.contactContentBody}`}
				>
					<Experience darkMode={darkMode} />

					<h3 className='mt-32 mb-16 text-center text-2xl dark:text-white lg:hidden'>
						I&apos;d love to hear from you!
					</h3>

					<ContactForm />

					<hr className='mt-8 h-1 w-1/2 opacity-60 dark:opacity-20 lg:hidden' />

					<motion.button
						id='scrollUpPrompt'
						className='relative mt-16 mb-32 flex w-full max-w-[12rem] items-center justify-between rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg lg:hidden '
						whileHover={{ scale: 1.25 }}
						whileTap={{ scale: 1.1 }}
						variants={scrollPromptVariants}
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: 'smooth',
							})
						}
					>
						<div className='relative ml-4 h-4 w-8'>
							<div
								id='primaryArrowContainer'
								className='absolute top-[-50%] h-full w-full'
							>
								<Image
									src={scrollUp}
									alt='scroll to the top'
									width={19}
									height={10}
									className='opacity-20 dark:invert'
								/>
							</div>
							<div
								id='secondaryArrowContainer'
								className='absolute top-0 h-full w-full'
							>
								<Image
									src={scrollUp}
									alt='secondary image for scroll button'
									width={19}
									height={10}
									className='opacity-10 dark:invert'
								/>
							</div>
						</div>
						<p className='ml-4 w-full text-xs dark:text-white lg:text-[0.6rem] 2xl:text-xs'>
							Navigate to top
						</p>
					</motion.button>
				</div>
			</motion.section>
		</motion.section>
	)
}
