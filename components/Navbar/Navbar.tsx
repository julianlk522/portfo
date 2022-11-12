import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import DarkModeSwitch from './DarkModeSwitch'

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
					<div className='text-bold items-center lg:w-full'>
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
							<span className='lg:hidden'>J</span>
							<span className='hidden lg:block'>
								Julian Lindsay-Kaufman
							</span>
						</h3>
					</div>

					<DarkModeSwitch
						darkMode={darkMode}
						setDarkMode={setDarkMode}
					/>

					<ul
						id='navLinks'
						className='hidden w-full list-none items-center justify-between lg:flex xl:w-[50%] xl:max-w-xl'
						style={{
							fontSize: 'clamp(0.5rem, 2vw, 2vh)',
						}}
					>
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
								className='absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full bg-slate-300 dark:bg-white'
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
								className='absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full bg-slate-300 dark:bg-white'
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
