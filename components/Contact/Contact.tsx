import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import visual from '../../public/visual.svg'
import route from '../../public/route.svg'
import react from '../../public/react.svg'
import scrollUp from '../../public/scrollUp.webp'
import ContactForm from './ContactForm'
import styles from './Contact.module.css'

export default function Contact({ darkMode }) {
	const containerRef = useRef(null)
	const mdScreenOrGreater =
		containerRef.current && containerRef.current.clientWidth >= 768
	const containerInView = useInView(containerRef, { amount: 'all' })
	const contentBodyRef = useRef(null)
	const scrollUpSmRef = useRef(null)
	const scrollUpInView = useInView(scrollUpSmRef)
	const scrollPromptSmControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(scrollYProgress, [0.83, 1], [0, 1])

	const experienceVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.2,
			},
		},
	}

	const experienceChildVariants = {
		initial: {
			y: 5,
			x: 25,
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
		bouncing: {
			y: [null, 16],
			x: 0,
			opacity: 0.5,
			transition: {
				y: {
					repeat: Infinity,
					repeatType: 'reverse',
					duration: 2,
					delay: 0.5,
				},
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
		if (darkMode)
			document.getElementById('contactContainer').style.opacity = '1'
	}, [darkMode])

	useEffect(() => {
		const containerScrollTimeout = setTimeout(() => {
			if (!containerInView) {
				contentBodyRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(containerScrollTimeout)
	}, [containerInView])

	return (
		<div id='bgWrapper' className='z-[-1] h-full bg-none dark:bg-slate-800'>
			<motion.section
				ref={containerRef}
				id='contactContainer'
				className='relative flex h-full flex-col items-center justify-between overflow-hidden bg-mainBg bg-cover px-32 text-center dark:bg-slate-800 dark:bg-none lg:overflow-visible xl:py-16'
				style={{
					padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 10vw, 20vh)',
					opacity: opacityTransform,
				}}
			>
				<motion.h2
					id='contactTitle'
					className='my-8 mb-auto dark:text-white'
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
				</motion.h2>
				<div
					ref={contentBodyRef}
					id='contactContentBody'
					className={`flex h-[400%] w-full max-w-7xl flex-col items-center overflow-x-hidden overflow-y-scroll md:mt-16 lg:mt-0 lg:h-full lg:flex-row lg:overflow-y-visible ${styles.contactContentBody}`}
				>
					<p className='my-16 text-xs opacity-40 dark:text-white md:mt-0 lg:hidden'>
						Scroll down to see more
					</p>
					<motion.div
						id='experience'
						className='relative flex h-[300%] w-full flex-col items-center justify-evenly dark:text-white xs:h-[200%] lg:order-2 lg:my-0 lg:ml-8 lg:h-full lg:max-h-[80%] lg:space-y-4'
						style={{ maxWidth: 'max(50vw, 600px)' }}
						variants={experienceVariants}
						initial='initial'
						whileInView='visible'
						viewport={{
							amount: 'all',
							once: true,
						}}
					>
						<motion.div
							className='flex flex-col items-center justify-between sm:flex-row'
							variants={experienceChildVariants}
						>
							<motion.div
								className='mx-8 mb-16 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
								whileHover={{
									y: [null, -8, 8],
									transition: {
										duration: 1,
										repeat: Infinity,
										repeatType: 'reverse',
										bounce: 1,
									},
								}}
							>
								<Image
									alt='visual design skills'
									src={visual}
									width={80}
									height={80}
									layout='fixed'
									className='object-contain object-center'
								/>
							</motion.div>
							<div className='flex w-full flex-col items-center justify-between'>
								<h3 className='mb-2 text-xl xl:mb-4 xl:text-2xl'>
									UI/UX and Layout Design
								</h3>
								<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
									Bringing WCAG best practices to your
									project, a meticulous attention for detail,
									and a boundless thirst for inventive ways to
									express your content.
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex flex-col items-center justify-between sm:flex-row'
							variants={experienceChildVariants}
						>
							<motion.div
								className='mx-8 my-16 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
								whileHover={{
									y: [null, -8, 8],
									transition: {
										duration: 1,
										repeat: Infinity,
										repeatType: 'reverse',
										bounce: 1,
									},
								}}
							>
								<Image
									alt='backend architectural skills'
									src={route}
									width={80}
									height={80}
									layout='fixed'
									className='object-contain object-center'
								/>
							</motion.div>
							<div className='flex w-full flex-col items-center justify-center sm:my-24 lg:my-0'>
								<h3 className='mb-2 text-xl xl:mb-4 xl:text-2xl'>
									Backend Versatility
								</h3>
								<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
									Defending your app from errors or misuse
									while also maximizing performance. Designing
									your APIs for ease-of-use, though never at
									the expense of robustness.
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex flex-col items-center justify-between sm:flex-row'
							variants={experienceChildVariants}
						>
							<motion.div
								className='mx-8 my-16 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
								whileHover={{
									y: [null, -8, 8],
									transition: {
										duration: 1,
										repeat: Infinity,
										repeatType: 'reverse',
										bounce: 1,
									},
								}}
							>
								<Image
									alt='proficiency in modern frameworks like React'
									src={react}
									width={80}
									height={80}
									layout='fixed'
									className='object-contain object-center'
								/>
							</motion.div>
							<div className='flex flex-col items-center justify-center'>
								<h3 className='mb-2 text-xl xl:mb-4 xl:text-2xl'>
									State-of-the-Art Frameworks and Packages
								</h3>
								<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
									Harnessing expertise in ReactJS,
									TypeScript/ES6+ Javascript, NodeJS, testing
									in Cypress and React Testing Library, UI
									libraries such as MaterialUI and DaisyUI and
									much more.
								</p>
							</div>
						</motion.div>
						<motion.button
							id='scrollUpPromptLg'
							className='absolute bottom-[-4rem] left-1/2 hidden w-[5vw] items-center justify-between lg:flex'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() =>
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: 'smooth',
								})
							}
						>
							{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
							<Image
								src={scrollUp}
								alt='button to scroll to the top of the page'
								className='scale-[.25] opacity-20 dark:invert'
							/>
						</motion.button>
					</motion.div>
					<h3 className='my-32 text-2xl dark:text-white lg:hidden'>
						I&apos;d love to hear from you!
					</h3>
					<ContactForm />
					<motion.button
						id='scrollUpPromptSm'
						className='relative my-16 flex h-[5vh] flex-col items-center justify-between dark:text-white lg:hidden'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: 'smooth',
							})
						}
					>
						<motion.div
							animate={scrollPromptSmControls}
							initial='initial'
							variants={scrollPromptVariants}
						>
							{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
							<Image
								height={20}
								width={38}
								src={scrollUp}
								alt='button to scroll to the top of the page'
								className='opacity-20 dark:invert'
							/>
						</motion.div>
						<p
							ref={scrollUpSmRef}
							className='mt-16 pb-16 text-xs opacity-50'
						>
							Back to top
						</p>
					</motion.button>
				</div>
			</motion.section>
		</div>
	)
}
