import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import laugh from '../public/laugh.svg'

function ContactForm({ darkMode }) {
	const formRef = useRef(null)

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
		<form
			ref={formRef}
			className={`relative z-[1] mx-8 flex h-[125%] w-full max-w-xl flex-col items-center justify-between rounded-[2rem] px-12 pt-16 pb-8 shadow-lg after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-full after:rounded-[2rem] xs:h-full lg:max-h-[80%] lg:w-1/2 lg:max-w-xl lg:shadow-2xl ${
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
				required
				className={`w-full rounded-xl border-2 border-opacity-10 bg-transparent py-2 px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
					darkMode ? 'border-white' : 'border-black'
				}`}
			/>
			<h4 className='self-start py-2 text-lg'>Email</h4>
			<input
				type='email'
				name='email'
				id='emailInput'
				required
				className={`w-full rounded-xl border-2 border-opacity-10 bg-transparent py-2 px-4 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
					darkMode ? 'border-white' : 'border-black'
				}`}
			/>
			<h4 className='self-start py-2 text-lg'>Message</h4>
			<textarea
				name='message'
				id='messageInput'
				required
				className={`w-full resize-none rounded-xl border-2 border-opacity-10 bg-transparent p-4 py-2 drop-shadow-mediumDark focus:border-opacity-40 focus:outline-none ${
					darkMode ? 'border-white' : 'border-black'
				}`}
				rows={5}
			></textarea>
			<motion.button
				id='submitButton'
				className={`relative mt-8 flex overflow-visible rounded-[2rem] px-4 py-2 after:absolute after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px] after:z-[-1] after:rounded-[2rem] after:bg-contactFormSubmitBackdrop ${
					darkMode ? 'bg-slate-800' : 'bg-[rgba(255,255,255,0.75)]'
				}`}
				// whileHover={{
				// 	scale: 1.1,
				// }}
				whileTap={{ scale: 0.9 }}
			>
				Submit
				<div className='ml-4'>
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
