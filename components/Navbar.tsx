import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar({ navVisible }) {
	const { scrollYProgress } = useScroll()

	const underlineOpacityTransformWelcome = useTransform(
		scrollYProgress,
		[0, 0.17, 0.2],
		[0.5, 0.5, 0]
	)
	const underlineOpacityTransformWork = useTransform(
		scrollYProgress,
		[0.22, 0.25, 0.67, 0.7],
		[0, 0.5, 0.5, 0]
	)
	const underlineOpacityTransformContact = useTransform(
		scrollYProgress,
		[0.72, 0.75],
		[0, 0.5]
	)

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
					<li
						className='relative cursor-pointer'
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: 'smooth',
							})
						}
					>
						About
						<motion.div
							className='absolute bottom-[-0.5rem] left-[-25%] w-[150%] h-1 rounded-full bg-[#FF5B23]'
							style={{
								opacity: underlineOpacityTransformWelcome,
							}}
						></motion.div>
					</li>
					<li
						className='relative cursor-pointer'
						onClick={() =>
							document
								.getElementById('workContainer')
								.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Work
						<motion.div
							className='absolute bottom-[-0.5rem] left-[-25%] w-[150%] h-1 rounded-full bg-[#FF5B23]'
							style={{
								opacity: underlineOpacityTransformWork,
							}}
						></motion.div>
					</li>
					<li
						className='relative cursor-pointer'
						onClick={() =>
							document
								.getElementById('contactContainer')
								.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Contact
						<motion.div
							className='absolute bottom-[-0.5rem] left-[-25%] w-[150%] h-1 rounded-full bg-[#FF5B23]'
							style={{
								opacity: underlineOpacityTransformContact,
							}}
						></motion.div>
					</li>
				</ul>
			)}
		</motion.nav>
	)
}
