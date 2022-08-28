import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	const [navVisible, setNavVisible] = useState(false)
	const [currentScrollY, setcurrentScrollY] = useState(0)

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
	return (
		<>
			<Navbar navVisible={navVisible} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
