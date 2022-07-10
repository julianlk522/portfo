import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export default function Navbar() {
	return (
		<nav
			id='navbar'
			className='fixed top-0 left-0 px-32 mt-8 flex justify-between items-center h-[7.5vh] w-full overflow-hidden'
		>
			<div id='imgContainer' className='w-[7.5vh] h-full'>
				<Image
					src={logo}
					alt='logo'
					objectFit='contain'
					className='rounded-full'
				/>
			</div>

			<ul id='navLinks' className='w-1/3 flex justify-between ist-none'>
				<li>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href='/work'>
						<a>Work</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
