import React from 'react'
import { motion } from 'framer-motion'

function DarkModeSwitch({ darkMode, setDarkMode }) {
	function toggleDarkMode() {
		setDarkMode((prev: boolean) => !prev)
		if (!darkMode) {
			localStorage.setItem('theme', 'dark')
			document.documentElement.classList.add('dark')
		} else {
			localStorage.setItem('theme', 'light')
			document.documentElement.classList.remove('dark')
		}
	}

	return (
		<div
			id='darkModeSwitchContainer'
			className='mr-4 flex items-center justify-evenly sm:mr-20'
			tabIndex={2}
			onKeyDown={(e: React.KeyboardEvent) => {
				if (e.code === 'Enter' || e.code === 'Space') {
					e.preventDefault()
					toggleDarkMode()
				}
			}}
			onClick={toggleDarkMode}
		>
			<span className='flex h-6 w-6 items-center justify-center text-xs lg:text-lg'>
				{darkMode ? '🌙' : '🔆'}
			</span>
			<motion.div
				id='darkModeSwitch'
				className='ml-2 flex h-4 w-12 items-center rounded-[2rem] bg-slate-300 px-1 dark:bg-slate-800'
				style={{
					justifyContent: darkMode ? 'flex-end' : 'flex-start',
				}}
				initial={false}
			>
				<motion.div
					layout
					id='slider'
					className='h-6 w-6 cursor-pointer rounded-full bg-slate-100'
				></motion.div>
			</motion.div>
		</div>
	)
}

export default DarkModeSwitch
