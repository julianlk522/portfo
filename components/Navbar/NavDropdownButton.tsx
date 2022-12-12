import React from 'react'
import { motion } from 'framer-motion'
import styles from './NavDropdownButton.module.css'

const NavDropdownButton = ({ showDropdown, setShowDropdown }) => {
	const circleVariants = {
		menuShown: {
			opacity: 0,
			transition: {
				duration: 0.1,
			},
		},
		menuHidden: {
			opacity: 1,
		},
	}

	return (
		<motion.svg
			className={`fixed top-5 right-8 z-[2] flex h-6 w-6 cursor-pointer dark:text-white sm:right-16 ${
				showDropdown ? 'text-white' : 'opacity-60'
			}`}
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			imageRendering='optimizeQuality'
			fillRule='evenodd'
			clipRule='evenodd'
			width='517'
			height='323'
			viewBox='0 0 517 323'
			fill='currentcolor'
			initial='menuHidden'
			animate={showDropdown ? 'menuShown' : 'menuHidden'}
			onClick={() => setShowDropdown((prev) => !prev)}
		>
			<motion.circle
				variants={circleVariants}
				cx='37.5'
				cy='285.5'
				r='37.5'
			/>
			<motion.rect
				className={styles.animatedRect}
				animate={
					showDropdown
						? {
								rotate: '45deg',
								x: '20%',
								y: '-25%',
								origin: 'center',
						  }
						: { rotate: 0, x: 0, y: 0 }
				}
				transition={{ duration: 0.25 }}
				x='126'
				y='7'
				width='391'
				height='60'
				rx='30'
			/>
			<motion.circle
				variants={circleVariants}
				cx='37.5'
				cy='161.5'
				r='37.5'
			/>
			<motion.rect
				animate={showDropdown ? { opacity: 0 } : { opacity: 1 }}
				transition={
					showDropdown
						? {
								duration: 0.1,
						  }
						: {}
				}
				x='126'
				y='131'
				width='391'
				height='60'
				rx='30'
			/>
			<motion.circle
				variants={circleVariants}
				cx='37.5'
				cy='37.5'
				r='37.5'
			/>
			<motion.rect
				className={styles.animatedRect}
				animate={
					showDropdown
						? {
								rotate: '-45deg',
								x: '-25%',
								y: '60%',
								origin: 'center',
						  }
						: { rotate: 0, x: 0, y: 0 }
				}
				transition={{ duration: 0.25 }}
				x='126'
				y='255'
				width='391'
				height='60'
				rx='30'
			/>
		</motion.svg>
	)
}

export default NavDropdownButton
