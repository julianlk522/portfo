import React, { useRef } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Image from 'next/image'
import { motion } from 'framer-motion'
import visual from '../../public/visual.svg'
import route from '../../public/route.svg'
import react from '../../public/react.svg'
import scrollUp from '../../public/scrollUp.webp'

function Experience() {
	const sectionRef = useRef(null)
	const windowDimensions = useWindowDimensions(sectionRef)

	const experienceVariants = {
		initial: {},
		visible: {
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.2,
			},
		},
	}

	const experienceChildVariants = {
		initial: {
			y: 5,
			x: 25,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.5,
			},
		},
	}

	return (
		<motion.div
			ref={sectionRef}
			id='experience'
			className='relative flex h-[300%] w-full flex-col items-center justify-evenly space-y-16 dark:text-white xs:h-[200%] lg:order-2 lg:ml-8 lg:h-full lg:max-h-[80%] lg:space-y-4'
			style={{ maxWidth: 'max(50vw, 600px)' }}
			variants={experienceVariants}
			initial='initial'
			whileInView='visible'
			viewport={{
				amount:
					windowDimensions && windowDimensions.clientWidth >= 768
						? 'all'
						: 'some',
				once: true,
			}}
		>
			<motion.div
				className='flex flex-col items-center justify-between sm:flex-row'
				variants={experienceChildVariants}
			>
				<motion.div
					className='mx-8 mb-8 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
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
						alt='visual design skills'
						src={visual}
						width={64}
						height={64}
						layout='fixed'
						className='object-contain object-center'
					/>
				</motion.div>
				<div className='flex w-full flex-col items-center justify-between'>
					<h3 className='mb-2 text-lg xl:mb-4 xl:text-2xl'>
						UI/UX and Layout Design
					</h3>
					<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
						Bringing WCAG best practices to your project, a
						meticulous attention for detail, and a boundless thirst
						for inventive ways to express your content.
					</p>
				</div>
			</motion.div>
			<motion.div
				className='flex flex-col items-center justify-between sm:flex-row'
				variants={experienceChildVariants}
			>
				<motion.div
					className='mx-8 mb-8 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
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
						src={route}
						width={64}
						height={64}
						layout='fixed'
						className='object-contain object-center'
					/>
				</motion.div>
				<div className='flex w-full flex-col items-center justify-center'>
					<h3 className='mb-2 text-lg xl:mb-4 xl:text-2xl'>
						Backend Versatility
					</h3>
					<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
						Defending your app from errors or misuse while also
						maximizing performance. Designing your APIs for
						ease-of-use, though never at the expense of robustness.
					</p>
				</div>
			</motion.div>
			<motion.div
				className='flex flex-col items-center justify-between sm:flex-row'
				variants={experienceChildVariants}
			>
				<motion.div
					className='mx-8 mb-8 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border-2 border-[rgba(255,255,255,0.5)] bg-slate-300 bg-opacity-20 p-2 drop-shadow-mediumDark dark:border-[rgba(255,255,255,0.1)] dark:bg-inherit dark:shadow-thick sm:mb-0'
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
						src={react}
						width={64}
						height={64}
						layout='fixed'
						className='object-contain object-center'
					/>
				</motion.div>
				<div className='flex flex-col items-center justify-center'>
					<h3 className='mb-2 text-lg xl:mb-4 xl:text-2xl'>
						State-of-the-Art Frameworks and Packages
					</h3>
					<p className='text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
						Harnessing expertise in ReactJS, TypeScript/ES6+
						Javascript, NodeJS, testing in Cypress and React Testing
						Library, UI libraries such as MaterialUI and DaisyUI and
						much more.
					</p>
				</div>
			</motion.div>
			<motion.button
				id='scrollUpPromptLg'
				className='ml-16 hidden items-center justify-between pt-4 lg:flex'
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
				{/* Found at https://uxwing.com/line-angle-up-icon/ and used with permission */}
				<Image
					src={scrollUp}
					alt='button to scroll to the top of the page'
					width={19}
					height={10}
					className='opacity-20 dark:invert'
				/>
			</motion.button>
		</motion.div>
	)
}

export default Experience
