import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	const [currentScrollY, setCurrentScrollY] = useState(0)
	const [prevScrollY, setPrevScrollY] = useState(0)
	const [navReactsToScroll, setNavReactsToScroll] = useState(true)
	const [navVisible, setNavVisible] = useState(true)
	const [userScrolling, setUserScrolling] = useState(false)
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setCurrentScrollY(window.scrollY)
		})

		return () => {
			window.removeEventListener('scroll', () => {
				setCurrentScrollY(window.scrollY)
			})
		}
	}, [])

	//	userScrolling false after 0.5 seconds of scrolling, return to true after one 1 second
	useEffect(() => {
		setUserScrolling(true)

		const userScrollingTimeout = setTimeout(() => {
			setUserScrolling(false)
			setNavReactsToScroll(false)
			setTimeout(() => {
				setNavReactsToScroll(true)
			}, 1000)
		}, 500)

		return () => clearTimeout(userScrollingTimeout)
	}, [currentScrollY])

	//	update nav visibility on scroll if not automatic scroll
	useEffect(() => {
		if (!navReactsToScroll) {
			return
		} else {
			if (currentScrollY <= prevScrollY) {
				setNavVisible(true)
			} else {
				setNavVisible(false)
			}
		}
		setPrevScrollY(currentScrollY)
	}, [currentScrollY])

	// scroll nearest section into view when user stops scrolling
	useEffect(() => {
		if (userScrolling) return
		else {
			const numSections = 4
			const documentHeight =
				document.getElementById('welcomeContainer').clientHeight *
				numSections

			const currentScrollPercent = currentScrollY / documentHeight

			if (
				currentScrollPercent <
				1 / numSections - 1 / (2 * numSections)
			) {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
			} else if (
				currentScrollPercent <
				2 / numSections - 1 / (2 * numSections)
			) {
				document
					.getElementById('aboutContainer')
					.scrollIntoView({ behavior: 'smooth' })
			} else if (
				currentScrollPercent <
				3 / numSections - 1 / (2 * numSections)
			) {
				document
					.getElementById('workContainer')
					.scrollIntoView({ behavior: 'smooth' })
			} else {
				document
					.getElementById('contactContainer')
					.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [userScrolling])

	//	check for dark mode preferences, assign to localstorage if none
	useEffect(() => {
		if (localStorage.theme) {
			if (localStorage.theme === 'dark') {
				setDarkMode(true)
			} else setDarkMode(false)
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setDarkMode(true)
			localStorage.setItem('theme', 'dark')
		} else {
			setDarkMode(false)
			localStorage.setItem('theme', 'light')
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
			/>
			<Component {...pageProps} darkMode={darkMode} />
		</>
	)
}

export default MyApp
