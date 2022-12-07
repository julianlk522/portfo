import React, { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const SvgPhoto = ({ darkMode }) => {
	const [inView, setInView] = useState(false)
	const bgControls = useAnimationControls()

	const svgVariants = {
		hidden: {},
		shown: {
			transition: {
				staggerChildren: 0.02,
				delayChildren: 0.25,
			},
		},
	}

	const pathVariants = {
		hidden: {
			opacity: 0,
		},
		shown: {
			opacity: 1,
		},
	}

	const bgVariants = {
		hidden: {
			opacity: 0,
		},
		shown: {
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	}

	useEffect(() => {
		if (inView) {
			bgControls.start('shown')
		} else {
			bgControls.set('hidden')
		}
	}, [inView, bgControls])

	useEffect(() => {
		if (darkMode) {
			bgControls.start('shown')
		}
	}, [darkMode, bgControls])

	return (
		<motion.svg
			className='h-full max-h-[40vh] w-min min-w-0 overflow-visible text-primaryBlue'
			xmlns='http://www.w3.org/2000/svg'
			fillRule='evenodd'
			clipRule='evenodd'
			viewBox='37 24 237 222'
			variants={svgVariants}
			initial='hidden'
			whileInView='shown'
			onViewportEnter={() => setInView(true)}
			onViewportLeave={() => setInView(false)}
		>
			{darkMode && (
				<motion.rect
					className='blur-3xl'
					width='150%'
					//  1.5 * (237 / 222) = 1.60135135
					height='160.14%'
					rx='100%'
					ry='100%'
					x='-7.52%'
					y='-15.04%'
					fill='currentcolor'
					fillOpacity='0.2'
					variants={bgVariants}
					initial='hidden'
					animate={bgControls}
				/>
			)}
			<g transform='translate(0.000000,245.000000) scale(0.100000,-0.100000)'>
				<motion.path
					variants={pathVariants}
					d='M1331 2062 c32 -25 114 -72 124 -72 5 0 -9 13 -31 29 -21 16 -41 28
            -43 26 -2 -3 -15 5 -29 15 -13 11 -29 20 -35 20 -5 0 1 -8 14 -18z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1677 1995 c19 -19 37 -35 40 -35 2 0 -8 16 -23 35 -14 19 -32 35
            -39 35 -7 0 3 -16 22 -35z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1580 1964 c0 -4 7 -12 15 -18 12 -9 9 -11 -16 -12 -17 -1 -25 2 -19
            6 7 5 2 9 -14 12 -15 3 -24 3 -21 -1 3 -3 -33 -11 -80 -18 -95 -14 -114 -21
            -94 -34 13 -9 32 -7 119 8 69 12 122 7 240 -21 47 -11 67 -12 75 -4 7 8 6 9
            -2 4 -8 -5 -11 -2 -7 7 3 8 -2 20 -11 27 -10 8 -15 9 -15 1 0 -6 -4 -11 -10
            -11 -5 0 -7 7 -4 15 5 11 2 13 -9 9 -10 -3 -13 -12 -9 -22 5 -15 4 -15 -12 0
            -19 20 -63 34 -73 24 -3 -3 -12 3 -20 14 -14 19 -33 27 -33 14z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1080 1935 c0 -2 9 -9 20 -15 24 -13 50 -2 29 11 -15 9 -49 12 -49 4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1328 1933 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1795 1911 c-6 -11 33 -41 55 -41 13 0 13 -1 0 -10 -10 -6 -11 -10
            -2 -10 6 0 12 -7 12 -15 0 -9 11 -21 25 -27 14 -6 25 -18 25 -27 0 -14 -2 -14
            -11 -1 -9 12 -10 12 -5 -3 3 -10 6 -21 6 -23 0 -3 5 -2 11 2 8 4 9 -1 4 -16
            -6 -19 -4 -22 10 -16 17 6 17 5 0 -20 -16 -25 -16 -29 0 -80 19 -62 32 -70 31
            -20 -1 19 -4 32 -8 29 -5 -2 -8 3 -8 12 0 9 -4 13 -10 10 -6 -3 -10 4 -10 17
            0 17 3 19 9 9 15 -23 19 51 5 85 -7 17 -10 34 -7 38 4 3 -1 6 -10 6 -10 0 -14
            5 -11 15 4 9 0 15 -10 15 -8 0 -22 12 -30 28 -8 15 -15 23 -16 17 0 -5 -7 1
            -16 13 -16 23 -29 28 -39 13z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1223 1848 c-13 -6 -23 -17 -23 -24 0 -7 -8 -15 -17 -17 -14 -4 -12
            -5 5 -6 12 0 22 4 22 10 0 6 10 19 23 30 25 21 22 23 -10 7z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1960 1688 c0 -23 3 -29 9 -19 8 12 4 51 -5 51 -2 0 -4 -15 -4 -32z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1736 1502 c-15 -3 -16 -6 -5 -14 10 -7 9 -8 -6 -2 -11 4 -39 9 -63
            12 -35 3 -45 0 -62 -19 -33 -40 -26 -45 53 -39 123 10 204 4 222 -14 24 -23
            49 -22 36 3 -16 28 -80 81 -99 81 -15 0 -15 -2 -2 -10 13 -9 13 -10 0 -11 -23
            -2 -44 2 -50 10 -3 4 -14 5 -24 3z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1530 1479 c0 -8 10 -25 21 -39 l21 -25 -6 28 c-5 20 -3 27 9 27 8 0
            15 4 15 8 0 5 -7 9 -15 9 -8 0 -15 -5 -15 -10 0 -5 -7 -4 -15 3 -12 10 -15 10
            -15 -1z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1619 1379 c-13 -11 -18 -18 -11 -14 57 29 65 35 51 35 -9 0 -27 -9
            -40 -21z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1795 1387 c23 -16 55 -28 55 -22 0 6 -56 35 -67 35 -4 0 1 -6 12
            -13z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1633 1359 c-34 -22 -46 -46 -17 -35 9 3 20 6 25 6 5 0 8 5 7 12 -2
            6 5 14 15 16 10 2 17 -2 17 -11 0 -8 7 -18 16 -21 8 -3 12 -2 9 4 -3 6 5 10
            19 10 14 0 26 5 26 10 0 6 7 10 16 10 8 0 12 -4 9 -10 -4 -6 11 -10 37 -9 l43
            1 -40 19 c-55 26 -140 25 -182 -2z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2049 1371 c8 -5 9 -11 3 -15 -6 -3 -6 -24 0 -58 8 -40 7 -54 -4 -63
            -14 -10 -58 -87 -58 -100 0 -4 12 4 27 19 14 14 28 24 31 21 3 -3 0 -11 -6
            -17 -7 -7 -12 -19 -12 -28 0 -9 -9 -33 -20 -55 -11 -22 -20 -41 -20 -42 0 -8
            30 -2 35 7 22 35 63 294 52 324 -4 9 -14 16 -24 16 -14 0 -15 -2 -4 -9z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1310 1363 c8 -3 24 -10 35 -15 20 -9 20 -9 1 6 -11 9 -27 16 -35 15
            -14 0 -14 -1 -1 -6z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1154 1326 l-35 -34 63 1 c35 0 55 2 46 4 -10 3 -18 9 -18 14 0 12
            27 12 34 0 7 -10 44 -3 64 12 11 8 16 3 14 -14 -1 -4 10 -6 23 -6 32 0 32 15
            -1 27 -36 14 -93 12 -147 -4 -26 -8 -47 -12 -47 -10 0 2 15 13 33 24 17 11 26
            20 19 20 -7 0 -29 -15 -48 -34z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1406 1344 c8 -4 9 -17 2 -46 -11 -52 -4 -61 12 -13 13 39 8 65 -12
            64 -9 0 -9 -2 -2 -5z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1635 1290 c11 -5 29 -8 40 -8 16 0 15 2 -5 8 -34 11 -60 11 -35 0z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1250 1261 c-36 -4 -49 -8 -37 -13 17 -7 103 4 114 16 4 3 0 5 -8 4
            -8 -1 -39 -4 -69 -7z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1639 1127 c7 -10 11 -30 9 -47 -4 -26 -3 -29 9 -17 16 15 4 59 -19
            73 -10 6 -10 4 1 -9z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1550 1040 c-11 -7 -6 -10 20 -10 19 0 42 5 50 10 11 7 6 10 -20 10
            -19 0 -42 -5 -50 -10z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1780 1033 c14 -9 35 -25 48 -36 12 -11 22 -15 22 -9 0 12 -68 62
            -85 62 -5 0 2 -7 15 -17z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1357 1024 c8 -4 9 -13 1 -36 -8 -24 -8 -32 3 -39 19 -12 62 -11 54
            0 -3 5 -1 12 5 16 5 3 10 2 10 -3 0 -5 13 -12 29 -14 28 -4 28 -3 19 24 -11
            31 -62 59 -107 57 -14 0 -21 -3 -14 -5z m43 -59 c-7 -8 -16 -12 -21 -9 -16 9
            -10 20 12 21 17 2 18 -1 9 -12z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1209 1000 c-31 -26 -15 -26 18 0 14 11 21 20 15 20 -5 0 -20 -9 -33
            -20z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1550 1005 c-1 -5 -2 -13 -2 -16 1 -4 -8 -5 -18 -2 -11 3 -20 1 -20
            -5 0 -6 -3 -17 -6 -25 -5 -13 4 -15 48 -14 29 1 58 5 63 9 6 3 32 6 58 5 27 0
            51 3 55 9 12 17 32 15 25 -3 -5 -13 -2 -15 11 -10 10 4 15 3 11 -4 -4 -5 -1
            -16 5 -24 10 -12 9 -15 -5 -15 -16 0 -16 -1 0 -27 12 -18 14 -28 7 -31 -16 -5
            -15 -20 2 -37 12 -12 15 -11 21 13 17 61 15 94 -6 99 -18 5 -18 7 -5 28 15 22
            12 35 -6 35 -5 0 -6 -6 -2 -12 5 -9 2 -8 -9 1 -10 8 -20 11 -24 8 -3 -4 -12
            -2 -18 3 -9 7 -16 6 -25 -5 -14 -17 -30 -20 -30 -4 0 5 6 7 13 3 7 -4 9 -3 4
            2 -5 5 -9 7 -10 5 -1 -2 -13 1 -26 8 -21 12 -23 11 -18 -3 8 -20 0 -21 -19 -1
            -20 20 -44 19 -44 -1 0 -8 4 -13 9 -10 5 4 7 -3 4 -13 -7 -27 -31 -15 -36 17
            -2 15 -5 23 -7 17z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1240 975 c-14 -7 -23 -15 -21 -17 2 -2 -1 -13 -8 -26 -12 -23 -12
            -23 12 -8 13 9 26 13 29 10 4 -3 21 3 40 12 18 10 37 17 41 16 5 -1 6 2 3 7
            -4 5 0 12 6 15 7 3 0 2 -17 -1 -16 -3 -31 -10 -33 -15 -2 -4 -8 -8 -13 -8 -6
            0 -8 4 -4 9 10 17 -9 20 -35 6z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1687 920 c-20 -4 -41 -11 -45 -15 -4 -5 1 -5 11 -2 9 4 17 2 17 -3
            0 -6 -7 -10 -15 -10 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -18 0 -20 36 -2
            44 6 4 -19 4 -58 1 -38 -3 -94 -5 -123 -5 -33 0 -51 -4 -47 -10 4 -6 11 -8 16
            -4 5 3 16 1 24 -6 9 -7 15 -8 20 0 4 6 12 7 24 1 10 -6 23 -6 32 0 22 14 39
            11 39 -8 0 -14 3 -13 16 5 20 29 34 28 34 -3 0 -36 -64 -52 -137 -34 -29 7
            -53 16 -53 21 0 5 -5 6 -10 3 -13 -8 -38 17 -32 33 2 8 -9 12 -37 12 -23 0
            -41 -2 -41 -5 0 -10 93 -64 101 -59 5 3 9 -1 9 -8 0 -8 8 -15 18 -16 122 -13
            145 -13 155 -3 6 6 21 11 34 11 13 0 23 4 23 9 0 5 12 14 28 20 26 10 82 54
            82 66 0 6 0 6 -53 -5z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1220 869 c0 -27 4 -48 9 -45 12 8 22 -36 11 -49 -5 -6 -5 -17 0 -25
            8 -13 10 -12 10 3 0 15 11 21 32 18 4 0 5 6 2 14 -4 8 -11 15 -18 15 -6 0 -12
            16 -13 35 -2 20 2 35 8 35 6 0 3 7 -5 16 -9 8 -14 20 -11 25 4 5 -1 9 -9 9
            -12 0 -16 -11 -16 -51z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1840 806 c0 -8 7 -21 15 -29 13 -13 13 -16 0 -27 -12 -10 -15 -10
            -16 1 0 8 -5 2 -10 -13 -6 -16 -22 -31 -40 -37 -16 -5 -29 -16 -29 -24 0 -8
            -11 -27 -25 -43 -14 -16 -25 -33 -25 -37 0 -5 -4 -5 -10 -2 -5 3 -10 -1 -10
            -9 0 -21 -9 -20 -27 2 -13 16 -13 15 -4 -4 6 -12 6 -26 0 -35 -5 -7 -9 -10 -9
            -5 0 5 -6 3 -13 -3 -22 -18 -96 -41 -102 -31 -3 5 -18 5 -35 0 -19 -5 -30 -5
            -30 1 0 5 -6 9 -12 7 -19 -3 -58 25 -58 42 0 13 -1 13 -10 0 -7 -11 -10 -11
            -10 -2 0 7 -5 10 -10 7 -7 -4 -9 3 -5 22 5 19 4 24 -3 14 -14 -20 -30 -6 -43
            39 -7 22 -16 37 -20 34 -9 -5 -13 9 -10 33 1 8 -5 10 -16 6 -15 -6 -16 -4 -5
            9 10 13 9 15 -13 10 -28 -5 -31 -14 -11 -35 8 -7 37 -48 66 -91 28 -42 62 -82
            73 -87 12 -5 33 -17 47 -25 41 -24 165 -14 215 18 59 37 255 254 255 282 0 5
            -6 1 -14 -10 -14 -18 -15 -18 -25 9 -11 29 -21 35 -21 13z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1730 799 c-12 -8 -9 -9 11 -5 19 4 29 1 33 -11 4 -9 9 -13 13 -10 8
            8 -16 37 -31 37 -6 0 -18 -5 -26 -11z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1909 758 c-7 -201 -4 -192 -138 -426 -40 -70 -63 -118 -53 -113 9 4
            24 6 32 4 10 -3 11 -2 4 4 -14 10 -10 42 7 57 9 8 10 8 5 -1 -4 -7 -2 -13 3
            -13 6 0 10 10 8 23 -1 13 3 21 11 19 6 -1 11 4 10 10 -2 7 3 12 11 10 12 -3
            12 0 1 12 -8 11 -9 16 -1 16 6 0 14 12 17 26 4 16 12 23 20 20 15 -6 15 -5 19
            32 1 13 11 33 22 45 11 12 18 28 15 36 -2 8 0 11 5 8 5 -3 10 -1 11 6 5 39 9
            54 15 64 4 7 6 22 3 35 -3 13 -7 42 -10 65 -5 35 -4 41 9 37 10 -4 15 0 15 12
            0 17 1 16 15 -2 8 -10 15 -14 15 -7 0 17 50 -8 50 -26 0 -11 3 -11 15 -1 12
            10 19 10 27 2 8 -8 17 -8 31 0 17 8 19 8 14 -6 -3 -8 -2 -18 4 -21 5 -4 9 -3
            8 2 -4 20 3 21 34 4 17 -10 44 -21 60 -25 15 -3 27 -13 27 -21 0 -8 6 -15 13
            -15 20 0 57 -54 47 -70 -6 -10 -9 -10 -13 1 -2 8 -5 1 -5 -16 -1 -16 -2 -39
            -2 -49 -1 -11 -17 -33 -37 -50 -68 -58 -97 -87 -109 -112 -7 -13 -10 -24 -7
            -24 7 0 73 72 73 80 0 4 16 15 35 26 19 10 35 22 35 26 0 14 21 9 72 -17 27
            -14 54 -23 59 -19 5 3 9 0 9 -6 0 -6 4 -9 9 -5 5 3 13 0 16 -6 4 -5 13 -8 20
            -5 7 2 29 -6 48 -20 20 -13 41 -24 46 -24 6 0 11 -5 11 -11 0 -8 6 -7 17 2 15
            12 16 12 11 -2 -5 -13 0 -16 25 -15 31 2 57 -13 57 -32 0 -6 4 -12 10 -14 5
            -1 12 -34 14 -73 3 -53 0 -74 -12 -87 -14 -16 -14 -18 1 -18 10 0 14 -5 11
            -15 -4 -8 -10 -12 -15 -9 -12 7 -11 0 2 -30 7 -14 18 -27 25 -30 12 -4 14 23
            14 153 0 142 -2 159 -17 164 -59 18 -175 67 -200 84 -15 11 -46 23 -69 26 -47
            8 -144 46 -144 57 0 4 11 15 25 24 30 19 33 59 8 96 -48 73 -105 112 -180 124
            -23 3 -81 19 -130 36 -48 16 -94 30 -100 30 -8 0 -14 -16 -14 -42z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1740 755 c-11 -13 -8 -15 21 -14 19 1 26 3 16 6 -9 2 -15 9 -12 14
            10 15 -12 10 -25 -6z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1565 734 c-11 -12 -13 -20 -6 -27 13 -13 61 -18 61 -6 0 5 -7 9 -15
            9 -14 0 -19 12 -16 33 2 11 -6 8 -24 -9z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1443 727 c-3 -6 -1 -7 5 -3 19 12 14 -8 -8 -32 -27 -29 -13 -28 17
            0 19 18 26 20 32 9 7 -10 10 -10 13 -1 3 9 8 8 20 -4 23 -22 26 -20 20 10 -3
            19 -7 22 -13 12 -5 -8 -9 -9 -9 -2 0 15 -69 24 -77 11z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1690 720 c0 -13 5 -18 15 -14 17 7 19 -4 5 -26 -8 -13 -12 -13 -32
            -1 -21 13 -22 13 -9 -2 14 -17 64 -20 54 -3 -3 5 1 14 9 20 14 10 12 14 -13
            28 -28 16 -29 16 -29 -2z'
				/>
				<motion.path
					variants={pathVariants}
					d='M960 310 c15 -21 17 -30 8 -30 -9 -1 -8 -5 4 -14 14 -10 15 -15 5
            -26 -9 -10 -9 -11 1 -5 11 6 12 -1 8 -29 -7 -46 10 -48 18 -2 7 35 -17 114
            -38 128 -24 16 -26 6 -6 -22z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1927 320 c-3 -11 -4 -20 -3 -20 1 0 9 9 19 20 13 15 14 20 3 20 -7
            0 -16 -9 -19 -20z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2087 288 c-29 -42 -64 -78 -71 -71 -3 3 -6 0 -6 -8 -1 -8 -18 -27
            -39 -44 -21 -16 -37 -33 -34 -38 2 -4 -6 -11 -19 -16 -31 -12 -54 -38 -33 -38
            8 0 15 6 15 14 0 7 7 13 15 13 15 0 87 67 139 130 16 19 36 43 44 53 8 9 13
            19 10 22 -3 3 -12 -5 -21 -17z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1778 220 c-1 -5 -15 -11 -29 -12 -25 -2 -26 -4 -16 -33 5 -16 14
            -34 18 -40 5 -5 9 -20 10 -35 0 -14 3 -19 6 -12 2 6 9 10 14 6 5 -3 9 3 9 12
            0 10 -3 14 -7 10 -11 -10 -31 34 -25 56 5 19 44 34 61 23 6 -3 11 -15 11 -26
            0 -24 22 -21 26 4 1 9 -2 15 -7 11 -5 -3 -9 -1 -9 5 0 27 -54 54 -62 31z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1781 166 c-10 -11 -6 -19 15 -40 28 -26 47 -26 38 -1 -3 7 -11 12
            -19 9 -9 -4 -11 2 -8 20 6 28 -8 34 -26 12z'
				/>
				<motion.path
					variants={pathVariants}
					d='M988 125 c2 -14 6 -25 8 -25 2 0 4 11 4 25 0 14 -4 25 -9 25 -4 0 -6
            -11 -3 -25z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1837 35 l-18 -25 100 1 c55 1 98 6 95 11 -3 4 -10 6 -15 2 -5 -3
            -17 0 -26 8 -12 9 -15 9 -9 1 4 -8 2 -13 -8 -13 -8 0 -18 5 -21 10 -4 7 -12 7
            -18 2 -7 -4 -25 -9 -40 -10 -25 -2 -26 0 -17 18 15 28 -1 24 -23 -5z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1017 34 c5 -14 3 -15 -17 -4 -18 10 -21 9 -15 -1 6 -9 2 -11 -13 -7
            -12 4 -22 2 -22 -3 0 -5 20 -9 44 -9 39 0 44 2 39 20 -3 11 -9 20 -14 20 -5 0
            -6 -7 -2 -16z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2037 43 c-14 -13 -6 -33 12 -33 11 0 21 9 24 22 6 22 6 22 -8 4 -13
            -18 -20 -15 -16 7 1 9 -4 9 -12 0z'
				/>
				<motion.path
					variants={pathVariants}
					d='M630 33 c0 -7 -7 -10 -15 -7 -8 4 -15 1 -15 -5 0 -6 17 -11 43 -10
            23 1 33 4 22 6 -11 3 -23 10 -27 17 -6 8 -8 8 -8 -1z'
				/>
				<motion.path
					variants={pathVariants}
					d='M905 30 c-9 -15 -1 -23 21 -18 15 3 16 4 1 16 -11 9 -17 10 -22 2z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1125 32 c-13 -13 -2 -20 30 -19 19 1 35 4 35 8 0 8 -58 18 -65 11z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1327 25 c-5 -11 0 -15 16 -15 12 0 18 4 12 8 -5 4 -13 11 -16 15 -4
            4 -9 1 -12 -8z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2400 31 c0 -6 -27 -9 -64 -8 -35 1 -62 -2 -59 -6 3 -4 36 -7 74 -6
            64 2 83 9 59 24 -5 3 -10 2 -10 -4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2480 31 c0 -5 -8 -12 -17 -14 -10 -3 -6 -4 8 -4 18 1 25 6 22 14 -6
            15 -13 17 -13 4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M739 19 c-10 -6 -7 -9 14 -9 29 0 35 5 14 13 -8 3 -20 1 -28 -4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M808 19 c-8 -6 6 -9 36 -9 27 0 47 2 44 5 -9 9 -66 12 -80 4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1210 18 c0 -4 14 -8 30 -8 17 0 30 3 30 8 0 4 -13 7 -30 7 -16 1
            -30 -3 -30 -7z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1390 20 c0 -5 12 -10 28 -10 21 0 24 2 12 10 -20 13 -40 13 -40 0z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1645 20 c-18 -8 -17 -9 8 -9 15 -1 27 4 27 9 0 12 -8 12 -35 0z'
				/>
				<motion.path
					variants={pathVariants}
					d='M1734 18 c-3 -4 13 -8 35 -8 23 0 41 2 41 4 0 8 -71 12 -76 4z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2120 19 c0 -5 32 -9 72 -9 39 0 69 2 67 4 -9 9 -139 14 -139 5z'
				/>
				<motion.path
					variants={pathVariants}
					d='M2643 13 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z'
				/>
				<motion.path
					variants={pathVariants}
					transition={{
						duration: 2,
					}}
					d='M1425 2200 c-27 -5 -72 -9 -98 -9 -61 -1 -125 -33 -133 -66 -3 -14
            -10 -25 -14 -25 -4 0 -18 -11 -31 -25 -13 -13 -32 -25 -41 -25 -10 0 -18 -5
            -18 -10 0 -6 -11 -15 -25 -20 -16 -6 -25 -17 -25 -31 0 -14 -5 -19 -14 -16
            -24 10 -28 -25 -6 -55 20 -27 20 -33 9 -111 -16 -118 -15 -202 5 -282 10 -38
            21 -96 25 -128 7 -56 6 -59 -16 -68 -28 -10 -28 -11 -4 -90 11 -35 27 -118 36
            -184 10 -83 23 -136 40 -171 27 -55 31 -79 15 -89 -9 -5 -39 -65 -51 -101 -2
            -6 -34 -37 -71 -68 -81 -68 -88 -86 -53 -128 l27 -31 -33 -26 c-46 -37 -275
            -158 -336 -177 -51 -16 -193 -124 -193 -146 0 -5 -9 -23 -21 -39 -20 -29 -23
            -74 -4 -74 6 0 11 10 13 22 2 13 8 23 13 23 6 0 7 -9 4 -20 -5 -14 -2 -20 10
            -20 13 0 15 6 10 30 -7 34 2 73 16 65 5 -4 9 0 9 7 0 20 63 69 82 64 10 -2 21
            0 24 5 3 5 0 9 -7 9 -8 0 -8 4 1 15 7 8 19 15 27 15 8 0 12 4 9 9 -4 5 2 7 13
            4 10 -3 22 0 25 6 10 15 29 14 20 -1 -4 -7 2 -4 14 6 12 11 22 15 22 11 0 -5
            5 -4 12 3 7 7 20 12 29 12 10 0 27 11 37 25 12 15 23 21 27 15 3 -5 12 -10 18
            -10 7 0 6 4 -3 10 -11 7 -7 10 18 10 17 0 32 4 32 9 0 5 -10 7 -22 5 -14 -3
            -7 4 16 17 33 17 43 19 59 10 16 -11 18 -10 13 7 -7 20 20 50 42 46 6 -1 19
            -2 27 -3 8 0 15 -6 15 -12 0 -7 12 -23 26 -36 15 -14 23 -30 20 -39 -3 -8 -2
            -13 2 -10 10 6 82 -67 82 -83 0 -6 13 -19 30 -30 16 -10 27 -21 22 -26 -4 -4
            1 -5 11 -2 9 4 17 2 17 -3 0 -6 -6 -10 -12 -10 -9 0 -10 -3 -2 -8 6 -4 14 -14
            17 -22 4 -12 6 -12 6 2 1 9 6 20 13 24 7 4 8 3 4 -4 -4 -7 -1 -12 10 -12 11 0
            15 -6 11 -20 -3 -11 -1 -18 4 -15 13 9 49 -14 49 -30 0 -8 5 -15 10 -15 6 0
            10 5 10 11 0 5 5 7 10 4 6 -3 10 -1 10 4 0 6 -15 17 -33 24 -25 11 -202 180
            -272 261 -74 85 -73 83 -65 121 7 32 6 34 -8 23 -13 -11 -15 -10 -10 3 4 9 2
            21 -4 27 -8 8 -3 15 18 23 16 7 33 13 38 13 13 1 20 26 7 26 -6 0 -3 8 7 18 9
            10 24 16 32 14 8 -3 12 -1 7 3 -4 5 0 17 10 27 9 10 13 18 9 18 -4 0 2 10 14
            22 11 12 20 27 20 33 0 7 6 12 13 12 11 0 11 -9 4 -43 -8 -32 -7 -59 3 -98 7
            -30 10 -61 7 -70 -4 -9 -3 -16 1 -16 5 0 16 -21 25 -48 37 -102 171 -297 266
            -389 61 -59 81 -73 106 -73 28 0 34 5 51 43 10 23 31 64 47 91 15 27 26 50 24
            52 -2 3 -28 -1 -57 -7 -65 -14 -140 -6 -214 22 -72 28 -95 51 -147 152 -42 81
            -42 82 -50 222 -4 77 -5 142 -3 144 2 3 -6 15 -18 28 -12 13 -18 23 -14 23 4
            0 0 10 -8 21 -8 12 -12 28 -9 36 3 8 2 18 -3 22 -25 17 -54 116 -69 231 -9 68
            -20 129 -25 135 -12 15 0 86 17 103 7 8 11 18 8 23 -4 5 -1 9 5 9 6 0 9 4 5 9
            -3 6 3 14 12 20 10 6 14 11 8 13 -32 7 178 12 219 5 26 -5 51 -6 54 -3 3 4
            -10 20 -29 37 -33 30 -36 31 -106 26 -39 -3 -81 -11 -93 -17 -16 -9 -24 -9
            -29 -1 -4 7 -18 0 -38 -18 l-32 -29 3 143 c3 140 3 143 37 204 18 33 37 61 41
            61 5 0 8 7 8 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15 0 -13 -4 -14 -21 -5
            -11 7 -28 9 -36 6 -12 -5 -13 -4 -5 7 7 8 9 17 4 21 -4 4 1 12 11 18 18 9 18
            10 0 24 -10 7 -14 14 -9 14 5 0 3 7 -4 15 -17 21 -3 58 21 52 10 -3 17 0 16 7
            -1 6 10 12 25 14 19 2 25 8 21 18 -3 8 -1 14 5 14 6 0 25 16 43 35 18 18 37
            32 43 29 6 -3 2 2 -8 10 -11 9 -18 16 -15 17 2 0 18 3 34 5 17 3 38 5 48 5 9
            0 17 4 17 9 0 13 32 17 58 8 15 -5 21 -4 17 2 -7 11 -8 11 63 15 29 1 55 -2
            58 -7 3 -4 10 -5 16 -2 5 3 28 -13 51 -37 22 -24 35 -34 29 -22 -7 12 -17 25
            -22 28 -19 12 -10 22 16 17 14 -2 42 -21 62 -41 20 -20 40 -35 44 -34 5 2 8
            -3 8 -11 0 -9 -7 -13 -20 -11 -11 2 -20 -1 -20 -6 0 -6 12 -9 28 -7 16 2 26
            -2 25 -9 -2 -7 7 -10 20 -7 13 2 32 -3 43 -12 10 -8 13 -12 5 -8 -9 5 -12 3
            -7 -5 4 -6 12 -9 17 -6 5 4 9 -1 9 -9 0 -8 4 -18 10 -21 7 -4 7 3 0 20 -6 15
            -10 29 -10 33 0 13 60 -53 61 -67 1 -9 4 -5 8 9 l7 25 7 -28 c4 -15 11 -25 16
            -23 5 3 8 -1 7 -10 0 -9 8 -21 19 -28 11 -6 22 -12 25 -14 2 -2 -2 -7 -9 -11
            -10 -7 -9 -10 8 -16 22 -7 28 -29 12 -40 -6 -3 -14 3 -20 12 -6 10 -11 14 -11
            9 0 -6 10 -20 22 -33 16 -18 22 -37 23 -78 1 -36 -2 -52 -9 -48 -7 5 -7 2 0
            -8 7 -8 11 -44 10 -84 -4 -105 -5 -119 -13 -111 -4 4 -6 24 -4 45 3 46 -15 64
            -21 21 -2 -16 -1 -84 4 -152 5 -68 5 -166 1 -218 -3 -52 -6 -98 -5 -102 1 -5
            -2 -8 -7 -8 -6 0 -13 -20 -17 -45 -3 -25 -10 -45 -15 -45 -5 0 -9 -5 -9 -11 0
            -5 4 -8 9 -5 4 3 6 -6 3 -20 -3 -18 -7 -22 -13 -13 -5 9 -10 4 -14 -17 -3 -16
            -10 -37 -16 -46 -15 -28 -11 -47 10 -45 34 2 91 203 91 320 0 32 5 91 11 130
            6 40 12 76 13 82 0 5 6 14 13 20 12 10 19 207 15 381 -2 69 -20 132 -47 164
            -7 8 -15 28 -19 44 -4 15 -16 41 -28 57 -19 26 -25 28 -65 22 -37 -5 -43 -3
            -43 12 0 12 -6 16 -19 12 -19 -5 -66 31 -86 67 -11 19 -161 82 -215 89 -19 3
            -57 1 -85 -3z m478 -203 c4 -10 -2 -13 -21 -9 -24 5 -25 6 -7 13 11 4 21 8 21
            8 1 1 4 -5 7 -12z m-803 -196 c0 -5 -6 -14 -14 -21 -12 -9 -15 -8 -13 9 1 20
            27 31 27 12z m-17 -53 c-3 -5 -9 -22 -13 -36 -8 -26 -8 -25 -9 9 -1 25 3 36
            14 36 8 0 12 -4 8 -9z m372 -1586 c0 -5 4 -14 9 -19 5 -5 6 -3 2 5 -9 14 21
            16 77 3 31 -8 37 -7 33 5 -3 8 -1 14 4 14 6 0 10 -4 10 -10 0 -6 9 -6 23 -1
            19 7 24 6 25 -7 2 -38 -20 -61 -55 -60 -18 1 -36 -2 -41 -7 -4 -4 3 -6 15 -3
            12 3 30 0 40 -7 17 -13 17 -14 -2 -29 -22 -17 -55 -21 -55 -8 0 5 -11 14 -25
            20 -17 8 -23 16 -18 28 4 11 2 15 -7 12 -12 -4 -90 58 -90 71 0 4 12 6 28 5
            15 0 27 -6 27 -12z'
				/>
			</g>
		</motion.svg>
	)
}

export default SvgPhoto
