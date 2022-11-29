import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface SkillInterface {
	src: StaticImageData
	text: string
}

function Skill({ src, text }: SkillInterface) {
	return (
		<div
			className='mr-2 flex h-16 w-16 flex-col items-center justify-center whitespace-nowrap rounded-md bg-white bg-opacity-40 p-2 text-center sm:mr-4 sm:p-4 tall:h-20 tall:w-20'
			style={{
				boxShadow: 'rgb(0 0 0 / 20%) 4px 5px 50px -5px',
			}}
		>
			<div className='block tall:hidden'>
				<Image
					className='h-1/2 opacity-60'
					src={src}
					alt={text}
					height={text ? 24 : 36}
					width={text ? 24 : 36}
				/>
			</div>
			<div className='hidden tall:block'>
				<Image
					className='h-1/2 opacity-60'
					src={src}
					alt={text}
					height={text ? 36 : 48}
					width={text ? 36 : 48}
				/>
			</div>

			{text && <p className='text-[8px] tall:text-[10px]'>{text}</p>}
		</div>
	)
}

export default Skill
