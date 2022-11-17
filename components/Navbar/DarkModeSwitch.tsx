import React from 'react'
import { motion } from 'framer-motion'

function DarkModeSwitch({ darkMode, setDarkMode }) {
	return (
		<li
			id='darkModeSwitchContainer'
			className='mr-8 flex items-center justify-evenly sm:mr-16 md:mr-4'
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
			<span className='flex h-6 w-6 items-center justify-center text-xs lg:text-lg'>
				{darkMode ? '🌙' : '🔆'}
			</span>
			<div
				id='darkModeSwitch'
				className='ml-2 flex h-4 w-12 items-center rounded-[2rem] bg-slate-300 px-1 dark:bg-slate-800'
				style={darkMode ? { justifyContent: 'flex-end' } : {}}
			>
				<motion.div
					layout
					id='slider'
					className='h-6 w-6 cursor-pointer rounded-full bg-slate-100'
				></motion.div>
			</div>
		</li>
	)
}

export default DarkModeSwitch
