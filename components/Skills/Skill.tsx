import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface SkillInterface {
	src: StaticImageData
	text: string
}

function Skill({ src, text }: SkillInterface) {
	return (
		<div
			className='relative flex h-16 w-16 flex-col items-center justify-around rounded-md bg-white bg-opacity-40 p-2 text-center lg:h-24 lg:w-24 lg:p-4'
			style={{ boxShadow: 'rgb(0 0 0 / 20%) 4px 5px 50px -5px' }}
		>
			<div className='block lg:hidden'>
				<Image
					className='h-1/2 opacity-60'
					src={src}
					alt={text}
					height={text ? 24 : 36}
					width={text ? 24 : 36}
				/>
			</div>
			<div className='hidden lg:block'>
				<Image
					className='h-1/2 opacity-60'
					src={src}
					alt={text}
					height={text ? 36 : 48}
					width={text ? 36 : 48}
				/>
			</div>

			{text && <p className='text-[10px] lg:text-xs'>{text}</p>}
		</div>
	)
}

export default Skill
