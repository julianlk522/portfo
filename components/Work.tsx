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
	}, [textRefInView, scrollDownControls])

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
			} relative flex h-full flex-col items-center overflow-x-hidden text-center md:overflow-y-hidden`}
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
				<span className='ml-4 bg-labText bg-clip-text font-semibold text-transparent'>
					lab
				</span>
			</motion.h2>
			<motion.div
				id='projectsContentBody'
				className='flex h-full w-full flex-col items-center justify-between'
			>
				<div className='flex h-full w-full justify-between'>
					<motion.div
						ref={textBodyRef}
						id='projectsSideTextLg'
						className={`${
							darkMode && 'text-white'
						} relative mx-8 hidden max-w-[25%] flex-col items-center justify-center lg:flex`}
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
							className='absolute left-[-25%] top-[-33%] hidden h-[150%] w-[150%] opacity-20 lg:block'
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
							id='workScrollDownButton'
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
								} rotate-180 scale-[.1] opacity-10`}
							/>
						</motion.button>
					</motion.div>
					<ProjectsGrid darkMode={darkMode} />
				</div>
				<p
					id='portfoStackDescriptionLg'
					className={`mt-8 hidden w-full bg-portfoStackTextSm pr-8 text-xs lg:block lg:bg-portfoStackTextLg lg:text-end ${
						darkMode ? 'text-white' : ''
					}`}
				>
					This page was made using Next.js, Tailwind CSS and Framer
					Motion
				</p>
			</motion.div>
		</motion.section>
	)
}
