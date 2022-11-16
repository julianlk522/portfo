import React from 'react'
import { mediumSkillsData, strongSkillsData } from './SkillsData'
import SkillRow from './SkillsRow'

function Skills({ darkMode }) {
	return (
		<section
			id='skillsSection'
			className='flex h-screen w-screen flex-col items-center justify-center overflow-x-visible px-8 text-stone-600 dark:text-white lg:px-16'
			style={{
				backgroundImage:
					'linear-gradient(60deg, rgba(255, 91, 35, 0) -10%, rgba(255, 91, 35, 0.3) 45%, rgba(255, 91, 35, 0) 110%)',
			}}
		>
			<SkillRow
				data={strongSkillsData}
				caption="Some of the tools I'm most comfortable using"
			/>
			<SkillRow
				data={mediumSkillsData}
				caption="I've used these but have a lot to learn!"
			/>
		</section>
	)
}

export default Skills
