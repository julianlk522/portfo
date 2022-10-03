import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import portrait from '../public/portrait.webp'
import scrollUp from '../public/scrollUp.png'

export default function About({ darkMode }) {
	const aboutContainerRef = useRef(null)
	const scrollDownRef = useRef(null)
	const hoverRefInView = useInView(scrollDownRef, { amount: 'some' })

	const scrollDownControls = useAnimationControls()
	const spiralControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const allOpacityTransform = useTransform(
		scrollYProgress,
		[0.2, 0.33, 0.53],
		[0, 1, 0]
	)

	const textVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.1,
				staggerChildren: 0.1,
			},
		},
	}

	const textChildVariants = {
		initial: {
			x: -50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const photoSectionVariants = {
		initial: {
			opacity: 0,
			transition: {
				ease: 'easeOut',
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	}

	const photoChildVariants = {
		initial: {
			y: 0,
		},
		visible: {},
		bouncing: {
			y: [null, 16],
			x: 0,
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

	const spiralVariants = {
		hidden: { strokeWidth: 0 },
		visible: {
			strokeWidth: [null, 25, 2, 4],
			transition: {
				type: 'spring',
				duration: 3,
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
			} relative flex h-full items-center justify-between overflow-hidden text-center`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 10vw, 20vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
			<motion.svg
				className='absolute top-[30%] left-[40%] hidden h-full w-full xs:block'
				width='300'
				height='300'
				viewBox='0 0 400 400'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				initial='hidden'
			>
				<motion.path
					initial='hidden'
					variants={spiralVariants}
					animate={spiralControls}
					viewport={{ once: true }}
					d='M269.115 283.837C269.622 289.553 258.998 292.684 253.492 283.837C247.54 276.021 251.916 257.873 269.115 252.634C285.314 246.431 310.946 258.338 315.984 283.837C322.403 308.355 303.02 341.431 269.115 346.246C236.263 352.873 195.553 326.036 190.999 283.837C184.097 242.667 218.557 194.564 269.115 190.224C318.692 183.122 374.351 224.975 378.476 283.837C385.818 341.668 336.399 404.791 269.115 408.654C202.824 416.231 132.168 359.352 128.508 283.837C120.711 209.304 185.118 131.244 269.115 127.817C352.052 119.812 437.796 191.62 440.969 283.837C449.242 375.023 369.788 468.111 269.115 471.061C169.454 479.542 68.7531 392.715 66.0154 283.837C57.3159 175.99 151.72 67.8946 269.115 65.4083C385.46 56.4532 501.2 158.307 503.461 283.837C512.646 408.386 403.186 531.419 269.115 533.471C136.096 542.862 5.30842 426.067 3.52302 283.837C-6.09876 142.636 118.34 4.57501 269.115 3'
					stroke='#00D8FF'
					strokeOpacity='0.025'
					strokeWidth='0'
					strokeLinecap='round'
				/>
			</motion.svg>
			<motion.div
				id='aboutTextContent'
				className='relative flex h-full flex-col items-start justify-between overflow-y-scroll rounded-xl text-left after:absolute after:z-[-1] after:h-full after:w-full after:bg-aboutTextContentBackdrop xs:overflow-visible md:max-w-[50%] lg:h-full lg:max-w-[60%] lg:justify-evenly lg:pr-8'
				style={{ opacity: darkMode ? allOpacityTransform : '' }}
				variants={textVariants}
				initial='initial'
				whileInView='visible'
				viewport={{ amount: 'all' }}
			>
				<motion.h2
					id='aboutTitle'
					className={`mb-4 text-center xs:mt-8 ${
						darkMode
							? 'text-white drop-shadow-mediumDark'
							: 'drop-shadow-xl'
					}`}
					style={{
						fontSize: 'clamp(2rem, 6vw, 7vh)',
					}}
					variants={textChildVariants}
				>
					👋 Hello and
					<br />
					<span
						className={`bg-clip-text text-transparent ${
							darkMode ? 'bg-tomatoToLightPink' : 'bg-sunrise'
						}`}
					>
						Welcome!
					</span>
				</motion.h2>

				<motion.h3
					className='max-w-[80%]  text-xs opacity-60 sm:max-w-[100%] lg:text-sm'
					style={{ width: 'min(100%, 500px)' }}
					variants={textChildVariants}
				>
					I'm Julian and my passion is in designing and building
					exciting new solutions that leverage the powers of the web.
					I've been self-learning full stack web development now for
					11 months.
				</motion.h3>

				<motion.h3
					className='my-16 max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] lg:text-sm'
					style={{ width: 'min(100%, 500px)' }}
					variants={textChildVariants}
				>
					I'm fascinated by 🧬 reverse-engineering intricate user
					experiences and experimenting with new techniques and
					technologies to see what's possible.
				</motion.h3>

				<motion.h3
					className='max-w-[80%] text-xs opacity-60 sm:max-w-[100%] lg:text-sm'
					style={{ width: 'min(100%, 500px)' }}
					variants={textChildVariants}
				>
					I love puzzles, games, challenges, and careful designwork of
					all shapes and sizes. ⚙
				</motion.h3>

				<motion.h3
					className='my-16 max-w-[80%] text-xs opacity-60 xs:my-0 sm:max-w-[100%] lg:text-sm'
					style={{ width: 'min(100%, 500px)' }}
					variants={textChildVariants}
				>
					Aside from coding I like to read nonfiction and try out
					different strategies to seek personal fitness - lately that
					has been tennis with my girlfriend, Sneha. I also love to
					cook and eat spicy food! 😋
				</motion.h3>

				<div
					id='photoAndScrollWrapperSm'
					className='mb-8 flex items-center justify-between md:hidden'
				>
					<motion.div
						id='aboutPhotoSectionSm'
						className='flex w-full flex-col items-center justify-end'
						variants={photoSectionVariants}
						initial='initial'
						whileInView='visible'
						viewport={{ amount: 'all' }}
						onAnimationComplete={() => {
							if (hoverRefInView) {
								scrollDownControls.start('bouncing')
								spiralControls.start('visible')
							}
						}}
					>
						<motion.div
							id='aboutPhotoMask'
							className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full shadow-thick md:h-36 md:w-36 lg:h-72 lg:w-72'
							variants={photoChildVariants}
						>
							<Image
								src={portrait}
								alt='photo of the author of this page'
								className='object-contain object-top'
							/>
						</motion.div>
					</motion.div>
					<motion.button
						ref={scrollDownRef}
						id='aboutScrollDownButtonSm'
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
				</div>
			</motion.div>
			<motion.div
				id='aboutPhotoSectionMd'
				className='hidden w-full flex-col items-center justify-center md:flex'
				variants={photoSectionVariants}
				initial='initial'
				whileInView='visible'
				viewport={{ amount: 'all' }}
				onAnimationComplete={() => {
					if (hoverRefInView) {
						scrollDownControls.start('bouncing')
						spiralControls.start('visible')
					}
				}}
			>
				<motion.div
					id='aboutPhotoMask'
					className='flex h-48 w-48 items-center justify-center overflow-hidden rounded-full shadow-thick lg:h-72 lg:w-72'
					variants={photoChildVariants}
				>
					<Image
						src={portrait}
						alt='photo of the author of this page'
						className='object-contain object-top'
					/>
				</motion.div>
				<motion.button
					ref={scrollDownRef}
					id='aboutScrollDownButtonLg'
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
