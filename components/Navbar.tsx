import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar({ navVisible, darkMode, setDarkMode }) {
	const { scrollYProgress } = useScroll()

	const underlineOpacityTransformAbout = useTransform(
		scrollYProgress,
		[0, 0.33, 0.5],
		[0, 0.5, 0]
	)
	const underlineOpacityTransformWork = useTransform(
		scrollYProgress,
		[0.5, 0.66, 0.82],
		[0, 0.5, 0]
	)
	const underlineOpacityTransformContact = useTransform(
		scrollYProgress,
		[0.82, 1],
		[0, 0.5]
	)

	return (
		<motion.nav
			id='navbar'
			className={`${
				darkMode ? 'bg-slate-700 text-white shadow-navbar' : 'bg-white'
			} fixed top-0 left-0 z-[2] h-[5%] w-full items-center justify-between`}
			style={{
				display: navVisible ? 'flex' : 'none',
				padding: 'clamp(1rem, 3vw, 3vh) clamp(2rem, 6vw, 6vh)',
			}}
		>
			<div className='hidden h-[7.5vh] w-full items-center xs:flex'>
				<h3
					className={`${
						darkMode ? 'opacity-75' : 'opacity-50'
					} cursor-pointer whitespace-nowrap uppercase`}
					style={{
						fontSize: 'clamp(0.75rem, 2vw, 2vh)',
					}}
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
						className='flex w-full list-none items-center justify-between md:w-[50vw]'
						style={{
							fontSize: 'clamp(0.5rem, 2vw, 2vh)',
						}}
					>
						<li
							id='darkModeSwitch'
							className={`${
								darkMode
									? 'justify-end bg-slate-800'
									: 'bg-slate-300'
							} mx-4 flex h-6 w-12 items-center rounded-[2rem] px-1`}
							onClick={() => setDarkMode(!darkMode)}
						>
							<motion.div
								layout
								id='slider'
								className='h-4 w-4 cursor-pointer rounded-full bg-slate-100'
							></motion.div>
						</li>
						<li
							className='relative cursor-pointer'
							onClick={() =>
								document
									.getElementById('aboutContainer')
									.scrollIntoView({ behavior: 'smooth' })
							}
						>
							About
							<motion.div
								className={`absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full ${
									darkMode ? 'bg-white' : 'bg-slate-300'
								}`}
								style={{
									opacity: underlineOpacityTransformAbout,
								}}
							></motion.div>
						</li>
						<li
							className='relative mx-2 cursor-pointer'
							onClick={() =>
								document
									.getElementById('workContainer')
									.scrollIntoView({ behavior: 'smooth' })
							}
						>
							Work
							<motion.div
								className={`absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full ${
									darkMode ? 'bg-white' : 'bg-slate-300'
								}`}
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
								className={`absolute bottom-[-0.25rem] left-0 h-1 w-full rounded-full ${
									darkMode ? 'bg-white' : 'bg-slate-300'
								}`}
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
