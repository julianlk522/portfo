import React, { useState } from 'react'
import { AnimationControls, motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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
	detailsLink?: string
	i: number
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
	detailsLink,
	i,
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
				duration: 0.75,
			},
		},
	}

	const gridMemberVariants = {
		initial: {
			opacity: 0,
		},
		visible: (i: number) => ({
			opacity: 1,
			transition: {
				delay: 0.1 * i,
				duration: 0.5,
				type: 'tween',
			},
		}),
	}

	return (
		<motion.div
			custom={i}
			className={`projectGridMember ${tailwindStyles}`}
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
					className='my-4 bg-tomatoToLightPink bg-clip-text font-bold text-transparent'
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
					<a href={ghLink} target='_blank' rel='noreferrer'>
						Github
					</a>

					{liveLink && (
						<a href={liveLink} target='_blank' rel='noreferrer'>
							Live
						</a>
					)}

					{detailsLink && (
						<Link href={detailsLink}>More Information</Link>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default ProjectGridMember
