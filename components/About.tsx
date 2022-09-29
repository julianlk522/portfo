import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import myPhoto from '../public/myPhoto.webp'
import scrollUp from '../public/scrollUp.png'

export default function About({ darkMode }) {
	const aboutContainerRef = useRef(null)
	const scrollDownRef = useRef(null)
	const hoverRefInView = useInView(scrollDownRef, { amount: 'some' })

	const scrollDownControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const allOpacityTransform = useTransform(
		scrollYProgress,
		[0.2, 0.33, 0.53],
		[0, 1, 0]
	)

	const textVariants = {
		initial: {
			opacity: 0,
			transition: {
				delayChildren: 5,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const textChildVariants = {
		initial: {
			x: -50,
		},
		visible: {
			x: 0,
		},
	}

	const photoSectionVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				opacity: { staggerChildren: 0.2 },
			},
		},
	}

	const photoChildVariants = {
		initial: {
			x: 25,
			y: 0,
		},
		visible: {
			x: 0,
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
		if (darkMode) {
			aboutContainerRef.current.style.opacity = '1'
		}
	}, [darkMode])

	useEffect(() => {
		if (!hoverRefInView) {
			scrollDownControls.stop()
			scrollDownControls.set('initial')
		}
	}, [hoverRefInView])

	return (
		<motion.section
			id='aboutContainer'
			ref={aboutContainerRef}
			className={`${
				darkMode && 'bg-slate-800 text-white'
			} relative flex h-full items-center justify-between text-center`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 15vw, 20vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
			<motion.div
				id='aboutTextContent'
				className='flex h-full max-w-[60%] flex-col items-center justify-evenly'
				variants={textVariants}
				initial='initial'
				whileInView='visible'
				viewport={{ amount: 'all', once: true }}
			>
				<motion.h2
					id='aboutTitle'
					className={` ${
						darkMode
							? 'text-white drop-shadow-mediumDark'
							: 'drop-shadow-xl'
					} mb-8`}
					style={{
						fontSize: 'clamp(2rem, 8vw, 8vh)',
					}}
					variants={textChildVariants}
				>
					Some
					<span className='ml-4 bg-aboutHeaderText bg-clip-text text-transparent'>
						Introduction
					</span>
				</motion.h2>

				<motion.h3
					className='max-w-[80%] text-sm opacity-60'
					variants={textChildVariants}
				>
					Hi! I'm Julian and my passion is in designing and building
					exciting new solutions that leverage the powers of the web.
				</motion.h3>

				<motion.h3
					className='max-w-[80%] text-sm opacity-60'
					variants={textChildVariants}
				>
					I'm fascinated by reverse-engineering carefully-crafted user
					experiences and experimenting with new techniques and
					technologies to see what's possible. I love puzzles, games,
					challenges, and careful designwork of all shapes and sizes.
				</motion.h3>

				<motion.h3
					className='max-w-[80%] text-sm opacity-60'
					variants={textChildVariants}
				>
					Aside from coding I enjoy reading nonfiction and trying out
					different strategies to seek personal fitness - lately that
					has been tennis with my girlfriend, Sneha. I also love to
					cook and eat spicy food! 😋
				</motion.h3>
			</motion.div>
			<motion.div
				id='aboutPhotoSection'
				className='flex w-full flex-col items-center justify-end'
				variants={photoSectionVariants}
				initial='initial'
				whileInView='visible'
				viewport={{ amount: 'all' }}
				onAnimationComplete={() => {
					if (hoverRefInView) {
						scrollDownControls.start('bouncing')
					}
				}}
			>
				<motion.div
					id='aboutPhotoMask'
					className='flex h-72 w-72 items-center justify-center overflow-hidden rounded-full shadow-xl'
					variants={photoChildVariants}
				>
					<Image
						src={myPhoto}
						alt='photo of the author of this page'
						className='object-contain object-top'
					/>
				</motion.div>
				<motion.button
					ref={scrollDownRef}
					id='aboutScrollDownButton'
					className='mb-[-10rem]'
					animate={scrollDownControls}
					variants={photoChildVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() =>
						document
							.getElementById('workContainer')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
					<Image
						src={scrollUp}
						alt='button to scroll to the next section'
						className={`${
							darkMode && 'invert'
						} rotate-180 scale-[.1] opacity-10`}
					/>
				</motion.button>
			</motion.div>
		</motion.section>
	)
}
