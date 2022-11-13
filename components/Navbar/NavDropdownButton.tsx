import React from 'react'
import { motion } from 'framer-motion'

const NavDropdownButton = ({ showModal }) => {
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
			animate={showModal ? 'menuShown' : 'menuHidden'}
		>
			<motion.circle
				variants={circleVariants}
				cx='37.5'
				cy='285.5'
				r='37.5'
			/>
			<motion.rect
				animate={
					showModal
						? { rotate: '45deg', y: -150 }
						: { rotate: 0, y: 0 }
				}
				transition={{ duration: 0.25 }}
				x='126'
				y='255'
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
				animate={showModal ? { opacity: 0 } : { opacity: 1 }}
				transition={
					showModal
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
				animate={
					showModal
						? { rotate: '-45deg', y: 100 }
						: { rotate: 0, y: 0 }
				}
				transition={{ duration: 0.25 }}
				x='126'
				y='7'
				width='391'
				height='60'
				rx='30'
			/>
		</motion.svg>
	)
}

export default NavDropdownButton
