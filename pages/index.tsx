import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bgImage from '../public/bg.jpg'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Julian's Portfolio</title>
				<meta
					name='A site where you can find info about me and my work as a web developer'
					content='Created with NextJS'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image
				src={bgImage}
				alt='background'
				className='z-[-1]'
				layout='fill'
				objectFit='cover'
				quality={100}
			/>

			<h1>Hi there, welcome to my website!</h1>

			<h2>About Me</h2>
			<p>
				I'm a full stack web developer located in NC, USA with a passion
				for creative design and puzzle solving.
			</p>

			<h2>My Portfolio</h2>
			<p>
				Here you can find links to some of my projects as well as the
				source code. A brief stack summary is provided for each one, if
				you are curious about some of the technologies that I like to
				work with.
			</p>

			<h3>Contact</h3>
			<p>
				If you have an ambitious full-stack project idea, I can help you
				bring it to life using modern best practices and a careful
				engineering of perfect end-to-end user experience. If you're
				interested in working together, please reach out to me using any
				of the contact info found in this section.
			</p>

			<p>All questions and other feedback are welcome!</p>
		</div>
	)
}
