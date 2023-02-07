import React, { useRef } from 'react'
import projectsData from './ProjectData'
import ProjectsGridMember from './ProjectsGridMember'
import ScrollButton from '../../ScrollButton'

function ProjectsGrid({ gridMemberControls }) {
	const scrollRef = useRef(null)
	return (
		<div
			ref={scrollRef}
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
						<ProjectsGridMember
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
			<ScrollButton
				section='contact'
				styles='lg:hidden my-16'
				scrollRef={scrollRef}
			/>
		</div>
	)
}

export default ProjectsGrid
