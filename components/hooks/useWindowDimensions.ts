import React, { useState, useEffect } from 'react'

export default function useWindowDimensions(
	placeholderRef: React.MutableRefObject<any>
) {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	function getWindowDimensions() {
		if (placeholderRef.current) {
			const { clientWidth, clientHeight } = placeholderRef.current
			return { clientWidth, clientHeight }
		}
		return
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
