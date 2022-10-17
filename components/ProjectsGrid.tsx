import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import scrollUp from '../public/scrollUp.webp'
import ProjectGridMember from './ProjectGridMember'

const scrollDownVariants = {
	initial: {
		y: 0,
	},
	bouncing: {
		y: [null, 16],
		x: 0,
		transition: {
			y: {
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 2,
			},
		},
	},
}

function ProjectsGrid() {
	return (
		<div
			id='gridContentContainer'
			className='flex h-[300%] w-full flex-col items-center justify-between self-start overflow-y-hidden overflow-x-visible md:h-full lg:max-w-4xl lg:overflow-visible'
		>
			<p className='my-16 text-xs opacity-40 dark:text-white md:hidden'>
				Scroll down to see more
			</p>
			<div
				id='projectsGrid'
				className='relative mx-auto mb-8 grid h-full w-full max-w-[90%] grid-cols-3 grid-rows-4 items-center gap-8 self-end md:mb-0 md:h-full md:grid-rows-2 xl:max-w-3xl'
			>
				<ProjectGridMember
					tailwindStyles='md:col-span-2'
					screenshotId={0}
					title='PetSocial'
					description='Media sharing for pet owners and pet lovers'
					altImgText='a Social Media app for pet owners'
					stackItems={[
						'React.js',
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
					screenshotId={1}
					title='Hyper Typer 2000'
					altImgText='a React-based typing game to test your speed and accuracy'
					stackItems={[
						'D3.js',
						'React.js',
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
						'React.js',
						'TypeScript',
						'MySQL',
						'Express.js',
						'Context API',
						'TailwindCSS',
						'Google OAuth',
					]}
					ghLink='https://github.com/julianlk522/chat-app'
					liveLink='https://chat-station-project.netlify.app/'
				/>
			</div>
			<motion.p
				id='portfoStackDescriptionSm'
				className='mt-16 w-full bg-portfoStackTextSm text-xs dark:text-white md:mt-8 lg:hidden'
			>
				This page uses Next.js, Tailwind CSS and Framer Motion
			</motion.p>
			<motion.button
				id='scrollDownPromptSm'
				className='my-16 flex flex-col items-center justify-between dark:text-white lg:hidden'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() =>
					document
						.getElementById('contactContainer')
						.scrollIntoView({ behavior: 'smooth' })
				}
			>
				<motion.div
					variants={scrollDownVariants}
					whileInView='bouncing'
					viewport={{ amount: 'all' }}
				>
					{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
					<Image
						src={scrollUp}
						width={38}
						height={20}
						alt='button to scroll down to the Contact section'
						className='rotate-180 opacity-20 dark:invert'
					/>
				</motion.div>
				<p className='mt-16 text-xs opacity-50'>Continue</p>
			</motion.button>
		</div>
	)
}

export default ProjectsGrid
