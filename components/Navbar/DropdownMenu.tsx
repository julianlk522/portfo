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
		},
	}

	return (
		<motion.aside
			id='modalDropdown'
			className='fixed top-0 left-[40%] z-[1] flex h-full w-[60%] flex-col items-center justify-center bg-black bg-opacity-80 px-8 py-16 text-white'
			variants={dropdownVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			transition={{
				duration: 0.25,
				type: 'tween',
			}}
		>
			<ul
				id='dropdownLocalLinks'
				className='flex h-[60%] flex-col items-center justify-center gap-8'
			>
				<li>
					<a
						href='#aboutContainer'
						onClick={() => setShowModal(false)}
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#workContainer'
						onClick={() => setShowModal(false)}
					>
						Work
					</a>
				</li>
				<li>
					<a
						href='#contactContainer'
						onClick={() => setShowModal(false)}
					>
						Contact
					</a>
				</li>
			</ul>
			<hr className='h-1 w-1/2' />
			<ul
				id='dropdownRemoteLinks'
				className='flex h-[40%] flex-col items-center justify-center gap-8'
			>
				<li>
					<a href='https://github.com/julianlk522' target='_blank'>
						Github
					</a>
				</li>
				<li>
					<a
						href='https://docs.google.com/document/d/e/2PACX-1vQfJyEmppuH3zko7vjioYFQe3ZBsEva8x0kWg8kL-ASaeDoCh5sysfEJus9H61_3Smvub8fXZiN-beA/pub'
						target='_blank'
						onClick={() => setShowModal(false)}
					>
						Resume
					</a>
				</li>
			</ul>
		</motion.aside>
	)
}

export default DropdownMenu
