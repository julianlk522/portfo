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
import { toast } from 'react-hot-toast'
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
	const opacityTransform = useTransform(scrollYProgress, [0.86, 1], [0, 1])

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

		if (emailData.status === 200) {
			return toast.success(
				"Your email has been sent - thank you!  I'll get back to you as soon as I can 😄"
			)
		}

		toast.error(() => (
			<span onClick={() => toast.dismiss()}>
				Something went wrong with your submission... 🤔 Sorry! Please
				leave a comment{' '}
				<a
					className='cursor-pointer underline'
					href='https://github.com/julianlk522/portfo/issues/new'
				>
					on Github
				</a>{' '}
				to help me find the bug.
			</span>
		))
	}

	return (
		<motion.section
			id='contactContainer'
			className={`${
				darkMode ? 'bg-slate-800' : 'bg-mainBgFaded'
			} relative flex h-full flex-col justify-between bg-cover py-16 px-32 text-center`}
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
				Let's design your
				<span className='mx-2 bg-tomatoToLightPink bg-clip-text text-transparent underline decoration-4 sm:mx-4'>
					dream
				</span>
				<br className='xs:hidden' />
				web app
			</h2>
			<div
				id='contactContentBody'
				className='flex h-[300vh] w-full flex-col items-center justify-between overflow-x-hidden overflow-y-scroll lg:h-full lg:flex-row lg:overflow-y-hidden'
			>
				<div
					id='experience'
					className={`relative my-32 mt-96 flex h-full w-full flex-col items-center justify-evenly sm:mt-32 sm:mb-0 lg:order-2 lg:my-0 lg:ml-8 lg:max-h-[80%] ${
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
							} mx-8 mb-16 flex h-24 items-center justify-center rounded-full p-2 sm:mb-0`}
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
							className={`${
								darkMode
									? 'border-4 border-[rgba(255,255,255,0.1)] shadow-thick'
									: 'border-2 border-[rgba(255,255,255,0.5)]  bg-slate-300 bg-opacity-20 drop-shadow-mediumDark'
							} my-16 mx-8 flex h-24 items-center justify-center rounded-full p-2`}
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
							} my-16 mx-8 flex h-24 items-center justify-center rounded-full px-2 py-4 sm:my-0`}
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
					<h3 className='mt-32 text-2xl xs:mb-32 sm:mb-0 lg:hidden'>
						Send me a message!
					</h3>
					<motion.button
						id='scrollUpPromptLg'
						className='absolute bottom-[-4rem] left-1/2 hidden w-[5vw] flex-col items-center justify-between lg:flex'
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
				<form
					ref={formRef}
					className={`relative z-[1] mx-8 mt-64 flex h-full w-full max-w-xl flex-col items-center justify-between rounded-[2rem] px-12 pt-16 pb-8 shadow-lg after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[2rem]  xs:mt-32 lg:mt-0 lg:max-h-[80%] lg:max-w-[40%] lg:shadow-2xl ${
						darkMode
							? 'text-white after:bg-contactFormBackdropDarkMode after:blur-sm'
							: 'after:bg-contactFormBackdropLightMode after:backdrop-blur-lg'
					}`}
					onSubmit={submitForm}
				>
					<h4 className='self-start pb-2 text-lg'>Name</h4>
					<input
						type='text'
						name='name'
						id='nameInput'
						className={`w-full rounded-xl border-2 border-opacity-10 bg-transparent py-2 px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
							darkMode ? 'border-white' : 'border-black'
						}`}
					/>
					<h4 className='self-start py-2 text-lg'>Email</h4>
					<input
						type='email'
						name='email'
						id='emailInput'
						className={`w-full rounded-xl border-2 border-opacity-10 bg-transparent py-2 px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
							darkMode ? 'border-white' : 'border-black'
						}`}
					/>
					<h4 className='self-start py-2 text-lg'>Message</h4>

					<textarea
						name='message'
						id='messageInput'
						className={`w-full resize-none rounded-xl border-2 border-opacity-10 bg-transparent p-4 py-2 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
							darkMode ? 'border-white' : 'border-black'
						}`}
						rows={5}
					></textarea>
					<motion.button
						id='submitButton'
						className={`relative mt-8 flex overflow-visible rounded-[2rem] px-4 py-2 after:absolute after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px] after:z-[-1] after:rounded-[2rem] after:bg-contactFormSubmitBackdrop hover:bg-contactFormSubmitBackdrop hover:bg-no-repeat hover:text-white ${
							darkMode
								? 'bg-slate-800'
								: 'bg-[rgba(255,255,255,0.75)] shadow-md'
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
					className={`mb-8 flex h-[10vh] flex-col items-center justify-between lg:hidden ${
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
					<p className='mt-[-4rem] text-xs opacity-50 lg:text-[0.5rem]'>
						Scroll to top
					</p>
				</motion.button>
			</div>
			<div id='scrollRefDiv' ref={scrollUpRef}></div>
		</motion.section>
	)
}
