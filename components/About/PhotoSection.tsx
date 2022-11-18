import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import portrait from '../../public/portrait.webp'
import scrollUp from '../../public/scrollUp.webp'
import AboutSpiral from './AboutSpiral'

function PhotoSection({ containerInView, darkMode }) {
	const scrollDownRef = useRef(null)

	const spiralControls = useAnimationControls()
	const handControls = useAnimationControls()

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

	const photoOpacityVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	const scrollDownTextVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	const scrollDownVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	return (
		<motion.div
			id='photoSection'
			className='relative flex w-full flex-col items-center justify-center pb-16 md:pb-0'
			variants={photoSectionVariants}
			initial='initial'
			whileInView='visible'
			viewport={{
				amount: 'some',
				margin: '-200px 0px',
			}}
			onViewportLeave={() => {
				spiralControls.set('hidden')
			}}
		>
			<AboutSpiral
				darkMode={darkMode}
				spiralControls={spiralControls}
				handControls={handControls}
			/>
			<motion.div
				id='aboutPhotoMask'
				className='relative my-24 flex h-48 max-h-[33vh] w-48 max-w-[33vh] items-center justify-center overflow-hidden rounded-full shadow-thick md:my-0 lg:h-72 lg:w-72'
				variants={photoOpacityVariants}
				animate={{
					backgroundImage: darkMode
						? 'linear-gradient(166deg, rgba(255,172,198,0.6) 25%, rgba(255,91,35,0.6) 100%)'
						: 'linear-gradient(180deg, rgba(255, 0, 0, 0.6) 0%, rgba(255, 91, 35, 0.3) 75%)',
				}}
				transition={{ duration: 1, type: 'tween' }}
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
				className='buttonContainer flex md:mt-16'
				variants={scrollDownVariants}
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
				onClick={() => {
					spiralControls.set('hidden')
					handControls.set('initial')
					document
						.getElementById('skillsContainer')
						.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				<div className='relative h-4 w-8'>
					<div className='buttonArrowContainer'>
						<Image
							src={scrollUp}
							alt='continue to Work section'
							width={19}
							height={10}
							className='rotate-180 opacity-20 dark:invert'
						/>
					</div>
				</div>
				<motion.p
					className='ml-4 w-min text-xs lg:text-[0.6rem] 2xl:text-xs'
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
