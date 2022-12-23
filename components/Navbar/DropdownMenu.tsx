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
				>
					<a
						href='https://github.com/julianlk522'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
				</motion.li>
				<motion.li
					variants={linkVariants}
					tabIndex={9}
					whileHover={{ scale: 1.2 }}
				>
					<a
						href='https://docs.google.com/document/d/e/2PACX-1vQfJyEmppuH3zko7vjioYFQe3ZBsEva8x0kWg8kL-ASaeDoCh5sysfEJus9H61_3Smvub8fXZiN-beA/pub'
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
						}
					}}
					whileHover={{ scale: 1.2 }}
				>
					<a
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
