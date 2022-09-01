import { useState, useEffect, useRef } from 'react'
import pill from '../public/pill.svg'
import socialScreenshot from '../public/socialScreenshot.png'
import dancingScreenshot from '../public/dancingScreenshot.png'
import typingScreenshot from '../public/typingScreenshot.png'
import chatScreenshot from '../public/chatScreenshot.png'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'

export default function Work() {
	const [topLeftHovered, setTopLeftHovered] = useState(false)
	const [topRightHovered, setTopRightHovered] = useState(false)
	const [bottomLeftHovered, setBottomLeftHovered] = useState(false)
	const [bottomRightHovered, setBottomRightHovered] = useState(false)
	const { scrollYProgress } = useScroll()
	const textBodyControls = useAnimationControls()
	const textBodyRef = useRef(null)
	const isInView = useInView(textBodyRef, { amount: 'all' })
	const opacityTransform = useTransform(
		scrollYProgress,
		[0.25, 0.5, 0.7],
		[0, 1, 0]
	)

	const textBodyVariants = {
		initial: {
			y: -100,
			transition: {
				delay: 0.5,
			},
		},
		visible: {
			y: 0,
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.5,
			},
		},
	}

	const textBodyChildVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	useEffect(() => {
		if (isInView) {
			textBodyControls.start('visible')
		} else {
			textBodyControls.start('initial')
		}
	}, [isInView])

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
			<h1 id='workTitle' className='text-8xl pt-8'>
				Scenes from the
				<span className='ml-8 bg-sunrise text-transparent bg-clip-text'>
					lab
				</span>
			</h1>
			<section
				id='projectsSection'
				className='flex justify-evenly w-full h-[75%]'
			>
				<motion.div
					ref={textBodyRef}
					id='projectsSectionComments'
					className='max-w-[25%] flex flex-col justify-between items-center p-16'
					animate={textBodyControls}
					initial='initial'
					variants={textBodyVariants}
				>
					<motion.p
						className='text-md'
						variants={textBodyChildVariants}
					>
						Here you can find links to some of my projects and the
						code behind them.
					</motion.p>
					<motion.hr
						className='h-[2px] w-1/2 bg-black bg-opacity-25 rounded-full'
						variants={textBodyChildVariants}
					/>
					<motion.p
						className='text-md'
						variants={textBodyChildVariants}
					>
						A stack summary is provided for each project to help you
						narrow your focus.
					</motion.p>
				</motion.div>
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
						className='gridSection relative overflow-hidden w-full h-full rounded-[3rem] border-8 border-transparent col-start-1 col-span-2 row-start-2 row-span-5 shadow-thicc'
						style={{
							background: topLeftHovered && 'black',
							border: topLeftHovered && '8px solid #FF5B23',
						}}
						onMouseEnter={() => {
							setTopLeftHovered(true)
						}}
						onMouseLeave={() => {
							setTopLeftHovered(false)
						}}
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<Image
								src={socialScreenshot}
								alt='a Social Media app for pet owners'
								layout='fill'
								className='object-cover object-center'
								style={{ opacity: topLeftHovered && '10%' }}
							/>
							<p className='projectTitle text-4xl'>PetSocial</p>
							<p className='text-lg'>
								Media sharing for pet owners and pet lovers
							</p>
							<div className='projectDetails flex justify-evenly w-full'>
								<a
									className='text-sm'
									href='https://github.com/julianlk522/pet-social-media'
								>
									Github
								</a>

								<p className='text-sm'>Live demo</p>
							</div>
						</div>
					</div>
					<div
						className='gridSection relative w-full h-full row-start-2 row-span-5 overflow-hidden rounded-[3rem] border-8 border-transparent shadow-thicc'
						style={{
							background: topRightHovered && 'black',
							border: topRightHovered && '8px solid #FFACC6',
						}}
						onMouseEnter={() => {
							setTopRightHovered(true)
						}}
						onMouseLeave={() => {
							setTopRightHovered(false)
						}}
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<Image
								src={typingScreenshot}
								alt='a React-based typing game'
								className='object-cover object-bottom hover:opacity-20'
								layout='fill'
								style={{ opacity: topRightHovered && '20%' }}
							/>
							<p className='projectTitle text-2xl'>
								Timed Typing Game
							</p>
							<div className='projectDetails flex justify-evenly w-full'>
								<a href='https://github.com/julianlk522/click-game-react-port'>
									Github
								</a>
								<p>Live</p>
							</div>
						</div>
					</div>
					<div
						className='gridSection relative w-full h-full row-start-7 row-span-5 overflow-hidden rounded-[3rem] border-8 border-transparent border-opacity-50 shadow-thicc'
						style={{
							background: bottomLeftHovered && 'black',
							border: bottomLeftHovered && '8px solid #00D8FF',
						}}
						onMouseEnter={() => {
							setBottomLeftHovered(true)
						}}
						onMouseLeave={() => {
							setBottomLeftHovered(false)
						}}
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<Image
								src={dancingScreenshot}
								alt='a simple game to test your reactions and accuracy usig the mouse'
								className='object-cover object-left-bottom'
								layout='fill'
								style={{ opacity: bottomLeftHovered && '20%' }}
							/>
							<p className='projectTitle text-2xl'>
								Dancing Button
							</p>
							<div className='projectDetails flex justify-evenly w-full'>
								<a href='https://github.com/julianlk522/dancing-button'>
									Github
								</a>
								<p>Live</p>
							</div>
						</div>
					</div>
					<div
						className='gridSection relative overflow-hidden w-full h-full rounded-[3rem] border-8 border-transparent col-start-2 col-span-2 row-start-7 row-span-5 shadow-thicc'
						style={{
							background: bottomRightHovered && 'black',
							border: bottomRightHovered && '8px solid #FF5B23',
						}}
						onMouseEnter={() => {
							setBottomRightHovered(true)
						}}
						onMouseLeave={() => {
							setBottomRightHovered(false)
						}}
					>
						<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
							<Image
								src={chatScreenshot}
								alt='a chat app for messaging your friends'
								className='object-cover object-left-bottom'
								layout='fill'
								style={{ opacity: bottomRightHovered && '10%' }}
							/>
							<p className='projectTitle text-4xl'>
								Chat Station
							</p>
							<p className='text-lg'>
								Quickly and conveniently message your friends
							</p>
							<div className='projectDetails flex justify-evenly w-full'>
								<a
									href='https://github.com/julianlk522/chat-app'
									className='text-sm'
								>
									Github
								</a>
								<p className='text-sm'>Live demo</p>
							</div>
						</div>
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
