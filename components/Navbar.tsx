import { useContext } from 'react'
import Link from 'next/link'
import { PageContext } from '../context/pageContext'

export default function Navbar() {
	const { currentPage } = useContext(PageContext)

	return (
		<nav
			id='navbar'
			className='z-[1] fixed top-0 left-0 w-full px-32 h-[10%] flex justify-between items-center'
		>
			<Link href='/'>
				<a
					href='/'
					className='cursor-pointer text-lg uppercase h-[7.5vh] w-full flex items-center opacity-50'
				>
					Julian Lindsay-Kaufman
				</a>
			</Link>

			<ul
				id='navLinks'
				className='w-1/3 flex justify-between ist-none text-lg'
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
					<Link href='/work'>
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
					<Link href='/'>
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
		</nav>
	)
}
