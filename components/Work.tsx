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
				delayChildren: 0.25,
				staggerChildren: 0.5,
			},
		},
	}

	const textBodyChildVariants = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 0.5,
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
			} h-full flex flex-col justify-between items-center text-center relative overflow-x-hidden`}
			style={{
				padding: 'clamp(4rem, 8vw, 8vh) clamp(2rem, 6vw, 6vh)',
				opacity: !darkMode && allOpacityTransform,
			}}
		>
			<motion.figure
				id='pillWrapper'
				className='hidden lg:block h-[75%] w-1/2 absolute left-[-20%] top-[35%]'
			>
				<Image
					src={pill}
					alt='laboratory scenery'
					layout='fill'
					className={`${darkMode && 'opacity-50'} object-contain`}
				/>
			</motion.figure>
			<motion.h2
				id='workTitle'
				className={`${darkMode && 'text-white'} mb-8 lg:mb-16`}
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
				className='flex justify-evenly w-full h-[75%]'
			>
				<motion.div
					ref={textBodyRef}
					id='projectsComments'
					className={`${
						darkMode && 'text-white'
					} hidden mx-8 max-w-[25%] lg:flex flex-col justify-evenly items-center`}
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
						className='text-md'
						variants={textBodyChildVariants}
					>
						Here you can find links to some of my projects and the
						code behind them.
					</motion.p>
					<div className='flex flex-col items-center'>
						<motion.hr
							className='h-[2px] w-1/2 bg-slate-500]'
							animate={
								scrollDownVisible
									? {
											opacity: 0.1,
									  }
									: { opacity: 0 }
							}
							variants={textBodyChildVariants}
						/>
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
								} scale-[.25] opacity-10 rotate-180`}
							/>
						</motion.button>
					</div>
				</motion.div>
				<ProjectsGrid darkMode={darkMode} />
			</motion.div>
			<motion.p
				className={`${
					darkMode &&
					'bg-tomatoToLightPink text-transparent bg-clip-text'
				} w-full lg:text-end text-xs mt-8`}
				variants={textBodyChildVariants}
			>
				This page was made with Next.JS, Tailwind CSS, and with
				animation support from Framer Motion.
			</motion.p>
			<motion.button
				id='scrollDownButtonSmall'
				className='lg:hidden mx-8 absolute bottom-[-13%]'
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
					} scale-[.05] opacity-10 rotate-180`}
				/>
			</motion.button>
		</motion.section>
	)
}
