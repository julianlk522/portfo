import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import cloud from '../public/Cloud.svg'

export default function Home() {
	return (
		<div className='p-8 bg-mainBg h-full flex flex-col justify-center relative overflow-hidden'>
			<Head>
				<title>Julian's Portfolio</title>
				<meta
					name='A site where you can find info about me and my work as a web developer'
					content='Created with NextJS'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main id='hero' className='px-32 mt-16'>
				<h2 className='text-6xl'>Welcome</h2>
				<h3 className='text-5xl ml-[15%] mt-16'>to the</h3>
				<div
					id='cloudContainer'
					className='flex justify-between items-center'
				>
					<h2 className='text-8xl'>FRONTIER</h2>
					<Image src={cloud} alt='illustration' />
				</div>
				<h3 className='text-5xl ml-[15%] my-16'>of web development.</h3>

				<div
					id='circleSplotch'
					className='bg-[#FFACC6] bg-opacity-20 rounded-full overflow-hidden w-[90vh] h-[90vh] absolute top-[20%] left-[-5%]'
				></div>
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
				<h2>My Portfolio</h2>
				<p>
					Here you can find links to some of my projects as well as
					the source code. A brief stack summary is provided for each
					one, if you are curious about some of the technologies that
					I like to work with.
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
		</div>
	)
}
