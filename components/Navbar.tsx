import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar({ navVisible, darkMode, setDarkMode }) {
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
			className={`${
				darkMode
					? 'bg-slate-700 text-white shadow-navbarDarkMild'
					: 'bg-white'
			} h-[5%] fixed top-0 left-0 w-full px-32 justify-between items-center z-[2]`}
			style={{ display: navVisible ? 'flex' : 'none' }}
		>
			<div className='flex items-center h-[7.5vh] w-full'>
				<h3
					className={`${
						darkMode ? 'opacity-75' : 'opacity-50'
					} cursor-pointer text-md uppercase`}
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: 'smooth',
						})
					}}
				>
					Julian Lindsay-Kaufman
				</h3>
			</div>

			{navVisible && (
				<>
					<ul
						id='navLinks'
						className='w-1/2 flex justify-between items-center list-none text-md'
					>
						<li
							id='darkModeSwitch'
							className={`${
								darkMode
									? 'justify-end bg-slate-800'
									: 'bg-slate-300'
							} flex items-center rounded-[2rem] w-12 h-6 px-1`}
							onClick={() => setDarkMode(!darkMode)}
						>
							<motion.div
								layout
								id='slider'
								className='bg-slate-100 h-4 w-4 cursor-pointer rounded-full'
							></motion.div>
						</li>
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
				</>
			)}
		</motion.nav>
	)
}
