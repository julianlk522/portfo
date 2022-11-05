import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)
	function getWindowDimensions() {
		if (typeof window !== 'undefined') {
			const { innerWidth: width, innerHeight: height } = window
			return {
				width,
				height,
			}
		}
		return { width: 0, height: 0 }
	}

	useEffect(() => {
		function handleWindowResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	return windowDimensions
}
