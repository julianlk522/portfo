import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import visual from '../public/visual.svg'
import route from '../public/route.svg'
import react from '../public/react.svg'
import scrollUp from '../public/scrollUp.png'
import ContactForm from './ContactForm'
import styles from './Contact.module.css'

export default function Contact({ darkMode }) {
	const scrollUpSmRef = useRef(null)
	const scrollPromptSmControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const isInView = useInView(scrollUpSmRef)
	const opacityTransform = useTransform(scrollYProgress, [0.86, 1], [0, 1])

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
		if (isInView) {
			scrollPromptSmControls.start('bouncing')
		} else {
			scrollPromptSmControls.stop()
			scrollPromptSmControls.set('initial')
		}
	}, [isInView, scrollPromptSmControls])

	useEffect(() => {
		if (darkMode)
			document.getElementById('contactContainer').style.opacity = '1'
	}, [darkMode])

	return (
		<motion.section
			id='contactContainer'
			className={`${
				darkMode ? 'bg-slate-800' : 'bg-mainBg'
			} relative flex h-full flex-col justify-between bg-cover py-16 px-32 text-center lg:overflow-visible`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 8vh)',
				opacity: !darkMode && opacityTransform,
			}}
		>
			<h2
				id='contactTitle'
				className={`mb-8 ${darkMode && 'text-white'}`}
				style={{ fontSize: 'clamp(2rem, 5vw, 6vh)' }}
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
				id='contactContentBody'
				className='flex h-[300%] w-full flex-col items-center justify-between overflow-x-hidden overflow-y-scroll lg:h-full lg:flex-row lg:overflow-y-hidden'
			>
				<div
					id='experience'
					className={`relative my-32 mt-64 flex h-full w-full flex-col items-center justify-evenly sm:mt-32 sm:mb-0 lg:order-2 lg:my-0 lg:ml-8 lg:max-h-[80%] ${
						darkMode && 'text-white'
					}`}
					style={{ maxWidth: 'max(50vw, 750px)' }}
				>
					<div className='flex flex-col items-center justify-between sm:flex-row'>
						<motion.div
							className={`${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 drop-shadow-mediumDark'
							} mx-8 mb-16 flex h-24 w-full max-w-[6rem] items-center justify-center rounded-full p-2 sm:mb-0`}
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
							<h3 className='mb-4 text-2xl'>
								UI/UX and Layout Design
							</h3>
							<p className='text-xs opacity-60'>
								Bringing WCAG best practices to your project, a
								meticulous attention for detail, and a boundless
								thirst for inventive ways to express your
								content.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between sm:flex-row'>
						<motion.div
							className={`my-16 mx-8 flex h-24 w-full max-w-[6rem] items-center justify-center rounded-full p-2 ${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'border-2 border-[rgba(255,255,255,0.5)]  bg-slate-300 bg-opacity-20 drop-shadow-mediumDark'
							}`}
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
							<h3 className='mb-4 text-2xl'>
								Backend Versatility
							</h3>
							<p className='text-xs opacity-60'>
								Defending your app from errors or misuse while
								also maximizing performance. Designing your APIs
								for ease-of-use, though never at the expense of
								robustness.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between sm:flex-row'>
						<motion.div
							className={`${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 drop-shadow-mediumDark'
							} my-16 mx-8 flex h-24 w-full max-w-[6rem] items-center justify-center rounded-full px-2 py-4 sm:my-0`}
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
								width={64}
								height={64}
								layout='fixed'
								className='object-contain object-center'
							/>
						</motion.div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='mb-4 text-2xl'>
								State-of-the-Art Frameworks and Packages
							</h3>
							<p className='text-xs opacity-60'>
								Harnessing expertise in ReactJS, TypeScript/ES6+
								Javascript, NodeJS, testing in Cypress and React
								Testing Library, UI libraries such as MaterialUI
								and DaisyUI and much more.
							</p>
						</div>
					</div>
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
							className={`${
								darkMode && 'invert'
							} scale-[.25] opacity-20`}
						/>
					</motion.button>
				</div>

				<ContactForm darkMode={darkMode} />

				<motion.button
					id='scrollUpPromptSm'
					className={`mb-2 flex h-[5vh] flex-col items-center justify-between lg:hidden ${
						darkMode && 'text-white'
					}`}
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
							src={scrollUp}
							alt='button to scroll to the top of the page'
							className={`${
								darkMode && 'invert'
							} scale-[.05] opacity-20`}
						/>
					</motion.div>
					<p
						ref={scrollUpSmRef}
						className='mt-[-10%] text-xs opacity-50'
					>
						Back to top
					</p>
				</motion.button>
			</div>
		</motion.section>
	)
}
