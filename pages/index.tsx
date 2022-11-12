import React, { useRef } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Work from '../components/Work/Work'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import DropdownMenu from '../components/Navbar/DropdownMenu'
import { AnimatePresence, motion } from 'framer-motion'
import NavDropdownButton from '../components/Navbar/NavDropdownButton'
import Welcome from '../components/Welcome/Welcome'

export default function Index({
	darkMode,
	setDarkMode,
	showModal,
	setShowModal,
	navVisible,
}) {
	return (
		<>
			<Head>
				<title>Julian&apos;s Web Dev Portfolio</title>
				<meta
					name='description'
					content='A site where you can find info about me and my work as a full-stack developer'
					key='desc'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar
				navVisible={navVisible}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				showModal={showModal}
				setShowModal={setShowModal}
			/>

			<div
				id='dropdownButtonWrapper'
				className='fixed top-6 right-6 z-[2] flex h-4 w-4 items-center justify-center dark:text-white md:hidden'
				onClick={() => {
					if (showModal) {
						document
							.querySelector('html')
							.classList.remove('overflow-hidden')
						setShowModal(false)
					} else {
						document
							.querySelector('html')
							.classList.add('overflow-hidden')
						setShowModal(true)
					}
				}}
			>
				<NavDropdownButton />
			</div>

			{showModal && <DropdownMenu setShowModal={setShowModal} />}
			<div
				id='appContainer'
				onClick={() => {
					showModal && setShowModal(false)
				}}
			>
				<AnimatePresence>
					{darkMode && (
						<motion.div
							id='staticDarkModeBg'
							className='absolute inset-0 z-[-1] h-[400vh] w-full'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							style={{
								backgroundColor: 'rgb(30 41 59)',
							}}
						></motion.div>
					)}
				</AnimatePresence>
				<div
					id='modalBlurWrapper'
					className={`${showModal ? 'blur-sm' : ''}`}
				>
					<Welcome darkMode={darkMode} />
					<About darkMode={darkMode} />
					<Work darkMode={darkMode} />
					<Contact darkMode={darkMode} />
				</div>
			</div>
		</>
	)
}
