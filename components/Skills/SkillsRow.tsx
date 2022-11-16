import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Skill, { SkillInterface } from './Skill'
import styles from './SkillsRow.module.css'

interface SkillRowInterface {
	data: SkillInterface[]
	caption: string
	shouldAlwaysScroll?: boolean
}

function SkillRow({ data, caption, shouldAlwaysScroll }: SkillRowInterface) {
	const { width } = useWindowDimensions()
	const mobile = width <= 450
	return (
		<div
			className={`mb-8 flex w-full flex-col ${
				mobile || shouldAlwaysScroll ? 'items-start' : 'items-center'
			} lg:mb-12 lg:mt-8`}
		>
			<p className='mb-4 pl-4 font-bold lg:mb-8 lg:pl-8'>{caption}</p>
			<div
				className={`${
					mobile || shouldAlwaysScroll ? styles.scrolling : ''
				} flex`}
			>
				<div className='row1 grid grid-flow-col'>
					{data.map((item: SkillInterface, i: number) => {
						return <Skill key={i} src={item.src} text={item.text} />
					})}
				</div>
				<div
					className={`row2 grid-flow-col ${
						mobile || shouldAlwaysScroll ? 'grid' : 'hidden'
					}`}
					style={{ transform: 'translateX(-200%)' }}
				>
					{data.map((item: SkillInterface, j: number) => {
						return <Skill key={j} src={item.src} text={item.text} />
					})}
				</div>
			</div>
		</div>
	)
}

export default SkillRow
