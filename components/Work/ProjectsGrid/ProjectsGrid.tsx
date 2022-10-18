import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import scrollUp from '../../../public/scrollUp.webp'
import ProjectGridMember from './ProjectGridMember'
import projectsData from './ProjectData'

const scrollDownVariants = {
	initial: {
		y: 0,
	},
	bouncing: {
		y: [null, 16],
		x: 0,
		transition: {
			y: {
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 2,
			},
		},
	},
}

function ProjectsGrid({ gridMemberControls }) {
	return (
		<div
			id='gridContentContainer'
			className='m-auto flex h-[300%] w-full flex-col items-center justify-between self-start overflow-x-visible sm:overflow-y-scroll md:h-full lg:max-w-4xl lg:overflow-visible'
		>
			<p className='my-16 text-xs opacity-40 dark:text-white md:hidden'>
				Scroll down to see more
			</p>
			<div
				id='projectsGrid'
				className='relative mx-auto mb-8 grid h-full w-full max-w-[90%] grid-cols-3 grid-rows-4 items-center gap-8 self-end md:mb-0 md:h-full md:grid-rows-2 xl:max-w-none'
			>
				{projectsData.map((gridMember, i) => {
					const {
						tailwindStyles,
						screenshotId,
						title,
						description,
						altImgText,
						stackItems,
						ghLink,
						liveLink,
					} = gridMember
					return (
						<ProjectGridMember
							key={i}
							custom={i + 1}
							tailwindStyles={tailwindStyles}
							screenshotId={screenshotId}
							title={title}
							description={description}
							altImgText={altImgText}
							stackItems={stackItems}
							ghLink={ghLink}
							liveLink={liveLink}
							gridMemberControls={gridMemberControls}
						/>
					)
				})}
			</div>
			<motion.p
				id='portfoStackDescriptionSm'
				className='mt-16 w-full bg-portfoStackTextSm text-xs dark:text-white md:mt-8 lg:hidden'
			>
				This page uses Next.js, Tailwind CSS and Framer Motion
			</motion.p>
			<motion.button
				id='scrollDownPromptSm'
				className='my-16 flex flex-col items-center justify-between dark:text-white lg:hidden'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() =>
					document
						.getElementById('contactContainer')
						.scrollIntoView({ behavior: 'smooth' })
				}
			>
				<motion.div
					variants={scrollDownVariants}
					whileInView='bouncing'
					viewport={{ amount: 'all' }}
				>
					{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
					<Image
						src={scrollUp}
						width={38}
						height={20}
						alt='button to scroll down to the Contact section'
						className='rotate-180 opacity-20 dark:invert'
					/>
				</motion.div>
				<p className='mt-16 text-xs opacity-50'>Continue</p>
			</motion.button>
		</div>
	)
}

export default ProjectsGrid
