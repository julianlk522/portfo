import React from 'react'
import {
	strongSkillsData,
	mediumSkillsData,
	futureSkillsData,
} from './SkillsData'
import SkillRow from './SkillsRow'

function Skills({ darkMode }) {
	return (
		<section
			id='skillsSection'
			className='flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden text-stone-600 dark:text-white'
			style={{
				backgroundImage:
					'linear-gradient(60deg, rgba(255, 91, 35, 0) -10%, rgba(255, 91, 35, 0.3) 45%, rgba(255, 91, 35, 0) 110%)',
			}}
		>
			<SkillRow
				data={strongSkillsData}
				caption="Some of the tools I'm most comfortable using..."
			/>
			<SkillRow
				data={mediumSkillsData}
				caption='I have some experience with these too but also lots to learn and improve on...'
			/>
			<SkillRow
				data={futureSkillsData}
				caption="...and I haven't yet used these but am excited to try them!"
			/>
		</section>
	)
}

export default Skills
