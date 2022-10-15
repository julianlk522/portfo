import React from 'react'
import { motion } from 'framer-motion'

function WelcomeCloud({ cloudControls }) {
	const cloudVariants = {
		hidden: { pathLength: 0 },
		visible: {
			pathLength: 1,
		},
	}

	return (
		<motion.svg
			className='h-full w-full overflow-visible'
			width='1080'
			height='540'
			viewBox='0 0 1080 540'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<motion.path
				d='M831.711 213.082L830.719 218.189L835.862 218.977C931.192 233.578 1004 314.421 1004 411.812C1004 519.521 914.937 607 804.869 607H204.133C94.0616 607 5 519.521 5 411.812C5 304.103 94.0616 216.624 204.133 216.624H204.156H209.077L209.155 211.704C210.668 116.335 290.005 39.3178 387.854 39.3178C431.611 39.3178 471.674 54.7248 502.733 80.2944L506.854 83.6868L509.97 79.3538C542.311 34.3887 595.709 5 656.14 5C754.939 5 834.863 83.5173 834.863 180.168C834.863 191.422 833.781 202.423 831.711 213.082Z'
				stroke='#FFACC6'
				strokeOpacity='1'
				strokeWidth='10'
				variants={cloudVariants}
				transition={{
					duration: 2,
					bounce: 0.5,
					repeat: 2,
					repeatType: 'reverse',
				}}
				animate={cloudControls}
				initial='hidden'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_11_10'
					x1='800'
					y1='0'
					x2='800'
					y2='400'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FF5B23' />
					<stop offset='1' stopColor='#FFACC600' stopOpacity='0' />
				</linearGradient>
			</defs>
		</motion.svg>
	)
}

export default WelcomeCloud
