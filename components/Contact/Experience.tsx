import React, { useRef } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Image from 'next/image'
import { motion } from 'framer-motion'
import uiux from '../../public/uiux.svg'
import backend from '../../public/backend.svg'
import modernFrameworks from '../../public/modernFrameworks.svg'
import scrollUp from '../../public/scrollUp.webp'

function Experience() {
	const sectionRef = useRef(null)
	const { width } = useWindowDimensions()

	const experienceVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.1,
			},
		},
	}

	const experienceChildVariants = {
		initial: {
			y: 5,
			x: -10,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.25,
			},
		},
	}

	return (
		<motion.div
			ref={sectionRef}
			id='experience'
			className='relative flex h-[300%] w-full flex-col items-center justify-evenly space-y-16 dark:text-white xs:h-[200%] lg:mr-8 lg:h-full lg:space-y-4'
			style={{ maxWidth: 'max(50vw, 600px)' }}
			variants={experienceVariants}
			initial='initial'
			whileInView='visible'
			viewport={{
				amount: width && width >= 1024 ? 'all' : 'some',
				once: true,
			}}
		>
			<motion.div
				className='flex flex-col items-center justify-between sm:flex-row'
				variants={experienceChildVariants}
			>
				<motion.div
					className='mx-8 mb-16 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
					whileHover={{
						y: [null, -8, 8],
						transition: {
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
							bounce: 1,
						},
					}}
				>
					<Image
						alt='Visual design skills'
						src={uiux}
						width={64}
						height={64}
						layout='fixed'
						className='object-contain object-center'
					/>
				</motion.div>
				<div className='flex w-full flex-col items-start justify-between'>
					<h3 className='mb-2 text-lg xl:mb-4 xl:text-2xl'>
						UI/UX and Layout Design
					</h3>
					<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
						Bringing WCAG best practices to your project, superior
						search-engine optimization (SEO), a meticulous attention
						to detail, and a burning desire to express your content
						in <i>style</i>.
					</p>
				</div>
			</motion.div>
			<motion.div
				className='flex flex-col items-center justify-between sm:flex-row'
				variants={experienceChildVariants}
			>
				<motion.div
					className='mx-8 mb-16 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
					whileHover={{
						y: [null, -8, 8],
						transition: {
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
							bounce: 1,
						},
					}}
				>
					<Image
						alt='backend architectural skills'
						src={backend}
						width={64}
						height={64}
						layout='fixed'
						className='scale-75 object-contain object-center'
					/>
				</motion.div>
				<div className='flex w-full flex-col items-start justify-center'>
					<h3 className='mb-2 text-lg xl:mb-4 xl:text-2xl'>
						Backend Versatility
					</h3>
					<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
						Thorough error handling and version control techniques,
						comfortability working with relational and
						non-relational database regimes, and experience building
						high-powered RESTful APIs from scratch.
					</p>
				</div>
			</motion.div>
			<motion.div
				className='flex flex-col items-center justify-between sm:flex-row'
				variants={experienceChildVariants}
			>
				<motion.div
					className='mx-8 mb-16 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
					whileHover={{
						y: [null, -8, 8],
						transition: {
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
							bounce: 1,
						},
					}}
				>
					<Image
						alt='proficiency in modern frameworks like React.js'
						src={modernFrameworks}
						width={64}
						height={64}
						layout='fixed'
						className='object-contain object-center'
					/>
				</motion.div>
				<div className='flex flex-col items-start justify-center'>
					<h3 className='mb-2 text-lg xl:mb-4 xl:text-2xl'>
						Modern Frameworks and Packages
					</h3>
					<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
						Harnessing expertise in ReactJS, TypeScript/ES6+
						Javascript, NodeJS, Docker, Cypress and React Testing
						Library, UI libraries such as MaterialUI and TailwindCSS
						and much more.
					</p>
				</div>
			</motion.div>
			<motion.button
				id='scrollUpPromptLg'
				className='relative ml-32 hidden w-full max-w-[12rem] items-center justify-between self-start rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg lg:tall:flex'
				whileHover={{ scale: 1.25 }}
				whileTap={{ scale: 1.1 }}
				variants={experienceChildVariants}
				onClick={() =>
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
				}
			>
				<div className='relative ml-4 h-full w-8'>
					<div
						id='primaryArrowContainer'
						className='absolute top-[-50%] h-full w-full'
					>
						<Image
							src={scrollUp}
							alt='scroll to the top'
							width={19}
							height={10}
							className='opacity-20 dark:invert'
						/>
					</div>
					<div
						id='secondaryArrowContainer'
						className='absolute top-0 h-full w-full'
					>
						<Image
							src={scrollUp}
							alt='secondary image for scroll button'
							width={19}
							height={10}
							className='opacity-10 dark:invert'
						/>
					</div>
				</div>
				<p className='ml-4 w-full text-xs opacity-60 dark:text-white lg:text-[0.6rem] 2xl:text-xs'>
					Navigate to top
				</p>
			</motion.button>
		</motion.div>
	)
}

export default Experience
