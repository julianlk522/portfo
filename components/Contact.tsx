import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import laugh from '../public/laugh.svg'
import visual from '../public/visual.svg'
import route from '../public/route.svg'
import react from '../public/react.svg'
import scrollUp from '../public/scrollUp.png'

export default function Contact() {
	const scrollUpRef = useRef(null)
	const scrollPromptControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const isInView = useInView(scrollUpRef, { amount: 'all' })
	const opacityTransform = useTransform(scrollYProgress, [0.75, 1], [0, 1])

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

	return (
		<motion.section
			id='contactContainer'
			className='bg-mainBgFaded bg-cover h-full py-16 px-32 flex flex-col justify-between text-center relative'
			style={{ opacity: opacityTransform }}
		>
			<h2 id='contactTitle' className='text-6xl pt-8'>
				Let's design your dream web app.
			</h2>
			<div
				id='contactContentBody'
				className='flex justify-between w-full h-[75%]'
			>
				<form
					className='relative w-[40%] h-full flex flex-col justify-evenly items-center overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-sunset rounded-[3rem] py-8 px-12 after:border-4 after:border-[#FF5B23] after:rounded-[3rem] after:border-opacity-50 after:blur-sm shadow-thicc text-white'
					//	todo: update with email logic
					onSubmit={(e) => {
						e.preventDefault()
						console.log('thanks for submitting!')
					}}
				>
					<h4 className='self-start z-[1] text-lg'>Name</h4>
					<input
						type='text'
						id='nameInput'
						className='w-full z-[1] rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none'
					/>
					<h4 className='self-start z-[1] text-lg'>Email</h4>
					<input
						type='email'
						id='emailInput'
						className='w-full z-[1] rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none'
					/>
					<div className='flex justify-between items-center w-full'>
						<h4 className='self-start z-[1] text-lg'>Message</h4>
						<Image
							src={laugh}
							className='z-[1]'
							width={32}
							height={32}
						/>
					</div>
					<textarea
						name='messageContent'
						id='messageInput'
						className='w-full resize-none z-[1] rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none'
						rows={5}
					></textarea>
					<motion.button
						className='w-1/2 text-2xl z-[1] py-2 px-4 text-white bg-[#FF5B23] bg-opacity-30 rounded-xl drop-shadow-mediumDark'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Submit!
					</motion.button>
				</form>

				<div
					id='experience'
					className='relative w-[60%] h-full flex flex-col justify-evenly'
				>
					<div className='flex justify-end items-center'>
						<motion.div
							className='flex justify-center items-center mx-16 w-24 h-24 rounded-full bg-slate-300 drop-shadow-mediumDark'
							whileHover={{
								y: [null, -4, 4],
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
						<div className='flex flex-col justify-end items-center max-w-[60%]'>
							<h3 className='text-2xl'>
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
					<div className='flex justify-end items-center'>
						<motion.div
							className='flex justify-center items-center mx-16 w-24 h-24 rounded-full bg-slate-300 drop-shadow-mediumDark'
							whileHover={{
								y: [null, -4, 4],
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
						<div className='flex flex-col justify-center items-center max-w-[60%]'>
							<h3 className='text-2xl'>
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
					<div className='flex justify-end items-center'>
						<motion.div
							className='flex justify-center items-center mx-16 w-24 h-24 rounded-full bg-slate-300 drop-shadow-mediumDark'
							whileHover={{
								y: [null, -4, 4],
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
						<div className='flex flex-col justify-center items-center max-w-[60%]'>
							<h3 className='text-2xl'>
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
					<motion.button
						id='scrollUpPrompt'
						className='absolute w-[5vw] left-[50%] bottom-[-3vh] flex flex-col justify-between items-center'
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
								className='scale-[.25] opacity-20'
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
			</div>
			<div id='scrollRefDiv' ref={scrollUpRef}></div>
		</motion.section>
	)
}
