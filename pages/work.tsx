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
			className=' h-full py-16 px-32 flex flex-col justify-between text-center relative overflow-hidden'
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
			<h1 id='workTitleBanner' className='text-8xl pt-8'>
				Scenes from the
				<span className='ml-8 bg-sunset text-transparent bg-clip-text'>
					lab
				</span>
			</h1>
			<section
				id='projectsSection'
				className='flex justify-evenly w-full h-[75%]'
			>
				<article
					id='projectsSectionComments'
					className='max-w-[25%] flex flex-col justify-between items-center p-16'
				>
					<p className='text-md'>
						Here you can find links to some of my projects and the
						code behind them.
					</p>
					<hr className='h-[2px] w-1/2 bg-black bg-opacity-25 rounded-full' />
					<p className='text-md'>
						A stack summary is provided for each project to help you
						narrow your focus.
					</p>
				</article>

				<div
					id='projectsGrid'
					className='relative grow grid grid-rows-2 grid-cols-3 gap-8 items-center'
				>
					<div className='absolute top-[-2rem] left-[-2rem] w-[calc(100%+4rem)] h-[calc(100%+4rem)] bg-slate-200 p-8 rounded-[3rem] blur-sm'></div>
					<div
						id='gridSection1'
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-4 border-[#FF5B23] border-opacity-50 col-start-1 col-span-2 shadow-thicc hover:bg-black'
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<p>
								PetSocial: Media sharing for pet owners and pet
								lovers
							</p>
							<p>Github</p>
							<p>Live demo</p>
						</div>
						{/* to-do: make this p tag visible */}
						<p className='absolute bottom-[-20%] left-[10%] w-[80%] text-xs'>
							React, Redux, NodeJS, Express, MongoDB, Material UI
						</p>
						<Image
							src={socialScreenshot}
							alt='a Social Media app for pet owners'
							layout='fill'
							className='hover:opacity-10'
						/>
					</div>
					<div
						id='gridSection2'
						className='relative w-full h-full overflow-hidden rounded-[3rem] border-4 border-[#FFACC6] border-opacity-50 shadow-thicc hover:bg-black'
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<p>Timed Typing Game</p>
							<div className='flex justify-evenly w-full'>
								<p>Github</p>
								<p>Live</p>
							</div>
						</div>
						<Image
							src={typingScreenshot}
							alt='a React-based typing game [add more later]'
							className='object-cover object-left hover:opacity-20'
							layout='fill'
						/>
					</div>
					<div
						id='gridSection3'
						className='relative w-full h-full overflow-hidden rounded-[3rem] border-4 border-[#00d8ff] border-opacity-50 shadow-thicc'
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
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-4 border-[#FF5B23] border-opacity-50 col-start-2 col-span-2 shadow-thicc'
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
