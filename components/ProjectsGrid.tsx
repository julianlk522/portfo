import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import socialScreenshot from '../public/socialScreenshot.png'
import dancingScreenshot from '../public/dancingScreenshot.png'
import typingScreenshot from '../public/typingScreenshot.png'
import chatScreenshot from '../public/chatScreenshot.png'
import scrollUp from '../public/scrollUp.png'

function ProjectsGrid({ darkMode }) {
	const [gridTopLeftHovered, setGridTopLeftHovered] = useState(false)
	const [gridTopRightHovered, setGridTopRightHovered] = useState(false)
	const [gridBottomLeftHovered, setGridBottomLeftHovered] = useState(false)
	const [gridBottomRightHovered, setGridBottomRightHovered] = useState(false)

	return (
		<div
			id='gridContentContainer'
			className='h-[200%] xs:h-[300%] md:h-full w-full flex flex-col justify-between items-center overflow-x-hidden lg:overflow-y-scroll lg:overscroll-contain'
		>
			<motion.p className='md:hidden mb-4 opacity-40 text-xs my-4 text-white'>
				Scroll down to see more
			</motion.p>
			<div
				id='projectsGrid'
				className={`${
					darkMode && 'text-white'
				} h-full md:h-full w-full max-w-3xl lg:ml-4 mb-8 md:mb-0 relative grid grid-rows-4 md:grid-rows-2 grid-cols-3 gap-8 items-center`}
			>
				<div
					className={`${
						darkMode ? '' : ''
					} gridMember relative overflow-hidden h-full w-full rounded-[2rem] col-span-3 md:col-span-2 shadow-xl`}
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
					<div className='p-4 flex flex-col justify-evenly items-center w-full text-white'>
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
						<div className='projectLinks flex justify-evenly w-full'>
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
					} gridMember relative overflow-hidden h-full w-full rounded-[2rem] row-start-2 md:row-start-1 col-span-3 md:col-span-1 md:col-start-3 shadow-xl`}
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
					<div className='p-4 flex flex-col justify-evenly items-center w-full text-white'>
						<Image
							src={typingScreenshot}
							alt='a React-based typing game'
							className='object-cover object-bottom hover:opacity-20'
							layout='fill'
							style={{
								opacity: gridTopRightHovered && '20%',
							}}
						/>
						<p className='projectTitle text-2xl'>
							Timed Typing Game
						</p>
						<div className='projectLinks flex justify-evenly w-full'>
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
					} gridMember relative overflow-hidden w-full h-full rounded-[2rem] col-span-3 md:col-span-1 row-start-3 md:row-start-2 shadow-xl`}
					style={{
						background: gridBottomLeftHovered && 'black',
					}}
					onMouseEnter={() => {
						setGridBottomLeftHovered(true)
					}}
					onMouseLeave={() => {
						setGridBottomLeftHovered(false)
					}}
				>
					<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
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
						<div className='projectLinks flex justify-evenly w-full'>
							<a href='https://github.com/julianlk522/dancing-button'>
								Github
							</a>
							<p>Live</p>
						</div>
					</div>
				</div>
				<div
					className={`${
						darkMode ? '' : ''
					} gridMember relative overflow-hidden w-full h-full rounded-[2rem] col-span-3 md:col-span-2 row-start-4 md:row-start-2 shadow-xl`}
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
					<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
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
						<div className='projectLinks flex justify-evenly w-full'>
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
				className={`md:hidden w-full lg:text-end text-xs mt-16 bg-workStackTextSm lg:bg-workStackTextLg ${
					darkMode ? 'text-white' : ''
				}`}
			>
				This page uses Next.JS, Tailwind CSS and Framer Motion
			</motion.p>
			<motion.button
				id='scrollDownButtonSmall'
				className='md:hidden mb-[15rem]'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				animate={{
					y: [0, -16],
					opacity: 1,
				}}
				transition={{
					y: {
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 1,
					},
				}}
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
					} scale-[.1] opacity-5 rotate-180`}
				/>
			</motion.button>
		</div>
	)
}

export default ProjectsGrid
