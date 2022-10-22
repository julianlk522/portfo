import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function Navbar({ navVisible, darkMode, setDarkMode }) {
	const { scrollYProgress } = useScroll()

	const aboutUnderlineOpacityTransform = useTransform(
		scrollYProgress,
		[0, 0.33, 0.46],
		[0, 0.5, 0]
	)
	const workUnderlineOpacityTransform = useTransform(
		scrollYProgress,
		[0.46, 0.66, 0.86],
		[0, 0.5, 0]
	)
	const contactUnderlineOpacityTransform = useTransform(
		scrollYProgress,
		[0.86, 1],
		[0, 0.5]
	)

	const navVariants = {
		darkMode: {
			opacity: 1,
			backgroundColor: 'rgba(51 65 85 0.75)',
			boxShadow: '0px 0px 10px rgba(153, 153, 153, 0.5)',
		},
		lightMode: {
			opacity: 1,
			backgroundColor: 'rgba(51 65 85 0)',
			boxShadow: '0px 0px 0px rgba(153, 153, 153, 0)',
		},
		transition: {
			duration: 2,
			type: 'tween',
		},
	}

	return (
		<AnimatePresence>
			{navVisible && (
				<motion.nav
					id='navbar'
					className='fixed top-0 left-0 z-[2] flex h-[5%] w-full items-center justify-between dark:text-white'
					variants={navVariants}
					initial={{ opacity: 0 }}
					animate={darkMode ? 'darkMode' : 'lightMode'}
					exit={{ opacity: 0 }}
					style={{
						padding: 'clamp(1rem, 3vw, 3vh) clamp(2rem, 6vw, 6vh)',
					}}
				>
					<div className='hidden h-[7.5vh] w-full items-center xs:flex'>
						<h3
							className='cursor-pointer whitespace-nowrap uppercase opacity-50 dark:opacity-75'
							style={{
								fontSize: 'clamp(0.75rem, 2vw, 2vh)',
							}}
							onClick={() => {
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: 'smooth',
								})
							}}
						>
							Julian Lindsay-Kaufman
						</h3>
					</div>
					{navVisible && (
						<>
							<ul
								id='navLinks'
								className='flex w-full list-none items-center justify-between xl:w-[50%] xl:max-w-xl'
								style={{
									fontSize: 'clamp(0.5rem, 2vw, 2vh)',
								}}
							>
								<li
									id='darkModeSwitchContainer'
									className='flex items-center justify-evenly'
									onClick={() => {
										setDarkMode((prev: boolean) => !prev)
										if (!darkMode) {
											localStorage.setItem(
												'theme',
												'dark'
											)
											document.documentElement.classList.add(
												'dark'
											)
										} else {
											localStorage.setItem(
												'theme',
												'light'
											)
											document.documentElement.classList.remove(
												'dark'
											)
										}
									}}
								>
									<span className='mt-[-5%] h-3 w-3 text-xs lg:h-6 lg:w-6 lg:text-lg'>
										{darkMode ? '🌙' : '🔆'}
									</span>
									<div
										id='darkModeSwitch'
										className='ml-4 flex h-4 w-12 items-center rounded-[2rem] bg-slate-300 px-1 dark:bg-slate-800'
										style={
											darkMode
												? { justifyContent: 'flex-end' }
												: {}
										}
									>
										<motion.div
											layout
											id='slider'
											className='h-4 w-4 cursor-pointer rounded-full bg-slate-100 lg:h-6 lg:w-6'
										></motion.div>
									</div>
								</li>
								<li
									className='relative cursor-pointer'
									onClick={() =>
										document
											.getElementById('aboutContainer')
											.scrollIntoView({
												behavior: 'smooth',
											})
									}
								>
									About
									<motion.div
										className='absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full bg-slate-300 dark:bg-white'
										style={{
											opacity:
												aboutUnderlineOpacityTransform,
										}}
									></motion.div>
								</li>
								<li
									className='relative mx-2 cursor-pointer'
									onClick={() =>
										document
											.getElementById('workContainer')
											.scrollIntoView({
												behavior: 'smooth',
											})
									}
								>
									Work
									<motion.div
										className='absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full bg-slate-300 dark:bg-white'
										style={{
											opacity:
												workUnderlineOpacityTransform,
										}}
									></motion.div>
								</li>
								<li
									className='relative cursor-pointer'
									onClick={() =>
										document
											.getElementById('contactContainer')
											.scrollIntoView({
												behavior: 'smooth',
											})
									}
								>
									Contact
									<motion.div
										className='absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full bg-slate-300 dark:bg-white'
										style={{
											opacity:
												contactUnderlineOpacityTransform,
										}}
									></motion.div>
								</li>
							</ul>
						</>
					)}
				</motion.nav>
			)}
		</AnimatePresence>
	)
}
