import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import portrait from '../../public/portrait.webp'
import AboutSpiral from './AboutSpiral'
import ScrollButton from '../ScrollButton'

function PhotoSection({ containerInView, darkMode }) {
	const scrollRef = useRef(null)
	const spiralControls = useAnimationControls()
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

	const opacityVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	return (
		<motion.div
			ref={scrollRef}
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
				spiralControls.stop()
				spiralControls.set('hidden')
			}}
			onAnimationComplete={() => {
				if (containerInView) {
					spiralControls.start('visible')
				}
			}}
		>
			<AboutSpiral darkMode={darkMode} spiralControls={spiralControls} />
			<motion.div
				id='aboutPhotoMask'
				className='relative my-24 flex h-48 max-h-[33vh] w-48 max-w-[33vh] items-center justify-center overflow-hidden rounded-full shadow-thick md:my-0 lg:h-72 lg:w-72'
				variants={opacityVariants}
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
			<ScrollButton
				section='skills'
				styles='md:mt-16'
				variants={opacityVariants}
				clickEvent={() => {
					spiralControls.stop()
					spiralControls.set('hidden')
				}}
				scrollRef={scrollRef}
			/>
		</motion.div>
	)
}

export default PhotoSection
