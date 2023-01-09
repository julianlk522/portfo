import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './DropdownMenu.module.css'

function DropdownMenu({ setShowDropdown }) {
	const dropdownVariants = {
		hidden: {
			opacity: 0,
			x: '100%',
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.1,
				duration: 0.25,
				type: 'tween',
			},
		},
	}

	const linkVariants = {
		hidden: {
			opacity: 0,
			x: 10,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	}

	return (
		<motion.aside
			id='modalDropdown'
			className={`fixed top-0 right-0 z-[1] flex h-full w-[60%] max-w-lg flex-col items-center justify-center bg-black bg-opacity-80 px-8 py-16 text-white ${styles.dropdownLinks}`}
			variants={dropdownVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			onKeyDown={(e: React.KeyboardEvent) => {
				if (e.code === 'Escape') {
					setShowDropdown(false)
				}
			}}
		>
			<ul
				id='dropdownLocalLinks'
				className='flex h-[60%] flex-col items-center justify-center gap-8'
			>
				<motion.li
					variants={linkVariants}
					tabIndex={4}
					onClick={() => setShowDropdown(false)}
					whileHover={{ scale: 1.2 }}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Enter') {
							setShowDropdown(false)
							document.getElementById('about').scrollIntoView()
						}
					}}
				>
					<Link href='/#about' scroll={false}>
						About
					</Link>
				</motion.li>
				<motion.li
					variants={linkVariants}
					tabIndex={5}
					onClick={() => setShowDropdown(false)}
					whileHover={{ scale: 1.2 }}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Enter') {
							setShowDropdown(false)
							document.getElementById('skills').scrollIntoView()
						}
					}}
				>
					<Link href='/#skills' scroll={false}>
						Skills
					</Link>
				</motion.li>
				<motion.li
					variants={linkVariants}
					tabIndex={6}
					onClick={() => setShowDropdown(false)}
					whileHover={{ scale: 1.2 }}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Enter') {
							setShowDropdown(false)
							document.getElementById('work').scrollIntoView()
						}
					}}
				>
					<Link href='/#work' scroll={false}>
						Work
					</Link>
				</motion.li>
				<motion.li
					variants={linkVariants}
					tabIndex={7}
					onClick={() => setShowDropdown(false)}
					whileHover={{ scale: 1.2 }}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Enter') {
							setShowDropdown(false)
							document.getElementById('contact').scrollIntoView()
						}
					}}
				>
					<Link href='/#contact' scroll={false}>
						Contact
					</Link>
				</motion.li>
			</ul>

			<hr className='h-1 w-1/2 opacity-20' />

			<ul
				id='dropdownRemoteLinks'
				className='flex h-[40%] flex-col items-center justify-center gap-8'
			>
				<motion.li
					variants={linkVariants}
					tabIndex={8}
					whileHover={{ scale: 1.2 }}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Enter') {
							document.getElementById('githubLink').click()
						}
					}}
				>
					<a
						id='githubLink'
						href='https://github.com/julianlk522'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
				</motion.li>
				<motion.li
					tabIndex={9}
					variants={linkVariants}
					whileHover={{ scale: 1.2 }}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Enter') {
							document.getElementById('resumeLink').click()
						}
					}}
				>
					<a
						id='resumeLink'
						href='https://julianlk.com/resume.pdf'
						target='_blank'
						rel='noreferrer'
					>
						Resume
					</a>
				</motion.li>
				<motion.li
					variants={linkVariants}
					tabIndex={10}
					onKeyDown={(e: React.KeyboardEvent) => {
						if (e.code === 'Tab') {
							e.preventDefault()
							document
								.getElementById('dropdownToggleButton')
								?.focus()
						} else if (e.code === 'Enter') {
							document.getElementById('linkedInLink').click()
						}
					}}
					whileHover={{ scale: 1.2 }}
				>
					<a
						id='linkedInLink'
						href='https://www.linkedin.com/in/julian-lindsay-kaufman-4572a8157/'
						target='_blank'
						rel='noreferrer'
					>
						LinkedIn
					</a>
				</motion.li>
			</ul>
		</motion.aside>
	)
}

export default DropdownMenu
