import React from 'react'
import Skill, { SkillInterface } from './Skill'

function SkillRow({ data, caption }) {
	return (
		<div className='flex w-full max-w-7xl flex-col'>
			<p className='mb-4 font-bold lg:mb-8'>{caption}</p>
			<div className='grid grid-flow-col'>
				{data.map((item: SkillInterface, i: number) => {
					return (
						<>
							<Skill key={i} src={item.src} text={item.text} />
						</>
					)
				})}
			</div>
		</div>
	)
}

export default SkillRow
