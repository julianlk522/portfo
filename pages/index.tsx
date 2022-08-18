import Head from 'next/head'
import Image from 'next/image'
import cloud from '../public/Cloud.svg'

export default function Home() {
	return (
		<div className='h-full p-8 flex flex-col justify-center relative overflow-hidden'>
			<Head>
				<title>Julian's Portfolio</title>
				<meta
					name='A site where you can find info about me and my work as a web developer'
					content='Created with NextJS'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main id='hero' className='px-16 mt-16 flex justify-between'>
				<section
					id='textSection'
					className='flex flex-col h-full w-[40vw]'
				>
					<h2 className='text-8xl'>Welcome</h2>
					<h3 className='text-4xl ml-[50%] mt-24'>to the</h3>
					<h2 className='text-8xl ml-[25%] mt-24'>frontier</h2>
					<h3 className='text-4xl mt-24'>of web development.</h3>
					{/* <div
						id='circleSplotch'
						className='bg-[#FFACC6] bg-opacity-20 rounded-full overflow-hidden w-[90vh] h-[90vh] absolute top-[20%] left-[-5%]'
					></div> */}
				</section>
				<section
					id='mediaSection'
					className='flex flex-col justify-between items-center h-full w-[40vw]'
				>
					<Image src={cloud} alt='illustration' layout='intrinsic' />
					<button
						id='continueButton'
						className='text-xl text-white w-1/2 h-16 rounded-xl bg-gradient-to-r from-[#FF5B23] to-[#FFACC6] drop-shadow-mediumDark'
					>
						Click here to Enter
					</button>
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
		</div>
	)
}
