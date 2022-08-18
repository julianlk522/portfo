import pill from '../public/pill.png'
import socialScreenshot from '../public/socialScreenshot.png'
import Image from 'next/image'

export default function Work() {
	return (
		<div
			id='workContainer'
			className='py-8 px-16 bg-mainBgFaded bg-cover h-full flex flex-col justify-evenly text-center relative overflow-hidden'
		>
			<div
				id='pillWrapperDiv'
				className='h-[75%] w-1/2 absolute left-[-22%] top-[20%]'
			>
				<Image
					src={pill}
					alt='laboratory scenery'
					layout='fill'
					className='opacity-20 object-contain'
				/>
			</div>
			<h1 id='workTitleBanner' className='text-8xl'>
				Scenes from the lab
			</h1>
			<section id='projectsSection' className='flex w-full h-[60%]'>
				<article
					id='projectsSectionComments'
					className='w-[40%] flex flex-col justify-between items-center p-16'
				>
					<p className='text-xl'>
						Here you can find links to some of my projects and the
						code behind them.
					</p>
					<p className='text-xl'>
						A stack summary is provided for each project to help you
						narrow your focus.
					</p>
				</article>

				<div
					id='projectsGrid'
					className='w-[60%] grid grid-rows-2 grid-cols-3 gap-4 items-center'
				>
					<div
						id='gridSection1'
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-4 border-[#FF5B23] col-start-1 col-span-2'
					>
						<p className='absolute bottom-[-20%] left-[10%] w-[80%] text-xs'>
							React, Redux, NodeJS, Express, MongoDB, Material UI
						</p>
						<Image
							src={socialScreenshot}
							alt='a Social Media app for pet owners'
							className='object-cover'
							layout='fill'
						/>
					</div>
					<div
						id='gridSection2'
						className='w-full h-full rounded-[3rem] border-4 border-[#FF5B23]'
					></div>
					<div
						id='gridSection3'
						className='w-full h-full rounded-[3rem] border-4 border-[#FF5B23]'
					></div>
					<div
						id='gridSection4'
						className='w-full h-full rounded-[3rem] border-4 border-[#FF5B23] col-start-2 col-span-2'
					></div>
				</div>
			</section>
		</div>
	)
}
