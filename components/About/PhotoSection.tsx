import React, { useRef } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Image from 'next/image'
import { motion } from 'framer-motion'
import portrait from '../../public/portrait.webp'
import scrollUp from '../../public/scrollUp.webp'

function PhotoSection({ spiralControls, handControls, containerInView }) {
	const scrollDownRef = useRef(null)

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
			opacity: 1,
		},
	}

	return (
		<motion.div
			id='photoSection'
			className='flex w-full flex-col items-center justify-evenly pb-16 md:justify-evenly md:pb-0'
			variants={photoSectionVariants}
			initial='initial'
			whileInView='visible'
			viewport={{
				amount: mdScreenOrGreater ? 'all' : 'some',
			}}
			onViewportLeave={() => {
				spiralControls.set('hidden')
			}}
		>
			<motion.div
				id='aboutPhotoMask'
				className='relative my-24 flex h-48 max-h-[33vh] w-48 max-w-[33vh] items-center justify-center overflow-hidden rounded-full shadow-thick md:my-0 lg:h-72 lg:w-72'
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
				className='relative flex w-min items-center justify-between rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg'
				variants={scrollDownVariants}
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
				onClick={() => {
					spiralControls.start('hidden')
					handControls.set('initial')
					document
						.getElementById('workContainer')
						.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				<div id='arrowContainer' className='relative h-full w-8'>
					{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
					<div
						id='primaryArrowContainer'
						className='absolute top-[-25%] h-full w-full'
					>
						<Image
							src={scrollUp}
							alt='scroll to the top'
							width={19}
							height={10}
							className='rotate-180 opacity-20 dark:invert'
						/>
					</div>
				</div>
				<motion.p
					className='ml-4 w-min text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'
					variants={scrollDownTextVariants}
					onAnimationComplete={() => {
						if (containerInView) {
							spiralControls.start('visible')
						}
					}}
				>
					Continue
				</motion.p>
			</motion.button>
		</motion.div>
	)
}

export default PhotoSection
