import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import ProjectsGrid from './ProjectsGrid/ProjectsGrid'
import ScrollButton from '../ScrollButton'
import styles from './Work.module.css'

export default function Work({ darkMode }) {
	const projectsAnimatedOnce = useRef(false)
	const workWrapperRef = useRef(null)
	const containerParticallyInView = useInView(workWrapperRef, {
		amount: 'some',
	})
	const containerFullyInView = useInView(workWrapperRef, {
		amount: 'all',
	})
	const gridAndSideTextWrapperRef = useRef(null)

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
		const textScrollTimeout = setTimeout(() => {
			if (!containerFullyInView) {
				gridAndSideTextWrapperRef.current.scrollTop = 0
			}
		}, 3000)

		return () => clearTimeout(textScrollTimeout)
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
			x: -10,
			opacity: 0,
		},
		visible: {
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
			ref={workWrapperRef}
			id='work'
			className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-16 py-24 text-center text-stone-600 dark:text-white md:justify-between'
		>
			<motion.div
				custom={1}
				className='pointer-events-none absolute hidden rounded-full bg-primaryOrange opacity-[7%] blur-3xl sm:right-[60%] sm:top-[5%] sm:block sm:h-[40vw] sm:w-[40vw]'
				variants={bgEffectVariants}
				initial='minimized'
				animate={bgEffectControls}
			></motion.div>
			<motion.div
				custom={2}
				variants={bgEffectVariants}
				initial='minimized'
				animate={bgEffectControls}
				className='pointer-events-none absolute hidden rounded-full bg-primaryBlue opacity-[7%] blur-3xl sm:left-[60%] sm:bottom-[5%] sm:block sm:h-[40vw] sm:w-[40vw]'
				onAnimationComplete={() => {
					if (containerParticallyInView) {
						gridMemberControls.start('visible')
						portfoStackDescriptionControls.start('visible')
					}
				}}
			></motion.div>
			<h2
				id='workTitle'
				className='my-auto w-full font-semibold dark:text-white md:mb-8'
				style={{
					fontSize: 'clamp(1rem, 6vw, 6vh)',
					textShadow: darkMode
						? '4px 10px 4px rgb(255 255 255 / 5%)'
						: '4px 10px 4px rgb(0 0 0 / 5%)',
				}}
			>
				Scenes from the
				<span className='ml-2 bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink sm:ml-4'>
					lab
				</span>
			</h2>
			<div
				ref={gridAndSideTextWrapperRef}
				id='gridAndSideTextWrapper'
				className={`flex h-full w-full max-w-5xl items-center justify-around overflow-scroll md:max-h-[80%] lg:max-h-[80%] lg:justify-between lg:overflow-visible xl:max-w-7xl xl:justify-around ${styles.gridAndSideTextWrapper}`}
			>
				<motion.div
					id='projectsSideTextLg'
					className='hidden h-full max-w-[25%] flex-col items-center justify-evenly pr-16 dark:text-white lg:flex'
					variants={textBodyVariants}
					initial='initial'
					animate={textBodyControls}
				>
					<motion.p
						className='text-md font-bold'
						variants={textBodyChildVariants}
					>
						Hover over a project to learn more!
					</motion.p>

					<ScrollButton
						section='contact'
						styles='hidden lg:flex'
						variants={textBodyChildVariants}
						scrollRef={workWrapperRef}
					/>
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
				This page was made using Next.js, Tailwind CSS and Framer Motion
			</motion.p>
		</section>
	)
}
