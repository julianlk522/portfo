import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface SkillInterface {
	src: StaticImageData
	text: string
}

function Skill({ src, text }: SkillInterface) {
	return (
		<div
			className='relative flex h-16 w-16 flex-col items-center justify-around rounded-md bg-white bg-opacity-40 p-4 lg:h-24 lg:w-24'
			style={{ boxShadow: 'rgb(0 0 0 / 20%) 4px 5px 50px -5px' }}
		>
			<Image
				className='h-1/2 opacity-60'
				src={src}
				alt={text}
				height={32}
				width={32}
			/>
			<p className='text-[8px]'>{text}</p>
		</div>
	)
}

export default Skill
