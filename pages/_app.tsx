import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	const [currentScrollY, setcurrentScrollY] = useState(0)
	const [navVisible, setNavVisible] = useState(false)
	const [userScrolling, setUserScrolling] = useState(false)

	//	note: useScroll seems not to allow you to set state to the current progress (percent or pixels) using a useEffect dependency nor with an onChange listener per the example here in the FM docs: https://www.framer.com/docs/use-scroll/##page-scroll. So a scroll listener on the window object seemed necessary to set currentScrollY state

	useEffect(() => {
		const handleNavVisibility = () => {
			if (window.scrollY < currentScrollY) {
				setNavVisible(true)
			} else if (window.scrollY > currentScrollY) {
				setNavVisible(false)
			}
			return setcurrentScrollY(window.scrollY)
		}
		window.addEventListener('scroll', handleNavVisibility)

		return () => {
			window.removeEventListener('scroll', handleNavVisibility)
		}
	}, [currentScrollY])

	useEffect(() => {
		if (!userScrolling) setUserScrolling(true)
		const scrollTimeout = setTimeout(() => {
			setUserScrolling(false)
		}, 500)

		return () => clearTimeout(scrollTimeout)
	}, [currentScrollY])

	return (
		<>
			<Navbar navVisible={navVisible} />
			<Component
				{...pageProps}
				currentScrollY={currentScrollY}
				userScrolling={userScrolling}
			/>
		</>
	)
}

export default MyApp
