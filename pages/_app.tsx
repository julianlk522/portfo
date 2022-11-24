import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar/Navbar'
import NavDropdownButton from '../components/Navbar/NavDropdownButton'
import DropdownMenu from '../components/Navbar/DropdownMenu'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const { scrollYProgress } = useScroll()
	const [currentScrollPercent, setCurrentScrollPercent] = useState(0)
	const [scrollDirection, setScrollDirection] = useState(null)
	const [navReactsToScroll, setNavReactsToScroll] = useState(true)
	const [navVisible, setNavVisible] = useState(true)
	const [darkMode, setDarkMode] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)

	const numSectionsRef = useRef(5)

	//	prevent autoscrolling within first few renders so the page doesn't scroll when the user refreshes or navigates from a different route
	const renderSafetyWindowRef = useRef(0)

	useEffect(() => {
		renderSafetyWindowRef.current = 0
	}, [router.pathname])

	useEffect(() => {
		return scrollYProgress.onChange((currentYProgress) => {
			if (!navReactsToScroll) return
			if (renderSafetyWindowRef.current < 5) {
				renderSafetyWindowRef.current += 1
				return
			}
			// prevent immediate navbar invisibility on page load due to micro layout shift
			if (scrollYProgress.getPrevious() <= 0.01)
				return setNavVisible(true)
			if (scrollYProgress.getPrevious() <= currentYProgress) {
				setScrollDirection('down')
			} else if (scrollYProgress.getPrevious() > currentYProgress) {
				setScrollDirection('up')
			}
			setCurrentScrollPercent(currentYProgress)
		})
	}, [scrollYProgress, navReactsToScroll])

	//	wait 0.5s after user stops scrolling to disables reactive navbar visibility on scroll
	useEffect(() => {
		if (
			scrollDirection === null ||
			router.pathname !== '/' ||
			renderSafetyWindowRef.current < 5
		)
			return
		const userScrollingTimeout = setTimeout(() => {
			setScrollDirection(null)
			setNavReactsToScroll(false)
		}, 500)

		return () => clearTimeout(userScrollingTimeout)
	}, [currentScrollPercent, router.pathname, scrollDirection])

	// autoscroll section into view after previous effect, re-enable reactive navbar after 1s
	useEffect(() => {
		if (navReactsToScroll || router.pathname !== '/') return
		const scrollNearestSectionIntoView = () => {
			if (currentScrollPercent < 1 / (2 * (numSectionsRef.current - 1))) {
				return window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
			} else if (
				currentScrollPercent >=
					1 / (2 * (numSectionsRef.current - 1)) &&
				currentScrollPercent < 3 / (2 * (numSectionsRef.current - 1))
			) {
				return document
					.getElementById('aboutContainer')
					.scrollIntoView({ behavior: 'smooth' })
			} else if (
				currentScrollPercent >=
					3 / (2 * (numSectionsRef.current - 1)) &&
				currentScrollPercent < 5 / (2 * (numSectionsRef.current - 1))
			) {
				return document
					.getElementById('skillsContainer')
					.scrollIntoView({ behavior: 'smooth' })
			} else if (
				currentScrollPercent >=
					5 / (2 * (numSectionsRef.current - 1)) &&
				currentScrollPercent < 7 / (2 * (numSectionsRef.current - 1))
			) {
				return document
					.getElementById('workContainer')
					.scrollIntoView({ behavior: 'smooth' })
			} else {
				return document
					.getElementById('contactContainer')
					.scrollIntoView({ behavior: 'smooth' })
			}
		}

		scrollNearestSectionIntoView()

		const resumeNavbarResponsivenessTimeout = setTimeout(() => {
			setNavReactsToScroll(true)
		}, 1000)

		return () => clearTimeout(resumeNavbarResponsivenessTimeout)
	}, [navReactsToScroll, currentScrollPercent, router.pathname])

	//	show nav based on scrollDirection
	useEffect(() => {
		if (scrollDirection === 'up' && navReactsToScroll) {
			setNavVisible(true)
		} else if (scrollDirection === 'down' && navReactsToScroll) {
			setNavVisible(false)
		}
	}, [scrollDirection, navReactsToScroll])

	//	check for system darkMode preferences
	useEffect(() => {
		if (!localStorage.theme) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localStorage.setItem('theme', 'dark')
				setDarkMode(true)
				document.documentElement.classList.add('dark')
			} else {
				setDarkMode(false)
			}
		} else if (localStorage.theme === 'dark') {
			setDarkMode(true)
			document.documentElement.classList.add('dark')
		}
	}, [])

	//	prevent scroll if modal shown, reactivate scrolling when modal closes
	useEffect(() => {
		if (showDropdown) {
			document.querySelector('html').classList.add('overflow-hidden')
			setShowDropdown(true)
		} else {
			document.querySelector('html').classList.remove('overflow-hidden')
			setShowDropdown(false)
		}
	}, [showDropdown])

	return (
		<>
			<Toaster
				position='bottom-center'
				toastOptions={{
					duration: 5000,
					style: {
						marginBottom: '2rem',
						background: darkMode ? 'rgba(255,255,255,0.1)' : '',
						color: darkMode ? 'white' : '',
					},
				}}
			/>
			<Navbar
				navVisible={navVisible}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				showDropdown={showDropdown}
			/>

			<div
				id='dropdownButtonWrapper'
				className={`fixed top-5 right-8 z-[2] flex h-6 w-6 items-center justify-center dark:text-white sm:right-16 ${
					showDropdown ? 'text-white' : 'opacity-60'
				}`}
				onClick={() => setShowDropdown((prev) => !prev)}
			>
				<NavDropdownButton showDropdown={showDropdown} />
			</div>

			<AnimatePresence>
				{showDropdown && (
					<DropdownMenu setShowDropdown={setShowDropdown} />
				)}
			</AnimatePresence>
			<div
				id='appContainer'
				onClick={() => {
					showDropdown && setShowDropdown(false)
				}}
			>
				<AnimatePresence>
					{darkMode && (
						<motion.div
							id='staticDarkModeBg'
							className='fixed inset-0 h-full w-full'
							style={{
								backgroundColor: 'rgb(30 41 59)',
							}}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						></motion.div>
					)}
				</AnimatePresence>
				<motion.div
					id='dropdownBlurWrapper'
					animate={showDropdown ? { filter: 'blur(4px)' } : {}}
				>
					<Component {...pageProps} darkMode={darkMode} />
				</motion.div>
			</div>
		</>
	)
}

export default MyApp
