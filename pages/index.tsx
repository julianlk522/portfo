import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Work from '../components/Work/Work'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import DropdownMenu from '../components/Navbar/DropdownMenu'
import { AnimatePresence, motion } from 'framer-motion'
import NavDropdownButton from '../components/Navbar/NavDropdownButton'
import Welcome from '../components/Welcome/Welcome'
import Skills from '../components/Skills/Skills'

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
			/>

			<div
				id='dropdownButtonWrapper'
				className={`fixed top-5 right-8 z-[2] flex h-6 w-6 items-center justify-center dark:text-white sm:right-16 ${
					showModal ? 'text-white' : 'opacity-60'
				}`}
				onClick={() => setShowModal((prev) => !prev)}
			>
				<NavDropdownButton showModal={showModal} />
			</div>

			<AnimatePresence>
				{showModal && <DropdownMenu setShowModal={setShowModal} />}
			</AnimatePresence>
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
							className='absolute inset-0 z-[-1] h-[500vh] w-full'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							style={{
								backgroundColor: 'rgb(30 41 59)',
							}}
						></motion.div>
					)}
				</AnimatePresence>
				<motion.div
					id='modalBlurWrapper'
					animate={showModal ? { filter: 'blur(4px)' } : {}}
				>
					<Welcome darkMode={darkMode} />
					<About darkMode={darkMode} />
					<Skills darkMode={darkMode} />
					<Work darkMode={darkMode} />
					<Contact darkMode={darkMode} />
				</motion.div>
			</div>
		</>
	)
}
