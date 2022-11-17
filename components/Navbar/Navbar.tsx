import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import DarkModeSwitch from './DarkModeSwitch'
import NavHomeButton from './NavHomeButton'

export default function Navbar({
	navVisible,
	darkMode,
	setDarkMode,
	showModal,
}) {
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
	}

	return (
		<AnimatePresence>
			{navVisible && (
				<motion.nav
					id='navbar'
					className='fixed top-0 left-0 z-[1] flex h-16 w-full items-center justify-end px-8 dark:text-white md:justify-evenly md:px-16'
					variants={navVariants}
					initial={{ opacity: 0 }}
					animate={darkMode ? 'darkMode' : 'lightMode'}
					exit={{ opacity: 0 }}
				>
					<div
						id='homeButtonFlexContainer'
						className='text-bold mr-auto items-center'
					>
						<NavHomeButton />

						<button
							id='homeButtonLg'
							className='hidden px-2 md:block'
						>
							<a
								className='text-lg'
								style={{
									fontSize: 'clamp(0.75rem, 2vw, 2vh)',
								}}
								href='https://julianlk.vercel.app'
								target='_self'
								rel='noreferrer'
							>
								JLK
							</a>
						</button>
					</div>

					{!showModal && (
						<div id='darkModeSwitchSmWrapper' className='md:hidden'>
							<DarkModeSwitch
								darkMode={darkMode}
								setDarkMode={setDarkMode}
							/>
						</div>
					)}

					<ul
						id='mdScreenNavLinks'
						className='hidden w-full list-none items-center justify-between md:flex md:max-w-sm'
						style={{
							fontSize: 'clamp(0.5rem, 2vw, 2vh)',
						}}
					>
						<DarkModeSwitch
							darkMode={darkMode}
							setDarkMode={setDarkMode}
						/>
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
								className='navLinkUnderline'
								style={{
									opacity: aboutUnderlineOpacityTransform,
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
								className='navLinkUnderline'
								style={{
									opacity: workUnderlineOpacityTransform,
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
								className='navLinkUnderline'
								style={{
									opacity: contactUnderlineOpacityTransform,
								}}
							></motion.div>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	)
}
