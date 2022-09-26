import { useState, useEffect, useRef } from 'react'
import pill from '../public/pill.svg'
import scrollUp from '../public/scrollUp.png'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useAnimationControls,
} from 'framer-motion'
import ProjectsGrid from './ProjectsGrid'

export default function Work({ darkMode }) {
	const [scrollDownVisible, setScrollDownVisible] = useState(false)

	const { scrollYProgress } = useScroll()
	const textBodyControls = useAnimationControls()
	const textBodyRef = useRef(null)
	const textIsInView = useInView(textBodyRef, { amount: 'all' })
	const allOpacityTransform = useTransform(
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
				delayChildren: 0.5,
				staggerChildren: 1,
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
		if (textIsInView) {
			textBodyControls.start('visible')
		} else {
			textBodyControls.start('initial')
			setScrollDownVisible(false)
		}
	}, [textIsInView])

	useEffect(() => {
		if (darkMode) {
			document.getElementById('workContainer').style.opacity = '1'
		} else {
			document.getElementById('projectsContentBody').style.opacity = '1'
			document.getElementById('workTitle').style.opacity = '1'
		}
	}, [darkMode])

	return (
		<motion.section
			id='workContainer'
			className={`${
				darkMode && 'bg-slate-800'
			} h-full flex flex-col items-center text-center relative overflow-x-hidden`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 8vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
			<motion.figure
				id='pillWrapper'
				className='hidden lg:block h-full w-1/2 absolute left-[-7vw] top-0 opacity-20'
			>
				<Image
					src={pill}
					alt='laboratory scenery'
					layout='fill'
					className='object-contain'
				/>
			</motion.figure>
			<motion.h2
				id='workTitle'
				className={`${darkMode && 'text-white'} mb-8`}
				style={{
					fontSize: 'clamp(2rem, 8vw, 8vh)',
				}}
			>
				Scenes from the
				<span className='ml-4 bg-sunrise text-transparent bg-clip-text'>
					lab
				</span>
			</motion.h2>
			<motion.div
				id='projectsContentBody'
				className='md:max-h-[60vh] flex flex-col justify-between items-center w-full h-full'
			>
				<div className='h-full flex justify-between'>
					<motion.div
						ref={textBodyRef}
						id='projectsSideTextLg'
						className={`${
							darkMode && 'text-white'
						} hidden mx-8 max-w-[25%] lg:flex flex-col justify-center items-center`}
						animate={textBodyControls}
						initial='initial'
						variants={textBodyVariants}
						onAnimationComplete={() => {
							if (scrollYProgress.get() === 0.5) {
								setScrollDownVisible(true)
							}
						}}
					>
						<motion.p
							className='text-md my-8'
							variants={textBodyChildVariants}
						>
							Hover over a project to learn more
						</motion.p>
						<motion.button
							id='scrollDownButton'
							variants={textBodyChildVariants}
							animate={
								scrollDownVisible
									? {
											y: [0, 16],
											opacity: 1,
									  }
									: { y: 0, opacity: 0, scale: 1 }
							}
							transition={
								scrollDownVisible
									? {
											repeat: Infinity,
											repeatType: 'reverse',
											duration: 2,
									  }
									: {}
							}
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
								} scale-[.1] opacity-5 rotate-180`}
							/>
						</motion.button>
					</motion.div>
					<ProjectsGrid darkMode={darkMode} />
				</div>
				<motion.p
					className={`hidden lg:block w-full lg:text-end text-xs mt-8 pr-8 bg-workStackTextSm lg:bg-workStackTextLg ${
						darkMode ? 'text-white' : ''
					}`}
					variants={textBodyChildVariants}
				>
					This page was made using Next.JS, Tailwind CSS and Framer
					Motion
				</motion.p>
			</motion.div>
		</motion.section>
	)
}
