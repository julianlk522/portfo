import { useEffect, useRef } from 'react'
import scrollUp from '../../public/scrollUp.webp'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useAnimationControls,
	useInView,
} from 'framer-motion'
import ProjectsGrid from './ProjectsGrid'
import styles from './Work.module.css'

export default function Work({ darkMode }) {
	const workContainerRef = useRef(null)
	const containerInView = useInView(workContainerRef, { amount: 'all' })
	const gridAndSideTextContainerRef = useRef(null)

	const scrollDownControls = useAnimationControls()
	const { scrollYProgress } = useScroll()
	const allOpacityTransform = useTransform(
		scrollYProgress,
		[0.53, 0.66, 0.86],
		[0, 1, 0]
	)

	useEffect(() => {
		if (!containerInView) {
			scrollDownControls.stop()
			scrollDownControls.set('initial')
		}
	}, [containerInView, scrollDownControls])

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
				staggerChildren: 0.25,
			},
		},
	}

	const textBodyChildVariants = {
		initial: {
			y: 0,
			x: -25,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 0.5,
			transition: {
				type: 'spring',
				duration: 1,
			},
		},
		bouncing: {
			y: [null, 16],
			x: 0,
			opacity: 0.1,
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

	useEffect(() => {
		const containerScrollTimeout = setTimeout(() => {
			if (!containerInView) {
				gridAndSideTextContainerRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(containerScrollTimeout)
	}, [containerInView])

	return (
		<motion.section
			id='workContainer'
			ref={workContainerRef}
			className='relative flex h-full flex-col items-center justify-center overflow-hidden text-center dark:bg-slate-800 md:justify-between  md:overflow-y-hidden'
			style={{
				padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 10vw, 20vh)',
				opacity: darkMode ? '1' : allOpacityTransform,
			}}
		>
			<div
				id='bgCircleEffectOrange'
				className='absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-[#FF5B23] opacity-[7%] blur-3xl dark:opacity-10 sm:right-1/2 sm:top-[-5%] sm:h-[60vw] sm:w-[60vw]'
			></div>
			<div
				id='bgCircleEffectPink'
				className='absolute bottom-1/2 left-1/4 hidden h-64 w-64 rounded-full bg-[#FFACC6] opacity-[15%] shadow-thick blur-3xl dark:opacity-5 sm:left-1/2 sm:bottom-[-10%] sm:block sm:h-[60vw] sm:w-[60vw]'
			></div>
			<motion.h2
				id='workTitle'
				className='mt-auto mb-8 h-auto dark:text-white lg:mb-auto'
				style={{
					fontSize: 'clamp(2rem, 8vw, 8vh)',
				}}
			>
				Scenes from the
				<span className='ml-2 bg-labText bg-clip-text font-semibold text-transparent sm:ml-4'>
					lab
				</span>
			</motion.h2>
			<motion.div
				ref={gridAndSideTextContainerRef}
				id='gridAndSideTextContainer'
				className={`flex h-full w-full max-w-5xl items-center justify-around overflow-y-scroll md:max-h-[80%] lg:max-h-[80%] lg:justify-between lg:overflow-y-visible xl:max-w-7xl xl:justify-around ${styles.gridAndSideTextContainer}`}
			>
				<motion.div
					id='projectsSideTextLg'
					className='mr-8 hidden h-full max-w-[25%] flex-col items-center justify-evenly bg-contain bg-center bg-no-repeat dark:text-white lg:flex'
					initial='initial'
					whileInView='visible'
					viewport={{ amount: 'all' }}
					variants={textBodyVariants}
					onAnimationComplete={() => {
						if (containerInView) {
							scrollDownControls.start('bouncing')
						}
					}}
				>
					<motion.p
						className='text-md'
						variants={textBodyChildVariants}
					>
						Hover over a project to learn more!
					</motion.p>
					<motion.button
						id='workScrollDownPromptLg'
						className='opacity-10 dark:invert'
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
							className='rotate-180'
							width={38}
							height={20}
							alt='button to scroll to the next section'
						/>
					</motion.button>
				</motion.div>

				<ProjectsGrid />
			</motion.div>
			<motion.p
				id='portfoStackDescriptionLg'
				className='mt-4 hidden w-full max-w-5xl bg-portfoStackTextSm pr-8 text-xs dark:text-white lg:block lg:bg-portfoStackTextLg lg:text-end'
			>
				This page was made using Next.js, Tailwind CSS and Framer Motion
			</motion.p>
		</motion.section>
	)
}
