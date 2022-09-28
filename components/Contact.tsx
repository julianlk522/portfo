import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import emailjs from '@emailjs/browser'
import laugh from '../public/laugh.svg'
import visual from '../public/visual.svg'
import route from '../public/route.svg'
import react from '../public/react.svg'
import scrollUp from '../public/scrollUp.png'

export default function Contact({ darkMode }) {
	const formRef = useRef(null)
	const scrollUpRef = useRef(null)
	const scrollPromptControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const isInView = useInView(scrollUpRef, { amount: 'all' })
	const opacityTransform = useTransform(scrollYProgress, [0.8, 1], [0, 1])

	const scrollPromptVariants = {
		initial: {
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

	const scrollPromptChildVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	useEffect(() => {
		if (isInView) {
			scrollPromptControls.start('visible')
		} else {
			scrollPromptControls.start('initial')
		}
	}, [isInView])

	useEffect(() => {
		if (darkMode)
			document.getElementById('contactContainer').style.opacity = '1'
	}, [darkMode])

	const submitForm = async (e: React.FormEvent) => {
		e.preventDefault()

		const emailData = await emailjs.sendForm(
			'portfo_contact_service',
			'default_template',
			formRef.current,
			'W_q5lGuvXxVo3bvQr'
		)

		console.log(emailData)
	}

	return (
		<motion.section
			id='contactContainer'
			className={`${
				darkMode ? 'bg-slate-800' : 'bg-mainBgFaded'
			} bg-cover h-full py-16 px-32 flex flex-col justify-between text-center relative`}
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
				Let's design your dream web app
			</h2>
			<div
				id='contactContentBody'
				className='w-full h-[300vh] lg:h-full flex flex-col lg:flex-row justify-between items-center overflow-y-scroll overflow-x-hidden lg:overflow-y-hidden'
			>
				<div
					id='experience'
					className={`relative w-full mt-96 sm:mt-32 my-32 sm:mb-0 lg:my-0 lg:ml-8 h-full flex flex-col justify-evenly lg:order-2 ${
						darkMode && 'text-white'
					}`}
					style={{ maxWidth: 'max(50vw, 750px)' }}
				>
					<div className='flex flex-col sm:flex-row justify-between items-center'>
						<motion.div
							className={`${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'bg-slate-300 bg-opacity-20 border-2 border-[rgba(255,255,255,0.5)] drop-shadow-mediumDark'
							} flex justify-center items-center mb-16 sm:mb-0 mx-8 p-2 h-24 sm:h-20 rounded-full`}
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
								src={visual}
								width={80}
								height={80}
								layout='intrinsic'
								className='object-contain object-center'
							/>
						</motion.div>
						<div className='flex flex-col justify-between items-center w-full'>
							<h3 className='text-2xl mb-4'>
								UI/UX and Layout Design
							</h3>
							<p className='text-xs'>
								Bringing WCAG best practices to your project, a
								meticulous attention for detail, and a boundless
								thirst for inventive ways to express your
								content.
							</p>
						</div>
					</div>
					<div className='flex flex-col sm:flex-row justify-between items-center'>
						<motion.div
							className={`${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'bg-slate-300 bg-opacity-20  border-2 border-[rgba(255,255,255,0.5)] drop-shadow-mediumDark'
							} flex justify-center items-center my-16 mx-8 p-2 h-24 sm:h-20 rounded-full`}
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
								src={route}
								width={80}
								height={80}
								layout='intrinsic'
								className='object-contain object-center'
							/>
						</motion.div>
						<div className='flex flex-col justify-center items-center w-full sm:my-24 lg:my-0'>
							<h3 className='text-2xl mb-4'>
								Backend APIs and Routing
							</h3>
							<p className='text-xs'>
								Defending your app from errors or misuse while
								also maximizing performance. Designing your APIs
								with simplicity and ease-of-use in mind, but
								never at the expense of robustness.
							</p>
						</div>
					</div>
					<div className='flex flex-col sm:flex-row justify-between items-center'>
						<motion.div
							className={`${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'bg-slate-300 border-2 bg-opacity-20 border-[rgba(255,255,255,0.5)] drop-shadow-mediumDark'
							} flex justify-center items-center my-16 sm:my-0 mx-8 p-4 h-24 sm:h-20 rounded-full`}
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
								src={react}
								width={80}
								height={80}
								layout='intrinsic'
								className='object-contain object-center'
							/>
						</motion.div>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='text-2xl mb-4'>
								Modern Frameworks and Tech
							</h3>
							<p className='text-xs'>
								Harnessing expertise in ReactJS, modern (ES6+)
								JavaScript, TypeScript, NodeJS, Cypress testing
								library, and UI libraries such as MaterialUI and
								TailwindCSS.
							</p>
						</div>
					</div>
					<h3 className='lg:hidden text-2xl mt-32'>
						Send me a message!
					</h3>
					<motion.button
						id='scrollUpPromptLg'
						className='absolute w-[5vw] left-[50%] bottom-[-3vh] hidden lg:flex flex-col justify-between items-center'
						animate={scrollPromptControls}
						initial='initial'
						variants={scrollPromptVariants}
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
							id='scrollImageAnimationWrapper'
							variants={scrollPromptChildVariants}
						>
							{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
							<Image
								src={scrollUp}
								alt='button to scroll to the top of the page'
								className={`${
									darkMode && 'invert'
								} scale-[.25] opacity-20`}
							/>
						</motion.div>
						<motion.p
							className='text-[0.5rem] mt-[-0.5rem] opacity-50'
							variants={scrollPromptChildVariants}
						>
							Scroll to top
						</motion.p>
					</motion.button>
				</div>
				<form
					ref={formRef}
					className={`relative lg:max-h-[80%] max-w-xl lg:max-w-[40%] w-full h-full flex flex-col justify-between items-center z-[1] py-16 px-12 mx-8 mt-64 xs:mt-32 lg:mt-0 after:absolute after:top-0 after:left-0 after:w-full after:h-full  rounded-[2rem] after:rounded-[2rem] after:z-[-1] shadow-lg lg:shadow-2xl ${
						darkMode
							? 'text-white after:blur-sm after:bg-contactFormBackdropDarkMode'
							: 'after:backdrop-blur-lg after:bg-contactFormBackdropLightMode'
					}`}
					onSubmit={submitForm}
				>
					<h4 className='self-start text-lg pb-2'>Name</h4>
					<input
						type='text'
						name='name'
						id='nameInput'
						className={`w-full rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none bg-transparent border-2 border-opacity-10 focus:border-opacity-40 ${
							darkMode ? 'border-white' : 'border-black'
						}`}
					/>
					<h4 className='self-start text-lg py-2'>Email</h4>
					<input
						type='email'
						name='email'
						id='emailInput'
						className={`w-full rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none bg-transparent border-2 border-opacity-10 focus:border-opacity-40 ${
							darkMode ? 'border-white' : 'border-black'
						}`}
					/>
					<h4 className='self-start text-lg py-2'>Message</h4>

					<textarea
						name='message'
						id='messageInput'
						className={`w-full resize-none rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none bg-transparent border-2 border-opacity-10 focus:border-opacity-40 ${
							darkMode ? 'border-white' : 'border-black'
						}`}
						rows={5}
					></textarea>
					<motion.button
						id='submitButton'
						className={`relative flex mt-8 px-4 py-2 rounded-[2rem] after:absolute after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px] after:rounded-[2rem] after:bg-contactFormSubmitBackdrop after:z-[-1] hover:bg-contactFormSubmitBackdrop hover:bg-no-repeat overflow-visible hover:text-white ${
							darkMode
								? 'bg-slate-800'
								: 'shadow-md bg-[rgba(255,255,255,0.75)]'
						}`}
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
					>
						Submit
						<div className='ml-4'>
							<Image src={laugh} width={16} height={16} />
						</div>
					</motion.button>
				</form>
				<motion.button
					id='scrollUpPromptSm'
					className={`lg:hidden h-[10vh] flex flex-col justify-between items-center mb-8 ${
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
						animate={{ y: [0, 16] }}
						transition={{ repeat: Infinity, repeatType: 'reverse' }}
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
					<p className='text-xs lg:text-[0.5rem] mt-[-4rem] opacity-50'>
						Scroll to top
					</p>
				</motion.button>
			</div>
			<div id='scrollRefDiv' ref={scrollUpRef}></div>
		</motion.section>
	)
}
