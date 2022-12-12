import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import scrollUp from '../../../public/scrollUp.webp'
import ProjectGridMember from './ProjectGridMember'
import projectsData from './ProjectData'

function ProjectsGrid({ gridMemberControls }) {
	return (
		<div
			id='gridContent'
			className='m-auto flex h-auto w-full flex-col items-center justify-between self-start overflow-x-visible sm:overflow-y-scroll md:h-full lg:overflow-visible'
		>
			<p className='my-16 text-xs opacity-60 dark:text-white md:hidden'>
				Scroll down to see more
			</p>
			<div
				id='projectsGrid'
				className='relative mx-auto mb-8 grid h-full w-full grid-cols-3 grid-rows-4 items-center gap-8 self-end md:mb-0 md:h-full md:grid-rows-2 xl:max-w-none'
			>
				{projectsData.map((gridMember, i) => {
					const {
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
					} = gridMember
					return (
						<ProjectGridMember
							key={i}
							i={i}
							tailwindStyles={tailwindStyles}
							objectPosition={objectPosition}
							screenshotId={screenshotId}
							title={title}
							description={description}
							altImgText={altImgText}
							stackItems={stackItems}
							ghLink={ghLink}
							liveLink={liveLink}
							detailsLink={detailsLink}
							gridMemberControls={gridMemberControls}
						/>
					)
				})}
			</div>
			<p
				id='portfoStackDescriptionSm'
				className='mt-16 mb-8 w-full bg-portfoStackTextSm text-xs dark:text-white md:mb-0 md:mt-8 lg:hidden'
			>
				This page uses Next.js, Tailwind CSS and Framer Motion
			</p>
			<motion.button
				id='workScrollDownButtonSm'
				className='relative my-16 flex w-min items-center justify-between rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg dark:text-white lg:hidden'
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
				onClick={() => {
					document
						.getElementById('contact')
						.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				<div className='relative h-4 w-8'>
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
				<p className='ml-4 w-min text-xs'>Continue</p>
			</motion.button>
		</div>
	)
}

export default ProjectsGrid
