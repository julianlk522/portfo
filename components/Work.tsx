import pill from '../public/pill.svg'
import socialScreenshot from '../public/socialScreenshot.png'
import dancingScreenshot from '../public/dancingScreenshot.png'
import typingScreenshot from '../public/typingScreenshot.png'
import chatScreenshot from '../public/chatScreenshot.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Work() {
	const { scrollYProgress } = useScroll()
	const opacityTransform = useTransform(
		scrollYProgress,
		[0.25, 0.5, 0.7],
		[0, 1, 0]
	)
	return (
		<motion.div
			id='workContainer'
			className=' h-full py-16 px-32 flex flex-col justify-between text-center relative'
			style={{ opacity: opacityTransform }}
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
				<span className='ml-8 bg-sunrise text-transparent bg-clip-text'>
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
					className='relative grid grid-rows-12 grid-cols-3 gap-8 items-center'
				>
					<div className='absolute top-[-1rem] left-[-2rem] w-[calc(100%+4rem)] h-[calc(100%+2rem)] bg-slate-100 rounded-[3rem] blur-sm'></div>
					<p className='mb-[-1rem] col-span-2 text-xs z-[1]'>
						React, Typescript, Redux, NodeJS, Express, MongoDB,
						Material UI
					</p>
					<p className='mb-[-1rem] col-start-3 text-xs z-[1]'>
						React, Typescript, Context API, Cypress, TailwindCSS,
						DaisyUI
					</p>
					<div
						id='gridSection1'
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-8 border-transparent col-start-1 col-span-2 row-start-2 row-span-5 shadow-thicc hover:bg-black hover:border-[#FF5B23]'
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<p className='projectTitle text-4xl'>PetSocial</p>
							<p className='text-lg'>
								Media sharing for pet owners and pet lovers
							</p>
							<div className='flex justify-evenly w-full'>
								<p className='text-sm'>Github</p>
								<p className='text-sm'>Live demo</p>
							</div>
						</div>
						<Image
							src={socialScreenshot}
							alt='a Social Media app for pet owners'
							layout='fill'
							className='object-cover object-center hover:opacity-10'
						/>
					</div>
					<div
						id='gridSection2'
						className='relative w-full h-full row-start-2 row-span-5 overflow-hidden rounded-[3rem] border-8 border-transparent shadow-thicc hover:bg-black hover:border-[#FFACC6]'
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<p className='projectTitle text-2xl'>
								Timed Typing Game
							</p>
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
						className='relative w-full h-full row-start-7 row-span-5 overflow-hidden rounded-[3rem] border-8 border-transparent border-opacity-50 shadow-thicc hover:bg-black hover:border-[#00d8ff]'
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<p className='projectTitle text-2xl'>
								Dancing Button
							</p>
							<div className='flex justify-evenly w-full'>
								<p>Github</p>
								<p>Live</p>
							</div>
						</div>
						<Image
							src={dancingScreenshot}
							alt='a simple game to test your reactions and accuracy usig the mouse'
							className='object-cover object-left-bottom hover:opacity-20'
							layout='fill'
						/>
					</div>
					<div
						id='gridSection4'
						className='relative overflow-hidden w-full h-full rounded-[3rem] border-8 border-transparent col-start-2 col-span-2 row-start-7 row-span-5 shadow-thicc hover:bg-black hover:border-[#FF5B23]'
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<p className='projectTitle text-4xl'>
								Chat Station
							</p>
							<p className='text-lg'>
								Quickly and conveniently message your friends
							</p>
							<div className='flex justify-evenly w-full'>
								<p className='text-sm'>Github</p>
								<p className='text-sm'>Live demo</p>
							</div>
						</div>
						<Image
							src={chatScreenshot}
							alt='a chat app for messaging your friends'
							className='object-cover object-left-bottom hover:opacity-10'
							layout='fill'
						/>
					</div>
					<p className='mt-[-1rem] col-start-1 row-start-12 row-span-1 text-xs z-[1]'>
						Javascript, HTML, CSS
					</p>
					<p className='mt-[-1rem] col-start-2 col-span-2 row-start-12 row-span-1 text-xs z-[1]'>
						React, Typescript, Context API, TailwindCSS, MySQL,
						NodeJS, Express
					</p>
				</div>
			</section>
		</motion.div>
	)
}
