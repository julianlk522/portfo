import React from 'react'
import { motion } from 'framer-motion'
import styles from './NavDropdownButton.module.css'

const NavDropdownButton = ({ showDropdown }) => {
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
			className='h-full max-w-full'
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
