import React, { useState } from 'react'
import { GridMemberProps } from './ProjectData'
import Image from 'next/image'
import Link from 'next/link'
import { AnimationControls, motion, useAnimationControls } from 'framer-motion'
import styles from './ProjectsGridMember.module.css'
import socialScreenshot from '../../../public/projectDetails/petSocialHeader.webp'
import dancingScreenshot from '../../../public/projectDetails/dancingButtonHeader.webp'
import typingScreenshot from '../../../public/projectDetails/typingHeader.webp'
import sudokuScreenshot from '../../../public/projectDetails/soundokuBoard.webp'
import chatScreenshot from '../../../public/chatScreenshot.webp'

const screenshots = [
	socialScreenshot,
	typingScreenshot,
	dancingScreenshot,
	sudokuScreenshot,
	chatScreenshot,
]

interface GridMemberPropsWithControls extends GridMemberProps {
	i: number
	gridMemberControls: AnimationControls
}

function ProjectsGridMember({
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
				//	delay added to offset text content hover state transition time
				delay: gridMemberHovered ? 0 : 0.25,
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
			className={`projectsGridMember ${tailwindStyles} relative  bg-black p-4 text-white`}
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
			onFocus={() => {
				if (!gridMemberHovered) {
					setGridMemberHovered(true)
					stackTextControls.start('flicker')
				}
			}}
			onBlur={() => {
				if (
					!document.querySelector('.projectsGridMember :focus-within')
				) {
					setGridMemberHovered(false)
					stackTextControls.stop()
					stackTextControls.set('hidden')
					setStackItemIndex((prev) => prev + 1)
				}
			}}
			variants={gridMemberVariants}
			initial='initial'
			animate={gridMemberControls}
		>
			<motion.div
				animate={{
					opacity: gridMemberHovered ? 0.05 : 1,
				}}
				transition={{ duration: 0.5, type: 'tween' }}
			>
				<Image
					src={screenshots[screenshotId]}
					alt={altImgText}
					className='pointer-events-none select-none'
					layout='fill'
					objectFit='cover'
					objectPosition={objectPosition ? objectPosition : 'center'}
				/>
			</motion.div>
			<motion.div
				className='flex h-full w-full flex-col items-center justify-evenly'
				animate={{
					opacity: gridMemberHovered ? 1 : 0,
				}}
				transition={{
					duration: 0.5,
					type: 'tween',
					delay: gridMemberHovered ? 0.25 : 0,
				}}
			>
				<p
					className={`text-3xl ${styles.projectTitle} ${
						gridMemberHovered ? 'z-[1]' : ''
					}`}
				>
					{title}
				</p>
				{description && (
					<p
						className={`text-md ${
							gridMemberHovered ? 'z-[1]' : ''
						}`}
					>
						{description}
					</p>
				)}
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
					className={`flex w-full justify-evenly text-xs ${
						gridMemberHovered ? 'z-[1]' : ''
					}`}
				>
					{detailsLink && (
						<Link href={detailsLink} passHref>
							<a className='font-bold'>More Info</a>
						</Link>
					)}
					<a href={ghLink} target='_blank' rel='noreferrer'>
						Github
					</a>
					{liveLink && (
						<a href={liveLink} target='_blank' rel='noreferrer'>
							Live
						</a>
					)}
				</div>
			</motion.div>
		</motion.div>
	)
}

export default ProjectsGridMember
