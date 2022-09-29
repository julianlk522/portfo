import { useEffect, useRef } from 'react'
import pill from '../public/pill.svg'
import scrollUp from '../public/scrollUp.png'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useAnimationControls,
	useInView,
} from 'framer-motion'
import ProjectsGrid from './ProjectsGrid'

export default function Work({ darkMode }) {
	const workContainerRef = useRef(null)
	const textBodyRef = useRef(null)
	const textRefInView = useInView(textBodyRef, { amount: 'some' })

	const scrollDownControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const allOpacityTransform = useTransform(
		scrollYProgress,
		[0.53, 0.66, 0.86],
		[0, 1, 0]
	)

	useEffect(() => {
		if (!textRefInView) {
			scrollDownControls.stop()
			scrollDownControls.set('initial')
		}
	}, [textRefInView])

	const textBodyVariants = {
		initial: {
			opacity: 0,
			transition: {
				delay: 1,
				duration: 2,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.5,
			},
		},
	}

	const textBodyChildVariants = {
		initial: {
			y: 0,
			x: '-100%',
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 0.5,
		},
		bouncing: {
			y: [null, 16],
			x: 0,
			opacity: 0.5,
			transition: {
				y: {
					repeat: Infinity,
					repeatType: 'reverse',
					duration: 2,
					delay: 0.5,
				},
			},
		},
	}

	useEffect(() => {
		if (darkMode) {
			workContainerRef.current.style.opacity = '1'
		}
	}, [darkMode])

	return (
		<motion.section
			id='workContainer'
			ref={workContainerRef}
			className={`${
				darkMode && 'bg-slate-800'
			} h-full flex flex-col items-center text-center relative overflow-x-hidden md:overflow-y-hidden`}
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 8vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
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
				className='flex flex-col justify-between items-center w-full h-full'
			>
				<div className='w-full h-full flex justify-between'>
					<motion.div
						ref={textBodyRef}
						id='projectsSideTextLg'
						className={`${
							darkMode && 'text-white'
						} relative hidden mx-8 max-w-[25%] lg:flex flex-col justify-center items-center`}
						initial='initial'
						whileInView='visible'
						viewport={{ amount: 'all' }}
						variants={textBodyVariants}
						onAnimationComplete={() => {
							if (textRefInView) {
								scrollDownControls.start('bouncing')
							}
						}}
					>
						<motion.figure
							id='pillWrapper'
							className='hidden lg:block h-[150%] w-[150%] absolute left-[-25%] top-[-33%] opacity-20'
						>
							<Image
								src={pill}
								alt='laboratory scenery'
								layout='fill'
								className='object-contain'
							/>
						</motion.figure>
						<motion.p
							className='text-md my-8'
							variants={textBodyChildVariants}
						>
							Hover over a project to learn more
						</motion.p>
						<motion.button
							id='scrollDownButton'
							variants={textBodyChildVariants}
							animate={scrollDownControls}
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
								} scale-[.1] opacity-10 rotate-180`}
							/>
						</motion.button>
					</motion.div>
					<ProjectsGrid darkMode={darkMode} />
				</div>
				<p
					className={`hidden lg:block w-full lg:text-end text-xs mt-8 pr-8 bg-workStackTextSm lg:bg-workStackTextLg ${
						darkMode ? 'text-white' : ''
					}`}
				>
					This page was made using Next.JS, Tailwind CSS and Framer
					Motion
				</p>
			</motion.div>
		</motion.section>
	)
}
