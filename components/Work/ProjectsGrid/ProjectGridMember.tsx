import React, { useState } from 'react'
import { AnimationControls, motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import socialScreenshot from '../../../public/socialScreenshot.webp'
import dancingScreenshot from '../../../public/dancingScreenshot.webp'
import typingScreenshot from '../../../public/typingScreenshot.webp'
import chatScreenshot from '../../../public/chatScreenshot.webp'
import styles from './ProjectGridMember.module.css'
import { GridMemberProps } from './ProjectData'

const screenshots = [
	socialScreenshot,
	typingScreenshot,
	dancingScreenshot,
	chatScreenshot,
]

interface GridMemberPropsWithControls extends GridMemberProps {
	tailwindStyles: string
	objectPosition?: string
	screenshotId: number
	title: string
	description?: string
	altImgText: string
	stackItems: string[]
	ghLink: string
	liveLink?: string
	custom: number
	gridMemberControls: AnimationControls
}

function ProjectGridMember({
	tailwindStyles,
	objectPosition,
	screenshotId,
	title,
	description,
	altImgText,
	stackItems,
	ghLink,
	liveLink,
	custom,
	gridMemberControls,
}: GridMemberPropsWithControls) {
	const [gridMemberHovered, setGridMemberHovered] = useState(false)

	const [stackItemIndex, setStackItemIndex] = useState(0)
	const stackTextControls = useAnimationControls()
	const stackTextVariants = {
		hidden: {
			opacity: 0,
		},
		flicker: {
			opacity: [0, 1, 0],
			transition: {
				duration: 1,
			},
		},
	}

	const gridMemberVariants = {
		initial: {
			opacity: 0,
			boxShadow: '0px 4px 30px 8px rgba(0, 0, 0, 1)',
		},
		visible: (custom: number) => ({
			opacity: 1,
			boxShadow: '',
			transition: {
				delay: custom * 0.05,
				type: 'tween',
			},
		}),
	}

	return (
		<motion.div
			custom={custom}
			className={`relative col-span-3 h-full w-full overflow-hidden rounded-[2rem] shadow-lg xl:shadow-xl ${tailwindStyles}`}
			style={{
				background: gridMemberHovered ? 'black' : 'transparent',
			}}
			onMouseEnter={() => {
				setGridMemberHovered(true)
				stackTextControls.start('flicker')
			}}
			onMouseLeave={() => {
				setGridMemberHovered(false)
				stackTextControls.stop()
				stackTextControls.set('hidden')
				setStackItemIndex((prev) => prev + 1)
			}}
			variants={gridMemberVariants}
			initial='initial'
			animate={gridMemberControls}
		>
			<div
				className={`relative flex h-full w-full flex-col items-center justify-evenly p-4 text-white ${styles.projectContentContainer}`}
			>
				<Image
					src={screenshots[screenshotId]}
					alt={altImgText}
					layout='fill'
					className={`object-cover ${objectPosition} ? ${objectPosition} : ''`}
					style={{ opacity: gridMemberHovered ? '10%' : '1' }}
				/>
				<p className={`text-3xl ${styles.projectTitle}`}>{title}</p>
				{description && <p className='text-md'>{description}</p>}
				<motion.p
					className='my-4 text-[#00d8ff]'
					animate={stackTextControls}
					variants={stackTextVariants}
					onAnimationComplete={() => {
						setStackItemIndex((prev) => prev + 1)
						if (gridMemberHovered) {
							stackTextControls.start('flicker')
						}
					}}
				>
					{stackItems[stackItemIndex % stackItems.length]}
				</motion.p>
				<div
					className={`flex w-full justify-evenly text-xs ${styles.projectLinks}`}
				>
					<a href={ghLink}>Github</a>
					{liveLink ? (
						<a href={liveLink}>Live</a>
					) : (
						<p>Live demo coming soon!</p>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default ProjectGridMember
