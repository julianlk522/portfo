import React, { useRef } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import laugh from '../../public/laugh.svg'
import styles from './ContactForm.module.css'

function ContactForm() {
	const formRef = useRef(null)
	const { width } = useWindowDimensions()
	const mdScreenOrLesser = width && width < 1024

	const submitButtonControls = useAnimationControls()

	const contactFormVariants = {
		initial: {
			opacity: 0,
			y: mdScreenOrLesser ? 0 : 100,
			x: mdScreenOrLesser ? 100 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: 'tween',
				delay: mdScreenOrLesser ? 0 : 1,
				duration: mdScreenOrLesser ? 1 : 2,
			},
		},
	}

	const submitButtonBackdropVariants = {
		initial: {
			x: 125,
			scale: 0.8,
			transition: {
				x: {
					delay: 0.1,
					duration: 0.1,
				},
			},
			transitionEnd: {
				x: -125,
				scale: 0,
			},
		},
		hovered: {
			x: 0,
			scale: 1,
			transition: {
				scale: {
					delay: 0.1,
					duration: 0.2,
				},
			},
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

	return (
		<motion.form
			id='contactForm'
			ref={formRef}
			className={`relative z-[1] flex h-full w-full max-w-xl flex-col items-center justify-start rounded-3xl py-8 px-8 after:absolute after:top-0 after:left-0 dark:text-white lg:max-h-[80%] lg:w-1/2 lg:max-w-xl lg:py-0 xl:w-[60%] ${styles.contactInput}`}
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
				className='mb-8 flex w-full flex-col'
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
					placeholder="I'm looking for a developer to help build our exciting new project. When can we meet to dicuss this?"
					className='w-full resize-none border-b-2 border-b-slate-300 border-opacity-80 bg-transparent pb-1 focus:border-opacity-100 focus:outline-none dark:border-white dark:border-opacity-40 dark:focus:border-opacity-80'
					rows={4}
				></textarea>
			</div>
			<motion.button
				id='submitButton'
				className='relative flex min-h-[2rem] overflow-hidden rounded-md border-[1px] border-slate-700 border-opacity-5 bg-slate-100 px-4 py-2 text-xs shadow-lg focus:outline-none dark:bg-slate-700 dark:bg-opacity-50 lg:pb-2'
				onHoverStart={() => submitButtonControls.start('hovered')}
				onHoverEnd={() => submitButtonControls.start('initial')}
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
			>
				Submit
				<motion.div
					id='contactSubmitButtonBackdrop'
					className='absolute inset-[1px] z-[-1] rounded-sm bg-slate-100 bg-labText opacity-20'
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
		</motion.form>
	)
}

export default ContactForm
