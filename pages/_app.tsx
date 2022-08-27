import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ContextProvider } from '../context/pageContext'

function MyApp({ Component, pageProps }) {
	const [navVisible, setNavVisible] = useState(false)
	const [currentScrollY, setcurrentScrollY] = useState(0)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY < currentScrollY) {
				setNavVisible(true)
			} else if (window.scrollY > currentScrollY) {
				setNavVisible(false)
			}
			return setcurrentScrollY(window.scrollY)
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [currentScrollY])
	return (
		<ContextProvider>
			<>
				<Navbar navVisible={navVisible} />
				<Component {...pageProps} />
			</>
		</ContextProvider>
	)
}

export default MyApp
