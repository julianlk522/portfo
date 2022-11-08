import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import scrollUp from '../../../public/scrollUp.webp'
import ProjectGridMember from './ProjectGridMember'
import projectsData from './ProjectData'

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
							i={i}
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
				id='workScrollDownButtonSm'
				className='relative my-16 flex w-min items-center justify-between rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg lg:hidden'
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
				onClick={() => {
					document
						.getElementById('contactContainer')
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
				<p className='ml-4 w-min text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
					Continue
				</p>
			</motion.button>
		</div>
	)
}

export default ProjectsGrid
