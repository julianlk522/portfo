import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
	AnimatePresence,
} from 'framer-motion'
import scrollUp from '../../public/scrollUp.webp'
import ContactForm from './ContactForm'
import styles from './Contact.module.css'
import Experience from './Experience'

export default function Contact({ darkMode }) {
	const containerRef = useRef(null)
	const containerInView = useInView(containerRef, { amount: 'all' })
	const contentBodyRef = useRef(null)
	const scrollUpSmRef = useRef(null)
	const scrollUpInView = useInView(scrollUpSmRef)
	const scrollPromptSmControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(scrollYProgress, [0.9, 1], [0, 1])

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
			className='relative h-full w-full overflow-hidden'
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
				className='relative flex h-full flex-col items-center justify-between overflow-hidden text-center lg:overflow-hidden xl:py-16'
				style={{
					padding:
						'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 20vh) clamp(6rem, 4vw, 4vh)',
					opacity: opacityTransform,
				}}
			>
				<AnimatePresence>
					{!darkMode && (
						<motion.div
							id='lightModeBg'
							className='absolute inset-0 z-[-1] h-full w-full bg-mainBg bg-cover'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						></motion.div>
					)}
				</AnimatePresence>
				<h2
					id='contactTitle'
					className='mb-auto dark:text-white lg:mt-auto'
					style={{ fontSize: 'clamp(2rem, 8vw, 6vh)' }}
				>
					Let&apos;s design your
					<span
						className={`mx-2 bg-tomatoToLightPink bg-clip-text text-transparent underline decoration-4 sm:mx-4 ${styles.titleHighlight}`}
					>
						dream
					</span>
					<br className='xs:hidden' />
					web app
				</h2>
				<div
					ref={contentBodyRef}
					id='contactContentBody'
					className={`flex h-[400%] w-full max-w-7xl flex-col items-center overflow-x-hidden overflow-y-scroll text-start md:mt-16 lg:mt-0 lg:h-full lg:max-h-[80%] lg:flex-row lg:overflow-y-visible ${styles.contactContentBody}`}
				>
					<p className='my-16 text-xs opacity-40 dark:text-white md:mt-0 lg:hidden'>
						Scroll down to see more
					</p>

					<Experience />

					<h3 className='mt-32 mb-16 text-2xl dark:text-white lg:hidden'>
						I&apos;d love to hear from you!
					</h3>

					<ContactForm />

					<motion.button
						id='scrollUpPromptLg'
						className='relative my-16 flex w-full max-w-[12rem] items-center justify-between rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg lg:hidden '
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
						<div
							id='arrowsContainer'
							className='relative ml-4 h-full w-8'
						>
							{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
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
						<p className='ml-4 w-full text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
							Navigate to top
						</p>
					</motion.button>
				</div>
			</motion.section>
		</motion.section>
	)
}
