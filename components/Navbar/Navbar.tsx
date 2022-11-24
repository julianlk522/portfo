import { motion, AnimatePresence } from 'framer-motion'
import DarkModeSwitch from './DarkModeSwitch'
import HomeButtonLogo from './HomeButtonLogo'

export default function Navbar({
	navVisible,
	darkMode,
	setDarkMode,
	showDropdown,
}) {
	const navVariants = {
		hidden: {
			y: -48,
			opacity: 0,
			boxShadow: 'none',
		},
		darkMode: {
			opacity: 0.75,
			backgroundColor: 'rgb(51, 65, 85)',
			boxShadow: '0px 0px 10px rgba(153, 153, 153, 0.5)',
			y: 0,
		},
		lightMode: {
			opacity: 1,
			backgroundColor: 'rgb(255,255,255)',
			boxShadow: 'none',
			y: 0,
		},
	}

	return (
		<AnimatePresence>
			{navVisible && (
				<motion.nav
					id='navbar'
					className='fixed top-0 left-0 z-[1] flex h-16 w-full items-center justify-end px-16 dark:text-white md:justify-evenly'
					variants={navVariants}
					initial='hidden'
					animate={darkMode ? 'darkMode' : 'lightMode'}
					exit='hidden'
					transition={{
						duration: 0.5,
						type: 'tween',
					}}
				>
					<HomeButtonLogo darkMode={darkMode} />

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
