import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	const { scrollYProgress } = useScroll()
	const [currentScrollPercent, setCurrentScrollPercent] = useState(0)
	const [scrollDirection, setScrollDirection] = useState(null)
	const [navReactsToScroll, setNavReactsToScroll] = useState(true)
	const [navVisible, setNavVisible] = useState(true)
	const [darkMode, setDarkMode] = useState(false)
	const [showModal, setShowModal] = useState(false)

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
			const numSections = 4

			if (currentScrollPercent < 1 / (2 * (numSections - 1))) {
				return window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
			} else if (
				currentScrollPercent >= 1 / (2 * (numSections - 1)) &&
				currentScrollPercent < 3 / (2 * (numSections - 1))
			) {
				return document
					.getElementById('aboutContainer')
					.scrollIntoView({ behavior: 'smooth' })
			} else if (
				currentScrollPercent >= 3 / (2 * (numSections - 1)) &&
				currentScrollPercent < 5 / (2 * (numSections - 1))
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

	return (
		<>
			<Toaster
				position='bottom-center'
				toastOptions={{
					duration: 5000,
					style: {
						marginBottom: '1rem',
						background: darkMode ? 'rgba(255,255,255,0.1)' : '',
						color: darkMode ? 'white' : '',
					},
				}}
			/>
			<Navbar
				navVisible={navVisible}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			<Component
				{...pageProps}
				darkMode={darkMode}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</>
	)
}

export default MyApp
