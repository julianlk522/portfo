import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import socialScreenshot from '../public/socialScreenshot.png'
import dancingScreenshot from '../public/dancingScreenshot.png'
import typingScreenshot from '../public/typingScreenshot.png'
import chatScreenshot from '../public/chatScreenshot.png'
import scrollUp from '../public/scrollUp.png'

const dancingButtonStackItems = ['HTML', 'CSS', 'Javascript']

function ProjectsGrid({ darkMode }) {
	const [dancingButtonStackItemCoef, setDancingButtonStackItemCoef] =
		useState(0)
	const [gridTopLeftHovered, setGridTopLeftHovered] = useState(false)
	const [gridTopRightHovered, setGridTopRightHovered] = useState(false)
	const [gridBottomLeftHovered, setGridBottomLeftHovered] = useState(false)
	const [gridBottomRightHovered, setGridBottomRightHovered] = useState(false)

	const dancingButtonStackTextControls = useAnimationControls()

	const stackTextVariants = {
		flicker: {
			opacity: [null, 1, 0],
			transition: {
				duration: 1,
				delay: 0.25,
			},
		},
		hidden: {
			opacity: 0,
		},
	}

	return (
		<div
			id='gridContentContainer'
			className='flex h-[200%] w-full flex-col items-center justify-between xs:h-[300%] md:h-full'
		>
			<motion.p className='my-4 mb-4 text-xs text-white opacity-40 md:hidden'>
				Scroll down to see more
			</motion.p>
			<div
				id='projectsGrid'
				className={`${
					darkMode && 'text-white'
				} relative mb-8 grid h-full w-full max-w-3xl grid-cols-3 grid-rows-4 items-center gap-8 md:mb-0 md:h-full md:grid-rows-2 lg:max-w-5xl`}
			>
				<div
					className={`${
						darkMode ? '' : ''
					} gridMember relative col-span-3 h-full w-full overflow-hidden rounded-[2rem] shadow-xl md:col-span-2`}
					style={{
						background: gridTopLeftHovered && 'black',
					}}
					onMouseEnter={() => {
						setGridTopLeftHovered(true)
					}}
					onMouseLeave={() => {
						setGridTopLeftHovered(false)
					}}
				>
					<div className='flex h-full w-full flex-col items-center justify-evenly p-4 text-white'>
						<Image
							src={socialScreenshot}
							alt='a Social Media app for pet owners'
							layout='fill'
							className='object-cover object-center'
							style={{ opacity: gridTopLeftHovered && '10%' }}
						/>
						<p className='projectTitle text-4xl'>PetSocial</p>
						<p className='text-lg'>
							Media sharing for pet owners and pet lovers
						</p>
						<motion.p></motion.p>
						<div className='projectLinks flex w-full justify-evenly'>
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
					className={`${
						darkMode ? '' : ''
					} gridMember relative col-span-3 row-start-2 h-full w-full overflow-hidden rounded-[2rem] shadow-xl md:col-span-1 md:col-start-3 md:row-start-1`}
					style={{
						background: gridTopRightHovered && 'black',
					}}
					onMouseEnter={() => {
						setGridTopRightHovered(true)
					}}
					onMouseLeave={() => {
						setGridTopRightHovered(false)
					}}
				>
					<div className='flex h-full w-full flex-col items-center justify-evenly p-4 text-white'>
						<Image
							src={typingScreenshot}
							alt='a React-based typing game'
							className='object-cover object-bottom'
							layout='fill'
							style={{
								opacity: gridTopRightHovered && '20%',
							}}
						/>
						<p className='projectTitle text-2xl'>
							Timed Typing Game
						</p>
						<div className='projectLinks flex w-full justify-evenly'>
							<a href='https://github.com/julianlk522/click-game-react-port'>
								Github
							</a>
							<p>Live</p>
						</div>
					</div>
				</div>
				<div
					className={`${
						darkMode ? '' : ''
					} gridMember relative col-span-3 row-start-3 h-full w-full overflow-hidden rounded-[2rem] shadow-xl md:col-span-1 md:row-start-2`}
					style={{
						background: gridBottomLeftHovered && 'black',
					}}
					onMouseEnter={() => {
						setGridBottomLeftHovered(true)
						dancingButtonStackTextControls.start('flicker')
					}}
					onMouseLeave={() => {
						setGridBottomLeftHovered(false)
						dancingButtonStackTextControls.set('hidden')
					}}
				>
					<div className='flex h-full w-full flex-col items-center justify-evenly p-4 text-white'>
						<Image
							src={dancingScreenshot}
							alt='a simple game to test your reactions and accuracy usig the mouse'
							className='object-cover object-left-bottom'
							layout='fill'
							style={{
								opacity: gridBottomLeftHovered && '20%',
							}}
						/>
						<p className='projectTitle text-2xl'>Dancing Button</p>
						<motion.p
							className='text-[#00d8ff]'
							animate={dancingButtonStackTextControls}
							variants={stackTextVariants}
							onAnimationComplete={() => {
								setDancingButtonStackItemCoef(
									(prev) => prev + 1
								)
								if (gridBottomLeftHovered) {
									dancingButtonStackTextControls.start(
										'flicker'
									)
								}
							}}
						>
							{
								dancingButtonStackItems[
									dancingButtonStackItemCoef %
										dancingButtonStackItems.length
								]
							}
						</motion.p>
						<div className='projectLinks flex w-full justify-evenly'>
							<a href='https://github.com/julianlk522/dancing-button'>
								Github
							</a>
							<a href='https://dancing-button-of-doom.netlify.app/'>
								Live
							</a>
						</div>
					</div>
				</div>
				<div
					className={`${
						darkMode ? '' : ''
					} gridMember relative col-span-3 row-start-4 h-full w-full overflow-hidden rounded-[2rem] shadow-xl md:col-span-2 md:row-start-2`}
					style={{
						background: gridBottomRightHovered && 'black',
					}}
					onMouseEnter={() => {
						setGridBottomRightHovered(true)
					}}
					onMouseLeave={() => {
						setGridBottomRightHovered(false)
					}}
				>
					<div className='flex h-full w-full flex-col items-center justify-evenly p-4 text-white'>
						<Image
							src={chatScreenshot}
							alt='a chat app for messaging your friends'
							className='object-cover object-left-bottom'
							layout='fill'
							style={{
								opacity: gridBottomRightHovered && '10%',
							}}
						/>
						<p className='projectTitle text-4xl'>Chat Station</p>
						<p className='text-lg'>
							Quickly and conveniently message your friends
						</p>
						<div className='projectLinks flex w-full justify-evenly'>
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
				{/* <p className='mt-[-1rem] col-start-1 col-span-2 sm:col-span-1 row-start-12 row-span-1 text-xs z-[1]'>
					Javascript, HTML, CSS
				</p> */}
				{/* <p className='mt-[-1rem] col-start-3 sm:col-start-2 col-span-2 row-start-12 row-span-1 text-xs z-[1]'>
					React, Typescript, Context API, TailwindCSS, MySQL, NodeJS,
					Express
				</p> */}
			</div>
			<motion.p
				className={`mt-16 w-full bg-workStackTextSm text-xs md:mt-8 lg:hidden lg:bg-workStackTextLg lg:text-end ${
					darkMode ? 'text-white' : ''
				}`}
			>
				This page uses Next.JS, Tailwind CSS and Framer Motion
			</motion.p>
			<div
				className='flex max-w-xs justify-center overflow-hidden md:mt-[-2rem]'
				id='scrollButtonContainer'
			>
				<motion.button
					id='scrollDownButton'
					className='mb-[15rem] md:mb-0 lg:hidden'
					animate={{
						y: [0, -16],
						opacity: 1,
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 1,
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() =>
						document
							.getElementById('contactContainer')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
					<Image
						src={scrollUp}
						alt='button to scroll to the next section'
						className={`${
							darkMode && 'invert'
						} rotate-180 scale-[.1] opacity-5`}
					/>
				</motion.button>
			</div>
		</div>
	)
}

export default ProjectsGrid
