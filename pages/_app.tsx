import { useState, useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	const { scrollYProgress } = useScroll()
	const [currentScrollPercent, setCurrentScrollPercent] = useState(0)
	const [scrollDirection, setScrollDirection] = useState(null)
	const [navReactsToScroll, setNavReactsToScroll] = useState(true)
	const [navVisible, setNavVisible] = useState(true)
	const [darkMode, setDarkMode] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)

	const numSectionsRef = useRef(5)

	useEffect(() => {
		return scrollYProgress.onChange((currentYProgress) => {
			if (!navReactsToScroll) return
			// prevent immediate Navbar invisibility on page load due to micro layout shift
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

	//	wait 0.5s after user stops scrolling to disable responsive Navbar visibility
	useEffect(() => {
		const userScrollingTimeout = setTimeout(() => {
			setNavReactsToScroll(false)
		}, 500)

		return () => clearTimeout(userScrollingTimeout)
	}, [currentScrollPercent])

	// autoscroll section into view after userScrollingTimeout, re-enable responsive Navbar after 1s
	useEffect(() => {
		if (navReactsToScroll) return
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
			setScrollDirection(null)
			setNavReactsToScroll(true)
		}, 1000)

		return () => clearTimeout(resumeNavbarResponsivenessTimeout)
	}, [navReactsToScroll, currentScrollPercent])

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
			<Component
				{...pageProps}
				navVisible={navVisible}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				showDropdown={showDropdown}
				setShowDropdown={setShowDropdown}
			/>
		</>
	)
}

export default MyApp
