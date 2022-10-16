import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	const [currentScrollY, setCurrentScrollY] = useState(0)
	const [prevScrollY, setPrevScrollY] = useState(0)
	const [navReactsToScroll, setNavReactsToScroll] = useState(true)
	const [navVisible, setNavVisible] = useState(true)
	const [darkMode, setDarkMode] = useState(false)

	//	set currentScrollY to window.scrollY, show or hide navbar according to increase or decrease in currentScrollY
	useEffect(() => {
		const updateNavVisibility = () => {
			if (!navReactsToScroll) {
				return
			}
			if (currentScrollY <= prevScrollY) {
				setNavVisible(true)
			} else {
				setNavVisible(false)
			}
			setPrevScrollY(currentScrollY)
		}

		window.addEventListener('scroll', () => {
			setCurrentScrollY(window.scrollY)
			updateNavVisibility()
		})

		return () => {
			window.removeEventListener('scroll', () => {
				setCurrentScrollY(window.scrollY)
				updateNavVisibility()
			})
		}
	}, [])

	//	wait 0.5s after user stops scrolling to autoscroll section into view, re-enable reactive navbar visibility after 1s
	useEffect(() => {
		const scrollNearestSectionIntoView = () => {
			const numSections = 4
			const documentHeight =
				document.documentElement.clientHeight * numSections

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

		const userScrollingTimeout = setTimeout(() => {
			scrollNearestSectionIntoView()
			setNavReactsToScroll(false)
			setTimeout(() => {
				setNavReactsToScroll(true)
			}, 1000)
		}, 500)

		return () => clearTimeout(userScrollingTimeout)
	}, [currentScrollY])

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
			/>
			<Component {...pageProps} darkMode={darkMode} />
		</>
	)
}

export default MyApp
