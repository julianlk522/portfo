import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import socialScreenshot from '../public/socialScreenshot.webp'
import dancingScreenshot from '../public/dancingScreenshot.webp'
import typingScreenshot from '../public/typingScreenshot.webp'
import chatScreenshot from '../public/chatScreenshot.webp'

const screenshots = [
	socialScreenshot,
	typingScreenshot,
	dancingScreenshot,
	chatScreenshot,
]

interface GridMemberProps {
	tailwindStyles: string
	objectPosition?: string
	screenshotId: number
	title: string
	description?: string
	altImgText: string
	stackItems: string[]
	ghLink: string
	liveLink?: string
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
}: GridMemberProps) {
	const [gridMemberHovered, setGridMemberHovered] = useState(false)

	const [stackItemCoef, setStackItemCoef] = useState(0)
	const stackTextControls = useAnimationControls()
	const stackTextVariants = {
		flicker: {
			opacity: [null, 1, 0],
			transition: {
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
		},
	}

	return (
		<div
			className={`relative col-span-3 h-full w-full overflow-hidden rounded-[2rem] shadow-xl ${tailwindStyles}`}
			style={{
				background: gridMemberHovered && 'black',
			}}
			onMouseEnter={() => {
				setGridMemberHovered(true)
				stackTextControls.start('flicker')
			}}
			onMouseLeave={() => {
				setGridMemberHovered(false)
				stackTextControls.stop()
				stackTextControls.set('hidden')
				setStackItemCoef((prev) => prev + 1)
			}}
		>
			<div
				id='projectContentContainer'
				className='flex h-full w-full flex-col items-center justify-evenly p-4 text-white'
			>
				<Image
					src={screenshots[screenshotId]}
					alt={altImgText}
					layout='fill'
					className={`object-cover ${objectPosition} ? ${objectPosition} : ''`}
					style={{ opacity: gridMemberHovered && '10%' }}
				/>
				<p className='projectTitle text-3xl'>{title}</p>
				{description && <p className='text-md'>{description}</p>}
				<motion.p
					className='my-4 text-[#00d8ff]'
					animate={stackTextControls}
					variants={stackTextVariants}
					onAnimationComplete={() => {
						setStackItemCoef((prev) => prev + 1)
						if (gridMemberHovered) {
							stackTextControls.start('flicker')
						}
					}}
				>
					{stackItems[stackItemCoef % stackItems.length]}
				</motion.p>
				<div className='projectLinks flex w-full justify-evenly text-xs'>
					<a href={ghLink}>Github</a>
					{liveLink ? (
						<a href={liveLink}>Live</a>
					) : (
						<p>Live demo coming soon!</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectGridMember
