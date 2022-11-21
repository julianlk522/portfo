import { motion, AnimatePresence } from 'framer-motion'
import DarkModeSwitch from './DarkModeSwitch'
import NavHomeButton from './NavHomeButton'

export default function Navbar({
	navVisible,
	darkMode,
	setDarkMode,
	showDropdown,
}) {
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
					className='fixed top-0 left-0 z-[1] flex h-16 w-full items-center justify-end px-16 dark:text-white md:justify-evenly'
					variants={navVariants}
					initial={{ opacity: 0 }}
					animate={darkMode ? 'darkMode' : 'lightMode'}
					exit={{ opacity: 0 }}
				>
					<div
						id='homeButtonFlexContainer'
						className='text-bold mr-auto items-center opacity-60'
					>
						<NavHomeButton />

						<button
							id='homeButtonLg'
							className='hidden px-2 underline underline-offset-4 md:block'
						>
							<a
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

					{!showDropdown && (
						<DarkModeSwitch
							darkMode={darkMode}
							setDarkMode={setDarkMode}
						/>
					)}
				</motion.nav>
			)}
		</AnimatePresence>
	)
}
