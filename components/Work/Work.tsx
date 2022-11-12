import { useEffect, useRef } from 'react'
import scrollUp from '../../public/scrollUp.webp'
import Image from 'next/image'
import {
	motion,
	useAnimationControls,
	useInView,
	AnimatePresence,
} from 'framer-motion'
import ProjectsGrid from './ProjectsGrid/ProjectsGrid'
import styles from './Work.module.css'

export default function Work({ darkMode }) {
	const projectsAnimatedOnce = useRef(false)
	const workContainerRef = useRef(null)
	const containerParticallyInView = useInView(workContainerRef, {
		amount: 'some',
	})
	const containerFullyInView = useInView(workContainerRef, { amount: 'all' })
	const gridAndSideTextContainerRef = useRef(null)

	const textBodyControls = useAnimationControls()
	const portfoStackDescriptionControls = useAnimationControls()
	const bgEffectControls = useAnimationControls()
	const gridMemberControls = useAnimationControls()

	useEffect(() => {
		if (containerFullyInView) {
			bgEffectControls.start('expanded')
		} else {
			bgEffectControls.start('minimized')
		}
	}, [containerFullyInView, bgEffectControls])

	useEffect(() => {
		const containerScrollTimeout = setTimeout(() => {
			if (!containerFullyInView) {
				gridAndSideTextContainerRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(containerScrollTimeout)
	}, [containerFullyInView])

	const bgEffectVariants = {
		minimized: {
			scale: 0,
		},
		expanded: (i: number) => ({
			scale: 1,
			transition: {
				delay: i * 0.1,
				type: 'spring',
			},
		}),
	}

	const textBodyVariants = {
		initial: {},
		visible: {
			transition: {
				staggerChildren: 0.25,
			},
		},
	}

	const textBodyChildVariants = {
		initial: {
			y: 0,
			x: -10,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
		},
	}

	const portfoStackDescriptionVariants = {
		initial: {
			x: -10,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	return (
		<section
			ref={workContainerRef}
			id='workContainer'
			className='relative h-screen w-screen'
		>
			<AnimatePresence>
				{darkMode && (
					<motion.div
						id='staticDarkModeBg'
						className='absolute inset-0 z-[-1] h-full w-full'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							backgroundColor: 'rgb(30 41 59)',
						}}
					></motion.div>
				)}
			</AnimatePresence>
			<motion.div
				id='workContent'
				className='relative flex h-full flex-col items-center justify-center overflow-hidden text-center md:justify-between  md:overflow-y-hidden'
				style={{
					padding: 'clamp(4rem, 4vw, 4vh) clamp(2rem, 8vw, 20vh)',
				}}
			>
				<motion.div
					id='bgCircleEffectOrange'
					custom={1}
					className='absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-[#FF5B23] opacity-[7%] blur-3xl sm:right-1/2 sm:top-[-5%] sm:h-[60vw] sm:w-[60vw]'
					variants={bgEffectVariants}
					initial='minimized'
					animate={bgEffectControls}
				></motion.div>
				<motion.div
					id='bgCircleEffectBlue'
					custom={2}
					variants={bgEffectVariants}
					initial='minimized'
					animate={bgEffectControls}
					className='absolute bottom-1/2 left-1/4 hidden h-64 w-64 rounded-full bg-[#00d8ff] opacity-[7%] blur-3xl sm:left-1/2 sm:bottom-[-10%] sm:block sm:h-[60vw] sm:w-[60vw]'
					onAnimationComplete={() => {
						if (containerParticallyInView) {
							gridMemberControls.start('visible')
							portfoStackDescriptionControls.start('visible')
						}
					}}
				></motion.div>
				<h2
					id='workTitle'
					className='my-auto dark:text-white'
					style={{
						fontSize: 'clamp(2rem, 8vw, 8vh)',
					}}
				>
					Scenes from the
					<span className='ml-2 bg-labText bg-clip-text font-semibold text-transparent sm:ml-4'>
						lab
					</span>
				</h2>
				<div
					ref={gridAndSideTextContainerRef}
					id='gridAndSideTextContainer'
					className={`flex h-full w-full max-w-5xl items-center justify-around overflow-y-scroll md:max-h-[80%] lg:max-h-[80%] lg:justify-between lg:overflow-y-visible xl:max-w-7xl xl:justify-around ${styles.gridAndSideTextContainer}`}
				>
					<motion.div
						id='projectsSideTextLg'
						className='mr-8 hidden h-full max-w-[25%] flex-col items-center justify-evenly bg-contain bg-center bg-no-repeat dark:text-white lg:flex'
						variants={textBodyVariants}
						initial='initial'
						animate={textBodyControls}
					>
						<motion.p
							className='text-md'
							variants={textBodyChildVariants}
						>
							Hover over a project to learn more!
						</motion.p>

						<motion.button
							id='workScrollDownPromptLg'
							className='relative hidden w-min items-center justify-between rounded-lg border-[1px] border-slate-700 border-opacity-5 bg-slate-300 bg-opacity-5 p-4 shadow-lg dark:text-white lg:flex'
							variants={textBodyChildVariants}
							whileHover={{ scale: 1.25 }}
							whileTap={{ scale: 1.1 }}
							onClick={() =>
								document
									.getElementById('contactContainer')
									.scrollIntoView({ behavior: 'smooth' })
							}
						>
							<div className='relative h-full w-8'>
								<div
									id='primaryArrowContainer'
									className='absolute top-[-25%] h-full w-full'
								>
									<Image
										src={scrollUp}
										alt='scroll to the top'
										width={19}
										height={10}
										className='rotate-180 opacity-20 dark:invert'
									/>
								</div>
							</div>
							<p className='ml-4 w-min text-xs opacity-60 lg:text-[0.6rem] 2xl:text-xs'>
								Continue
							</p>
						</motion.button>
					</motion.div>
					<ProjectsGrid gridMemberControls={gridMemberControls} />
				</div>
				<motion.p
					id='portfoStackDescriptionLg'
					className='mt-4 hidden w-full max-w-5xl bg-portfoStackTextSm pr-8 text-xs dark:text-white lg:block lg:bg-portfoStackTextLg'
					variants={portfoStackDescriptionVariants}
					initial='initial'
					animate={portfoStackDescriptionControls}
					transition={{
						delay: projectsAnimatedOnce.current ? 0.1 : 0.5,
					}}
					onAnimationComplete={() => {
						if (containerParticallyInView) {
							textBodyControls.start('visible')
							projectsAnimatedOnce.current = true
						}
					}}
				>
					This page was made using Next.js, Tailwind CSS and Framer
					Motion
				</motion.p>
			</motion.div>
		</section>
	)
}
