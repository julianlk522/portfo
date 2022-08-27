import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Work from '../components/Work'
import Contact from '../components/Contact'
import cloud from '../public/Cloud.svg'
import curvedArrow from '../public/curved-arrow-right.png'

export default function Home() {
	const [hueCoef, setHueCoef] = useState<number>(0)
	const { scrollYProgress } = useScroll()

	const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0])
	return (
		<>
			<motion.div
				className='bg-mainBgFaded bg-cover h-full pt-16 px-32 flex flex-col justify-center relative'
				style={{ opacity: opacityTransform }}
			>
				<Head>
					<title>Julian's Portfolio</title>
					<meta
						name='A site where you can find info about me and my work as a web developer'
						content='Created with NextJS'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main
					id='hero'
					className='flex justify-between'
					onMouseMove={(e: React.MouseEvent) => {
						setHueCoef((prev) => prev + e.movementX / 4)
						document.getElementById(
							'hueRotateRef'
						).style.filter = `hue-rotate(${hueCoef}deg)`
					}}
				>
					<section
						id='leftSection'
						className='flex flex-col h-full min-w-1/2 grow'
					>
						<div id='welcomeContainer' className='flex'>
							<h2 className='text-8xl'>Welcome</h2>
							<div className='relative self-center ml-16 w-8 h-8 rounded-full border-8 border-opacity-20 border-[#00d8ff] after:absolute after:top-[-150%] after:left-[-150%] after:w-16 after:h-16 after:rounded-full after:border-8 after:border-opacity-20 after:border-[#00d8ff] before:absolute before:top-[-250%] before:left-[-250%] before:w-24 before:h-24 before:rounded-full before:border-8 before:border-opacity-20 before:border-[#00d8ff]'></div>
						</div>
						<h3 className='text-4xl ml-[50%] mt-24'>to the</h3>
						<h2 className='ml-[25%] mt-24 relative text-8xl bg-tomatoToLightPink text-transparent bg-clip-text after:absolute after:top-[50%] after:left-[-75%] after:w-96 after:h-96 after:rounded-full after:border-[12px] after:border-opacity-10 after:border-[#00d8ff] drop-shadow-lg'>
							frontier
						</h2>
						<h3 className='text-5xl mt-24'>of web development.</h3>
					</section>
					<section
						id='rightSection'
						className='flex flex-col justify-between items-center h-full max-w-[50vw] pt-[10%]'
					>
						<div id='hueRotateRef'>
							<Image src={cloud} alt='illustration' />
						</div>
						<Image
							src={curvedArrow}
							alt='arrow to continue button'
							className='rotate-[25deg] -translate-x-1 opacity-50'
						/>
						<Link passHref href='#workContainer'>
							<motion.button
								id='continueButton'
								className='text-xl text-white w-1/2 h-16 rounded-xl bg-gradient-to-r from-[#FF5B23] to-[#ffacc6] border-2 border-[#ffacc6] drop-shadow-mediumDark'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								Continue
							</motion.button>
						</Link>
					</section>
				</main>

				{/* <h1>Hi there, welcome to my website!</h1>

			<article>
				<h2>About Me</h2>
				<p>
					I'm a full stack web developer located in NC, USA with a
					passion for creative design and puzzle solving.
				</p>
			</article>

			<article>
				<h3>Contact</h3>
				<p>
					If you have an ambitious full-stack project idea, I can help
					you bring it to life using modern best practices and
					meticulous analysis of end-to-end user experience. Let's
					work together! Please reach out to me using any of the
					contact info found in this section and I will follow up as
					quickly as I can.
				</p>
			</article>

			<p>All questions and other feedback are welcome!</p> */}
			</motion.div>
			<Work />
			<Contact />
		</>
	)
}
