import React from 'react'
import { strongSkillsData } from './SkillsData'
import SkillRow from './SkillsRow'

function Skills({ darkMode }) {
	return (
		<section
			id='skillsSection'
			className='flex h-screen w-screen items-center justify-around overflow-x-visible px-8 text-stone-600 dark:text-white lg:px-16'
			style={{
				backgroundImage:
					'linear-gradient(60deg, rgba(255, 91, 35, 0) -10%, rgba(255, 91, 35, 0.3) 45%, rgba(255, 91, 35, 0) 110%)',
			}}
		>
			<SkillRow
				data={strongSkillsData}
				caption="Some of the tools I'm most comfortable using"
			/>
		</section>
	)
}

export default Skills
