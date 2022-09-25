import React, { useState } from 'react'
import Image from 'next/image'
import socialScreenshot from '../public/socialScreenshot.png'
import dancingScreenshot from '../public/dancingScreenshot.png'
import typingScreenshot from '../public/typingScreenshot.png'
import chatScreenshot from '../public/chatScreenshot.png'

function ProjectsGrid({ darkMode }) {
	const [gridTopLeftHovered, setGridTopLeftHovered] = useState(false)
	const [gridTopRightHovered, setGridTopRightHovered] = useState(false)
	const [gridBottomLeftHovered, setGridBottomLeftHovered] = useState(false)
	const [gridBottomRightHovered, setGridBottomRightHovered] = useState(false)

	return (
		<div
			id='projectsGrid'
			className={`${
				darkMode && 'text-white'
			} max-w-3xl lg:my-0 mx-4 relative grid grid-rows-12 grid-cols-4 sm:grid-cols-3 gap-8 items-center`}
		>
			<div
				id='projectsGridShadow'
				className={`${
					darkMode ? 'bg-[#00d8ff] opacity-5' : 'bg-slate-100'
				} absolute top-[-1rem] left-[-2rem] w-[calc(100%+4rem)] h-[calc(100%+2rem)] rounded-[3rem] blur-sm`}
			></div>
			<p className='mb-[-1rem] col-span-2 text-xs z-[1]'>
				React, Typescript, Redux, NodeJS, Express, MongoDB, Material UI
			</p>
			<p className='mb-[-1rem] col-start-3 col-span-2 sm:col-span-1 text-xs z-[1]'>
				React, Typescript, Context API, Cypress, TailwindCSS, DaisyUI
			</p>
			<div
				className={`${
					darkMode
						? 'border-slate-100 border-opacity-10'
						: 'border-transparent'
				} gridMember relative overflow-hidden w-full h-full rounded-[3rem] border-4 sm:border-8 col-start-1 col-span-2 row-start-2 row-span-5 shadow-thick`}
				style={{
					background: gridTopLeftHovered && 'black',
					border: gridTopLeftHovered && '8px solid #FF5B23',
				}}
				onMouseEnter={() => {
					setGridTopLeftHovered(true)
				}}
				onMouseLeave={() => {
					setGridTopLeftHovered(false)
				}}
			>
				<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
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
					darkMode
						? 'border-slate-100 border-opacity-10'
						: 'border-transparent'
				} gridMember relative overflow-hidden w-full h-full rounded-[3rem] border-4 sm:border-8 row-start-2 col-span-2 sm:col-span-1 row-span-5 shadow-thick`}
				style={{
					background: gridTopRightHovered && 'black',
					border: gridTopRightHovered && '8px solid #FFACC6',
				}}
				onMouseEnter={() => {
					setGridTopRightHovered(true)
				}}
				onMouseLeave={() => {
					setGridTopRightHovered(false)
				}}
			>
				<div className='p-4 flex flex-col justify-evenly items-center w-full h-full text-white'>
					<Image
						src={typingScreenshot}
						alt='a React-based typing game'
						className='object-cover object-bottom hover:opacity-20'
						layout='fill'
						style={{
							opacity: gridTopRightHovered && '20%',
						}}
					/>
					<p className='projectTitle text-2xl'>Timed Typing Game</p>
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
					darkMode
						? 'border-slate-100 border-opacity-10'
						: 'border-transparent'
				} gridMember relative overflow-hidden w-full h-full rounded-[3rem] border-4 sm:border-8 row-start-7 row-span-5 col-span-2 sm:col-span-1 shadow-thick`}
				style={{
					background: gridBottomLeftHovered && 'black',
					border: gridBottomLeftHovered && '8px solid #00D8FF',
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
					darkMode
						? 'border-slate-100 border-opacity-10'
						: 'border-transparent'
				} gridMember relative overflow-hidden w-full h-full rounded-[3rem] border-4 sm:border-8 col-span-2 row-start-7 row-span-5 shadow-thick`}
				style={{
					background: gridBottomRightHovered && 'black',
					border: gridBottomRightHovered && '8px solid #FF5B23',
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
			<p className='mt-[-1rem] col-start-1 col-span-2 sm:col-span-1 row-start-12 row-span-1 text-xs z-[1]'>
				Javascript, HTML, CSS
			</p>
			<p className='mt-[-1rem] col-start-3 sm:col-start-2 col-span-2 row-start-12 row-span-1 text-xs z-[1]'>
				React, Typescript, Context API, TailwindCSS, MySQL, NodeJS,
				Express
			</p>
		</div>
	)
}

export default ProjectsGrid
