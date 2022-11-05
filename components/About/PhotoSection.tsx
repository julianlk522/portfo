import React, { useRef } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import portrait from '../../public/portrait.webp'
import scrollUp from '../../public/scrollUp.webp'

function PhotoSection({ spiralControls, handControls, containerInView }) {
	const scrollDownRef = useRef(null)
	const scrollDownControls = useAnimationControls()

	const { width } = useWindowDimensions()
	const mdScreenOrGreater = width && width >= 768

	const photoSectionVariants = {
		initial: {
			transition: {
				ease: 'easeOut',
			},
		},
		visible: {
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.5,
			},
		},
	}

	const photoVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	}

	const scrollDownTextVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 0.4,
		},
	}

	const scrollDownVariants = {
		initial: {
			opacity: 0,
			y: 0,
		},
		visible: {
			opacity: 0.2,
		},
		bouncing: {
			opacity: 0.2,
			y: [0, 16],
			x: 0,
			transition: {
				y: {
					repeat: Infinity,
					repeatType: 'reverse',
					duration: 2,
					delay: mdScreenOrGreater ? 1 : 0,
					ease: 'easeInOut',
				},
			},
		},
	}

	return (
		<motion.div
			id='photoSection'
			className='flex w-full flex-col items-center justify-evenly pb-16 md:justify-center md:pb-0'
			variants={photoSectionVariants}
			initial='initial'
			whileInView='visible'
			viewport={{
				amount: mdScreenOrGreater ? 'all' : 'some',
			}}
			onViewportLeave={() => {
				spiralControls.set('hidden')
				scrollDownControls.stop()
				scrollDownControls.set('initial')
			}}
		>
			<motion.div
				id='aboutPhotoMask'
				className='relative flex h-48 max-h-[33vh] w-48 max-w-[33vh] items-center justify-center overflow-hidden rounded-full shadow-thick lg:h-72 lg:w-72'
				variants={photoVariants}
				style={{
					backgroundImage:
						'linear-gradient(166deg, rgba(255,172,198,0.5) 25%, rgba(255,91,35,0.5) 100%)',
				}}
			>
				<Image
					src={portrait}
					layout='fill'
					objectFit='cover'
					alt='photo of the author of this page'
				/>
			</motion.div>
			<motion.button
				ref={scrollDownRef}
				id='photoSectionScrollDownButton'
				className='my-16 opacity-0 dark:invert'
				animate={scrollDownControls}
				variants={scrollDownVariants}
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
				onClick={() => {
					scrollDownControls.stop()
					scrollDownControls.set('initial')
					spiralControls.start('hidden')
					handControls.set('initial')
					document
						.getElementById('workContainer')
						.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
				<Image
					src={scrollUp}
					alt='button to scroll to the next section'
					width={38}
					height={20}
					className='rotate-180'
				/>
			</motion.button>
			<motion.p
				className='mb-16 text-[10px] opacity-40 dark:text-white md:mb-0'
				variants={scrollDownTextVariants}
				onAnimationComplete={() => {
					if (containerInView) {
						scrollDownControls.start('bouncing')
					}
				}}
			>
				Click the down arrow to continue
			</motion.p>
		</motion.div>
	)
}

export default PhotoSection
