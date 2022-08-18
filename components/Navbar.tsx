import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export default function Navbar() {
	return (
		<nav
			id='navbar'
			className='fixed top-0 left-0 w-full px-32 py-8 flex justify-between items-center'
		>
			<Link href='/' passHref>
				{/* <Image
						src={logo}
						alt='logo'
						objectFit='contain'
						className='rounded-full cursor-pointer'
					/> */}
				<h3
					id='logoText'
					className='cursor-pointer uppercase h-[7.5vh] w-full flex items-center opacity-50'
				>
					Julian Lindsay-Kaufman
				</h3>
			</Link>

			<ul id='navLinks' className='w-1/3 flex justify-between ist-none'>
				<li>
					<Link href=''>
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href='/work'>
						<a>Work</a>
					</Link>
				</li>
				<li>
					<Link href=''>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
