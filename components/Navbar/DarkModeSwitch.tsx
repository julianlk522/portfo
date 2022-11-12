import React from 'react'
import { motion } from 'framer-motion'

function DarkModeSwitch({ darkMode, setDarkMode }) {
	return (
		<li
			id='darkModeSwitchContainer'
			className='flex items-center justify-evenly'
			onClick={() => {
				setDarkMode((prev: boolean) => !prev)
				if (!darkMode) {
					localStorage.setItem('theme', 'dark')
					document.documentElement.classList.add('dark')
				} else {
					localStorage.setItem('theme', 'light')
					document.documentElement.classList.remove('dark')
				}
			}}
		>
			<span className='mt-[-5%] h-3 w-3 text-xs lg:h-6 lg:w-6 lg:text-lg'>
				{darkMode ? '🌙' : '🔆'}
			</span>
			<div
				id='darkModeSwitch'
				className='ml-4 flex h-4 w-12 items-center rounded-[2rem] bg-slate-300 px-1 dark:bg-slate-800'
				style={darkMode ? { justifyContent: 'flex-end' } : {}}
			>
				<motion.div
					layout
					id='slider'
					className='h-4 w-4 cursor-pointer rounded-full bg-slate-100 lg:h-6 lg:w-6'
				></motion.div>
			</div>
		</li>
	)
}

export default DarkModeSwitch
