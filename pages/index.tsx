import React from 'react'
import Head from 'next/head'
import Welcome from '../components/Welcome/Welcome'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Work from '../components/Work/Work'
import Contact from '../components/Contact/Contact'

export default function Index({ darkMode }) {
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

			<Welcome darkMode={darkMode} />
			<About darkMode={darkMode} />
			<Skills darkMode={darkMode} />
			<Work darkMode={darkMode} />
			<Contact darkMode={darkMode} />
		</>
	)
}
