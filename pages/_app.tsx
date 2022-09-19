import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	const [currentScrollY, setCurrentScrollY] = useState(0)
	const [prevScrollY, setPrevScrollY] = useState(0)
	const [navReactsToScroll, setNavReactsToScroll] = useState(true)
	const [navVisible, setNavVisible] = useState(true)
	const [userScrolling, setUserScrolling] = useState(false)
	const [darkMode, setDarkMode] = useState(false)

	//	note: useScroll seems not to allow you to set state to the current progress (percent or pixels) using a useEffect dependency nor with an onChange listener per the example here in the FM docs: https://www.framer.com/docs/use-scroll/##page-scroll. So a scroll listener on the window object seemed necessary to set currentScrollY state

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
			const documentHeight =
				document.getElementById('welcomeContainer').clientHeight * 2

			const currentScrollPercent = currentScrollY / documentHeight

			if (currentScrollPercent <= 0.25) {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
			} else if (currentScrollPercent < 0.75) {
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
