import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import laugh from '../public/laugh.svg'

function ContactForm({ darkMode }) {
	const formRef = useRef(null)
	const submitButtonControls = useAnimationControls()

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

	const submitButtonBackdropVariants = {
		initial: {
			x: 125,
			scaleY: 0.8,
			scaleX: 0.8,
			transition: {
				duration: 0.1,
				ease: 'easeIn',
			},
			transitionEnd: {
				x: -125,
			},
		},
		hovered: {
			x: 0,
			scaleX: 1,
			scaleY: 1,
			transition: {
				scaleX: {
					delay: 0.25,
				},
				scaleY: {
					delay: 0.25,
				},
			},
		},
	}

	return (
		<form
			ref={formRef}
			className={`relative z-[1] mx-8 flex h-[125%] w-full max-w-xl flex-col items-center justify-between rounded-[2rem] py-4 px-12 pt-8 shadow-lg after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[2rem] sm:h-[200%] md:pt-12 md:pb-8 lg:h-full lg:max-h-[80%] lg:w-1/2 lg:max-w-xl lg:pt-8 lg:shadow-xl xl:w-[60%] xl:pb-8 xl:pt-16 ${
				darkMode
					? 'text-white after:bg-contactFormBackdropDarkMode after:blur-sm'
					: 'after:bg-contactFormBackdropLightMode after:backdrop-blur-lg'
			}`}
			onSubmit={submitForm}
		>
			<label
				htmlFor='nameInput'
				className='self-start py-4 text-xs lg:pb-1 xl:text-base'
			>
				Name
			</label>
			<input
				type='text'
				name='name'
				id='nameInput'
				required
				className={`w-full rounded-xl border-2 border-opacity-10 bg-transparent py-1 px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
					darkMode ? 'border-white' : 'border-black'
				}`}
			/>
			<label
				htmlFor='emailInput'
				className='self-start py-4 text-xs lg:py-1 xl:text-base'
			>
				Email
			</label>
			<input
				type='email'
				name='email'
				id='emailInput'
				required
				className={`w-full rounded-xl border-2 border-opacity-10 bg-transparent py-1 px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
					darkMode ? 'border-white' : 'border-black'
				}`}
			/>
			<label
				htmlFor='messageInput'
				className='self-start py-4 text-xs lg:py-2 xl:text-base'
			>
				Message
			</label>
			<textarea
				name='message'
				id='messageInput'
				required
				className={`w-full resize-none rounded-xl border-2 border-opacity-10 bg-transparent px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
					darkMode ? 'border-white' : 'border-black'
				}`}
				rows={5}
			></textarea>
			<motion.button
				id='submitButton'
				className={`relative mt-4 flex min-h-[2rem] overflow-hidden rounded-[2rem] border-2 border-opacity-5 px-4 py-2 text-xs lg:mt-2 lg:pb-2 ${
					darkMode
						? 'border-white bg-slate-800'
						: 'border-black bg-[rgba(255,255,255,0.75)]'
				}`}
				onHoverStart={() => submitButtonControls.start('hovered')}
				onHoverEnd={() => submitButtonControls.start('initial')}
			>
				Submit
				<motion.div
					id='contactSubmitButtonBackdrop'
					className='absolute inset-1 rounded-full bg-contactFormSubmitBackdrop'
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
				</div>
			</motion.button>
		</form>
	)
}

export default ContactForm
