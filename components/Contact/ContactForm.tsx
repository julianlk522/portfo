import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useTypewriter } from 'react-simple-typewriter'
import { motion, useAnimationControls } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import laugh from '../../public/laugh.svg'
import styles from './ContactForm.module.css'

function ContactForm() {
	const formRef = useRef(null)
	const [delay, setDelay] = useState(0)
	const [speechBubbleText, setSpeechBubbleText] = useState('')

	const { width } = useWindowDimensions()
	const mdScreenOrLesser = width && width < 1024
	const screenCanFitSpeechBubbles = width && width >= 500

	const submitButtonControls = useAnimationControls()
	const speechBubbleControls = useAnimationControls()
	let speechBubbleTimeout: NodeJS.Timeout

	useEffect(() => {
		!screenCanFitSpeechBubbles && speechBubbleControls.set('hidden')
	}, [screenCanFitSpeechBubbles, speechBubbleControls])

	const [typewriterText] = useTypewriter({
		words: [speechBubbleText],
		delaySpeed: delay,
		typeSpeed: 20,
		deleteSpeed: 20,
		loop: false,
	})

	const contactFormVariants = {
		initial: {
			opacity: 0,
			y: mdScreenOrLesser ? 0 : 10,
			x: mdScreenOrLesser ? -10 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: 'tween',
				delay: mdScreenOrLesser ? 0 : 0.5,
				duration: mdScreenOrLesser ? 1 : 2,
			},
		},
	}

	const submitButtonBackdropVariants = {
		initial: {
			x: 0,
			scale: 0,
			transition: {
				x: {
					delay: 0.05,
					duration: 0.05,
				},
			},
		},
		hovered: {
			x: 0,
			scale: 1,
			transition: {
				scale: {
					duration: 0.1,
				},
			},
		},
	}

	const speechBubbleWrapperVariants = {
		hidden: {
			transition: {
				staggerChildren: 0.15,
				staggerDirection: -1,
			},
		},
		shown: {
			transition: {
				delayChildren: 2,
				staggerChildren: 0.25,
			},
		},
	}

	const speechBubbleChildVariants = {
		hidden: {
			opacity: 0,
		},
		shown: {
			opacity: 1,
		},
	}

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

	const showSpeechBubbles = () => {
		if (screenCanFitSpeechBubbles) {
			speechBubbleControls.start('shown')
			speechBubbleTimeout = setTimeout(() => {
				speechBubbleControls.start('hidden')
			}, 8000)
		}
	}

	const clearSpeechBubbles = () => {
		if (screenCanFitSpeechBubbles) {
			speechBubbleControls.start('hidden')
			clearTimeout(speechBubbleTimeout)
		}
	}

	const resetSpeechBubbleText = () => {
		if (
			document.getElementById('mainSpeechBubble')?.style?.opacity === '1'
		) {
			setDelay(2800)
			setSpeechBubbleText(
				'Yes, I actually receive and see these emails! 🤗'
			)
		} else {
			setDelay(0)
			setSpeechBubbleText('')
		}
	}

	return (
		<motion.form
			id='contactForm'
			ref={formRef}
			className={`relative z-[1] flex h-auto w-full max-w-xl flex-col items-center justify-start rounded-3xl py-8 after:absolute after:top-0 after:left-0 dark:text-white lg:ml-16 lg:w-1/2 lg:max-w-xl lg:self-start lg:py-0 xl:w-[60%] ${styles.contactInput}`}
			variants={contactFormVariants}
			initial='initial'
			whileInView='visible'
			viewport={{
				amount: 'some',
				once: true,
			}}
			onSubmit={submitForm}
		>
			<div id='nameInputContainer' className='mb-8 flex w-full flex-col'>
				<label
					htmlFor='nameInput'
					className='pb-2 text-xs opacity-80 md:py-4 lg:pt-0 lg:pb-2 xl:text-base'
				>
					Name
				</label>
				<input
					type='text'
					name='name'
					id='nameInput'
					required
					autoComplete='off'
					placeholder='Jane Doe'
					className='w-full border-b-2 border-b-slate-300 border-opacity-80 bg-transparent pb-1 focus:border-opacity-100 focus:outline-none dark:border-white dark:border-opacity-40 dark:focus:border-opacity-80'
				/>
			</div>
			<div
				id='messageInputContainer'
				className='mb-16 flex w-full flex-col'
			>
				<label
					htmlFor='messageInput'
					className='pb-2 text-xs opacity-80 md:py-4 lg:pt-0 lg:pb-2 xl:text-base'
				>
					Message
				</label>
				<textarea
					name='message'
					id='messageInput'
					required
					autoComplete='off'
					placeholder="I'm looking for a developer to help build our exciting new project. When can we meet to discuss this?"
					className='w-full resize-none border-b-2 border-b-slate-300 border-opacity-80 bg-transparent pb-1 focus:border-opacity-100 focus:outline-none dark:border-white dark:border-opacity-40 dark:focus:border-opacity-80'
					rows={3}
				></textarea>
			</div>
			<motion.button
				id='contactFormSubmitButton'
				className='relative flex w-auto rounded-md border-[1px] border-slate-700 border-opacity-5 bg-slate-100 px-4 py-2 text-xs shadow-lg hover:font-bold hover:text-white focus:outline-none dark:bg-slate-700 dark:bg-opacity-50 lg:pb-2'
				onHoverStart={() => submitButtonControls.start('hovered')}
				onHoverEnd={() => submitButtonControls.start('initial')}
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
			>
				Submit
				<motion.div
					id='contactSubmitButtonBackdrop'
					className='absolute inset-[1px] z-[-1] rounded-md bg-slate-100 bg-sunrise opacity-40 dark:bg-tomatoToLightPink'
					animate={submitButtonControls}
					variants={submitButtonBackdropVariants}
					initial='initial'
				></motion.div>
				<div className='relative ml-4'>
					<Image
						alt='submit message icon'
						src={laugh}
						width={16}
						height={16}
					/>
					<motion.div
						id='speechBubbleContent'
						variants={speechBubbleWrapperVariants}
						initial='hidden'
						animate={speechBubbleControls}
						onViewportEnter={showSpeechBubbles}
						onViewportLeave={clearSpeechBubbles}
						viewport={{ amount: 'all' }}
					>
						<motion.div
							id='speechBubbleDotSm'
							className='absolute bottom-full left-[125%] h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-500'
							variants={speechBubbleChildVariants}
						></motion.div>
						<motion.div
							id='speechBubbleDotMd'
							className='absolute bottom-[115%] left-[150%] h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-400'
							variants={speechBubbleChildVariants}
						></motion.div>
						<motion.div
							id='speechBubbleDotLg'
							className='absolute bottom-[130%] left-[190%] h-6 w-6 rounded-full bg-slate-400 dark:bg-slate-300'
							variants={speechBubbleChildVariants}
						></motion.div>
						<motion.div
							id='mainSpeechBubble'
							className='absolute bottom-[150%] left-[225%] flex h-16 w-32 items-center justify-center rounded-full bg-slate-500 px-4 text-white dark:bg-white dark:text-stone-600'
							variants={speechBubbleChildVariants}
							onAnimationComplete={resetSpeechBubbleText}
						>
							{typewriterText}
						</motion.div>
					</motion.div>
				</div>
			</motion.button>
		</motion.form>
	)
}

export default ContactForm
