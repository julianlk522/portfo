import React from 'react'
import { motion } from 'framer-motion'

function AboutSpiral({ darkMode, spiralControls, handControls }) {
	const spiralVariants = {
		initial: { strokeWidth: 0, pathLength: 0 },
		hidden: { strokeWidth: 0 },
		visible: {
			strokeWidth: [null, 8, 0, 4],
			pathLength: 1,
			strokeOpacity: [null, 0.1, 0.025, darkMode ? 0.03 : 0.05],
			transition: {
				type: 'spring',
				duration: 3,
			},
		},
	}

	return (
		<motion.svg
			className='absolute top-0 left-[25%] hidden h-full w-full xs:block'
			width='400'
			height='400'
			viewBox='0 0 400 400'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<motion.path
				d='M269.115 283.837C269.622 289.553 258.998 292.684 253.492 283.837C247.54 276.021 251.916 257.873 269.115 252.634C285.314 246.431 310.946 258.338 315.984 283.837C322.403 308.355 303.02 341.431 269.115 346.246C236.263 352.873 195.553 326.036 190.999 283.837C184.097 242.667 218.557 194.564 269.115 190.224C318.692 183.122 374.351 224.975 378.476 283.837C385.818 341.668 336.399 404.791 269.115 408.654C202.824 416.231 132.168 359.352 128.508 283.837C120.711 209.304 185.118 131.244 269.115 127.817C352.052 119.812 437.796 191.62 440.969 283.837C449.242 375.023 369.788 468.111 269.115 471.061C169.454 479.542 68.7531 392.715 66.0154 283.837C57.3159 175.99 151.72 67.8946 269.115 65.4083C385.46 56.4532 501.2 158.307 503.461 283.837C512.646 408.386 403.186 531.419 269.115 533.471C136.096 542.862 5.30842 426.067 3.52302 283.837C-6.09876 142.636 118.34 4.57501 269.115 3'
				stroke='#ffacc6'
				strokeOpacity={darkMode ? '0.025' : '0.05'}
				strokeWidth='0'
				strokeLinecap='round'
				initial='initial'
				animate={spiralControls}
				variants={spiralVariants}
				onAnimationComplete={() => {
					handControls.start('waving')
				}}
			/>
		</motion.svg>
	)
}

export default AboutSpiral
