import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import scrollUp from '../public/scrollUp.webp'
import ProjectGridMember from './ProjectGridMember'

function ProjectsGrid({ darkMode }) {
	return (
		<div
			id='gridContentContainer'
			className='flex h-[200%] w-full flex-col items-center justify-between xs:h-[300%] md:h-full'
		>
			<motion.p
				className={`my-4 mb-4 text-xs opacity-40 md:hidden ${
					darkMode ? 'text-white' : ''
				}`}
			>
				Scroll down to see more
			</motion.p>
			<div
				id='projectsGrid'
				className={`${
					darkMode && 'text-white'
				} relative mb-8 grid h-full w-full max-w-3xl grid-cols-3 grid-rows-4 items-center gap-8 md:mb-0 md:h-full md:grid-rows-2 lg:max-w-5xl`}
			>
				<ProjectGridMember
					tailwindStyles='md:col-span-2'
					screenshotId={0}
					title='PetSocial'
					description='Media sharing for pet owners and pet lovers'
					altImgText='a Social Media app for pet owners'
					stackItems={[
						'React',
						'TypeScript',
						'Redux Toolkit',
						'Node.js',
						'Express.js',
						'MongoDB',
						'MaterialUI',
						'Google OAuth',
					]}
					ghLink='https://github.com/julianlk522/pet-social-media'
					liveLink='https://pet-social-project.netlify.app'
				/>

				<ProjectGridMember
					tailwindStyles='row-start-2 md:col-span-1 md:col-start-3 md:row-start-1'
					objectPosition='object-bottom'
					screenshotId={1}
					title='Hyper Typer 2000'
					altImgText='a React-based typing game to test your speed and accuracy'
					stackItems={[
						'React',
						'TypeScript',
						'Context API',
						'TailwindCSS',
						'DaisyUI',
						'Cypress Testing Library',
					]}
					ghLink='https://github.com/julianlk522/hyper-typer'
					liveLink='https://hyper-typer-2000.netlify.app/start'
				/>

				<ProjectGridMember
					tailwindStyles='row-start-3 md:col-span-1 md:row-start-2'
					screenshotId={2}
					title='Dancing Button of Doom'
					altImgText='a click-based Javascript and CSS game with a surprising twist'
					stackItems={['Javascript', 'CSS', 'HTML']}
					ghLink='https://github.com/julianlk522/dancing-button'
					liveLink='https://dancing-button-of-doom.netlify.app/'
				/>

				<ProjectGridMember
					tailwindStyles='row-start-4 md:col-span-2 md:row-start-2'
					objectPosition='object-left-bottom'
					screenshotId={3}
					title='Chat Station'
					description='Quickly and conveniently message your friends'
					altImgText='a chat app for messaging your friends'
					stackItems={[
						'React',
						'TypeScript',
						'MySQL',
						'Express',
						'Context API',
						'TailwindCSS',
						'Google OAuth',
					]}
					ghLink='https://github.com/julianlk522/chat-app'
				/>
			</div>
			<motion.p
				id='portfoStackDescriptionSm'
				className={`mt-16 w-full bg-portfoStackTextSm text-xs md:mt-8 lg:hidden lg:bg-portfoStackTextLg lg:text-end ${
					darkMode ? 'text-white' : ''
				}`}
			>
				This page uses Next.js, Tailwind CSS and Framer Motion
			</motion.p>
			<motion.button
				id='scrollUpPromptSm'
				className={`mb-2 flex h-[5vh] flex-col items-center justify-between lg:hidden ${
					darkMode && 'text-white'
				}`}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() =>
					document
						.getElementById('contactContainer')
						.scrollIntoView({ behavior: 'smooth' })
				}
			>
				<motion.div
					animate={{ y: [0, 16] }}
					transition={{ repeat: Infinity, repeatType: 'reverse' }}
				>
					{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
					<Image
						src={scrollUp}
						alt='button to scroll down to the Contact section'
						className={`rotate-180 scale-[.05] opacity-20 ${
							darkMode && 'invert'
						}`}
					/>
				</motion.div>
				<p className=' mt-[-2rem] pb-32 text-xs opacity-50'>Continue</p>
			</motion.button>
		</div>
	)
}

export default ProjectsGrid
