import { useState, useEffect, useContext } from 'react'
import { PageContext } from '../context/pageContext'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar({ navVisible }) {
	const { currentPage } = useContext(PageContext)

	return (
		<motion.nav
			id='navbar'
			className=' bg-white h-[5%] z-[1] fixed top-0 left-0 w-full px-32 justify-between items-center'
			style={{ display: navVisible ? 'flex' : 'none' }}
		>
			<Link href='/'>
				<a className='cursor-pointer text-md uppercase h-[7.5vh] w-full flex items-center opacity-50'>
					Julian Lindsay-Kaufman
				</a>
			</Link>

			{navVisible && (
				<ul
					id='navLinks'
					className='w-1/3 flex justify-between items-center list-none text-md'
				>
					<li>
						<Link href='/'>
							<a
								className={`relative ${
									currentPage === '/' &&
									'after:absolute after:bottom-[-0.5rem] after:left-[-25%] after:w-[150%] after:h-1 after:bg-[#FF5B23] after:opacity-50 after:rounded-full'
								}`}
							>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href='#workContainer'>
							<a
								className={`relative ${
									currentPage === '/work' &&
									'after:absolute after:bottom-[-0.5rem] after:left-[-25%] after:w-[150%] after:h-1 after:bg-[#FF5B23] after:opacity-50 after:rounded-full'
								}`}
							>
								Work
							</a>
						</Link>
					</li>
					<li>
						<Link href='#contactContainer'>
							<a
								className={`relative ${
									currentPage === '/contact' &&
									'after:absolute after:bottom-[-0.5rem] after:left-[-25%] after:w-[150%] after:h-1 after:bg-[#FF5B23] after:opacity-50 after:rounded-full'
								}`}
							>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			)}
		</motion.nav>
	)
}
