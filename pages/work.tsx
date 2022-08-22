import pill from '../public/pill.png'
import socialScreenshot from '../public/socialScreenshot.png'
import dancingScreenshot from '../public/dancingScreenshot.png'
import typingScreenshot from '../public/typingScreenshot.png'
import chatScreenshot from '../public/chatScreenshot.png'
import Image from 'next/image'

export default function Work() {
	return (
		<div
			id='workContainer'
			className=' h-full py-16 px-32 flex flex-col justify-evenly text-center relative overflow-hidden'
		>
			<div
				id='pillWrapperDiv'
				className='h-[75%] w-1/2 absolute left-[-22%] top-[20%]'
			>
				<Image
					src={pill}
					alt='laboratory scenery'
					layout='fill'
					className='object-contain'
				/>
			</div>
			<h1 id='workTitleBanner' className='text-8xl my-16'>
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
					className='w-[60%] grid grid-rows-2 grid-cols-3 gap-8 items-center'
				>
					<div
						id='gridSection1'
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-8 border-[#FFACC6] border-opacity-40 col-start-1 col-span-2 shadow-thicc'
					>
						{/* to-do: make this p tag visible */}
						<p className='absolute bottom-[-20%] left-[10%] w-[80%] text-xs'>
							React, Redux, NodeJS, Express, MongoDB, Material UI
						</p>
						<Image
							src={socialScreenshot}
							alt='a Social Media app for pet owners'
							layout='fill'
						/>
					</div>
					<div
						id='gridSection2'
						className='relative w-full h-full overflow-hidden rounded-[3rem] border-8 border-[#FF5B23] border-opacity-40 shadow-thicc'
					>
						<Image
							src={typingScreenshot}
							alt='a React-based typing game [add more later]'
							className='object-cover object-left'
							layout='fill'
						/>
					</div>
					<div
						id='gridSection3'
						className='relative w-full h-full overflow-hidden rounded-[3rem] border-8 border-[#FF5B23] border-opacity-40 shadow-thicc'
					>
						<Image
							src={dancingScreenshot}
							alt='a simple game to test your reactions and accuracy usig the mouse'
							className='object-cover object-left-bottom'
							layout='fill'
						/>
					</div>
					<div
						id='gridSection4'
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-8 border-[#00d8ff] border-opacity-40 col-start-2 col-span-2 shadow-thicc'
					>
						<Image
							src={chatScreenshot}
							alt='a chat app for messaging your friends'
							className='object-cover object-left-bottom'
							layout='fill'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
