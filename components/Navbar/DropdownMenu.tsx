import React from 'react'
import { motion } from 'framer-motion'

function DropdownMenu({ setShowModal }) {
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
			className='fixed top-0 right-0 z-[1] flex h-full w-[60%] max-w-lg flex-col items-center justify-center bg-black bg-opacity-80 px-8 py-16 text-white'
			variants={dropdownVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<ul
				id='dropdownLocalLinks'
				className='flex h-[60%] flex-col items-center justify-center gap-8'
			>
				<motion.li variants={linkVariants}>
					<a
						href='#aboutContainer'
						onClick={() => setShowModal(false)}
					>
						About
					</a>
				</motion.li>
				<motion.li variants={linkVariants}>
					<a
						href='#skillsContainer'
						onClick={() => setShowModal(false)}
					>
						Skills
					</a>
				</motion.li>
				<motion.li variants={linkVariants}>
					<a
						href='#workContainer'
						onClick={() => setShowModal(false)}
					>
						Work
					</a>
				</motion.li>
				<motion.li variants={linkVariants}>
					<a
						href='#contactContainer'
						onClick={() => setShowModal(false)}
					>
						Contact
					</a>
				</motion.li>
			</ul>

			<hr className='h-1 w-1/2 opacity-20' />

			<ul
				id='dropdownRemoteLinks'
				className='flex h-[40%] flex-col items-center justify-center gap-8'
			>
				<motion.li variants={linkVariants}>
					<a
						href='https://github.com/julianlk522'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
				</motion.li>
				<motion.li variants={linkVariants}>
					<a
						href='https://docs.google.com/document/d/e/2PACX-1vQfJyEmppuH3zko7vjioYFQe3ZBsEva8x0kWg8kL-ASaeDoCh5sysfEJus9H61_3Smvub8fXZiN-beA/pub'
						target='_blank'
						rel='noreferrer'
					>
						Resume
					</a>
				</motion.li>
			</ul>
		</motion.aside>
	)
}

export default DropdownMenu
