import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import Footer from '../components/ProjectDetails/Footer'
import headerImg from '../public/projectDetails/chatStationNickname.webp'
import mockupImg from '../public/projectDetails/chatStationMockup.webp'
import deploymentImg from '../public/projectDetails/chatStationDeployed.webp'
import compilerWeirdnessImg from '../public/projectDetails/chatStationCompilerWeirdness.webp'
import mainImg from '../public/projectDetails/chatStationLogin.webp'

function ChatStationDetails({ darkMode }) {
	return (
		<MotionConfig transition={{ duration: 1, ease: 'easeOut' }}>
			<div
				id='chatStationDetails'
				className='relative h-full w-screen overflow-hidden px-8 py-32 text-stone-600 dark:text-white lg:px-16'
			>
				<header className='mb-32 flex flex-col items-center justify-between md:flex-row'>
					<div id='headerText' className='md:w-1/2'>
						<h1
							className='mb-8'
							style={{
								fontSize: 'clamp(3rem, 6vw, 6vh)',
							}}
						>
							ChatStation
						</h1>
						<ul
							id='stackTextItems'
							className='mb-16 flex w-auto space-x-4 text-center text-xs md:space-x-8'
						>
							<li>React.js</li>
							<li>TypeScript</li>
							<li>Express.js</li>
							<li>MySQL</li>
						</ul>
						<div
							id='headerImgFlexWrapperSm'
							className='my-16 flex w-full items-center md:hidden'
						>
							<motion.div
								id='headerImageWrapper'
								className='relative flex max-h-[50vh]'
								style={
									darkMode
										? {
												boxShadow:
													'rgba(255, 255, 255, 5%) 0px 5px 50px',
										  }
										: {
												boxShadow:
													'rgba(0, 0, 0, 25%) 0px 5px 50px',
										  }
								}
								initial={{ x: '25%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
							>
								<Image
									alt="A user's name, nickname, and chosen avatar picture to be used during their chat sessions on ChatStation"
									src={headerImg}
									objectFit='cover'
									objectPosition='top'
									priority
								/>
							</motion.div>
						</div>
						<div className='flex h-auto flex-col space-y-8 px-8 md:w-4/5 md:pr-0'>
							<p></p>
							<p>
								ChatStation is a messaging platform that allows
								any user with an account to find other users
								with accounts and begin communicating. Users can
								easily assign nicknames to any other user to be
								displayed during their conversations together,
								as well as choose an avatar image from a set of
								options that other users will see during their
								conversation.
							</p>
							<p>
								For me this project was mostly made with the
								goal in mind of getting comfortable using a
								relational database alongside a React.js
								frontend, though I also wanted to challenge
								myself to build a functional full-stack
								application using only a UI sketch as a
								reference.
							</p>
						</div>
						<ul
							id='demoLinks'
							className='mt-16 flex w-auto justify-center space-x-8 text-xs md:max-w-[80%] md:pl-8'
						>
							<li>
								<button className='rounded-sm bg-black/60 p-2 font-bold text-white dark:bg-white/80 dark:text-stone-600'>
									<a
										href='https://chat-station-project.netlify.app/'
										target='_blank'
										rel='noreferrer'
									>
										Live demo
									</a>
								</button>
							</li>
							<li>
								<button className='rounded-sm bg-black/60 p-2 font-bold text-white dark:bg-white/80 dark:text-stone-600'>
									<a
										href='https://github.com/julianlk522/chat-app'
										target='_blank'
										rel='noreferrer'
									>
										Source Code
									</a>
								</button>
							</li>
						</ul>
					</div>
					<div
						id='headerImgFlexWrapperMd'
						className='hidden max-w-[45%] items-center md:flex'
					>
						<motion.div
							id='headerImageWrapper'
							className='relative flex max-h-[50vh]'
							style={
								darkMode
									? {
											boxShadow:
												'rgba(255, 255, 255, 5%) 0px 5px 50px',
									  }
									: {
											boxShadow:
												'rgba(0, 0, 0, 25%) 0px 5px 50px',
									  }
							}
							initial={{ x: '25%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
						>
							<Image
								alt="A user's name, nickname, and chosen avatar picture to be used during their chat sessions on ChatStation"
								src={headerImg}
								objectFit='cover'
								objectPosition='top'
								priority
							/>
						</motion.div>
					</div>
				</header>
				<div
					id='centralTextContent'
					className='flex h-auto flex-col md:flex-row'
				>
					<section className='mb-32 flex h-auto flex-col md:mb-0 md:w-1/2'>
						<h2
							className='mb-16'
							style={{
								fontSize: 'clamp(2rem, 4vw, 4vh)',
							}}
						>
							What Went Well
						</h2>
						<div className='space-y-8 px-8 md:max-w-[80%] md:pr-0'>
							<p>
								The inspiration from ChatStation&apos;s design
								came from a still screenshot of another chat
								messaging application UI without reference to
								guide many of the key underlying features
								powering the full experience (user
								authentication, database selection and
								management, live deployment, etc.).
							</p>
							<figure
								id='mockupImgWrapper'
								className='relative mt-16 flex h-auto flex-col justify-center text-center md:ml-8 md:w-auto md:max-w-[80%]'
							>
								<Image
									alt="The mockup used for the basis of ChatStation's layout"
									src={mockupImg}
									objectFit='cover'
									objectPosition='top'
								/>
								<figcaption className='mt-4 text-xs'>
									Mockup used for the basis of
									ChatStation&apos;s layout
								</figcaption>
							</figure>
							<p>
								With that said, I&apos;m pretty happy with how
								everything came out, and having the experience
								of growing ChatStation from a barebones UI
								snapshot has given me more confidence moving
								forward with other projects using little initial
								guidance.
							</p>
						</div>
					</section>
					<section className='flex h-auto flex-col md:w-1/2'>
						<h2
							className='mb-16'
							style={{ fontSize: 'clamp(2rem, 4vw, 4vh)' }}
						>
							What Was Tricky
						</h2>
						<div className='space-y-8 px-8 md:max-w-[80%] md:pr-0'>
							<p>
								When I configured ChatStation to run through
								Docker and Docker-Compose, I had a much harder
								time establishing data volumes that would
								persist the database the structure and contents
								than while creating volumes for{' '}
								<Link href={'/petsocial'} passHref>
									<a className='underline'>PetSocial</a>
								</Link>
								, another one of my projects which uses MongoDB
								for its databasing.
							</p>
							<p>
								Unlike in a containerized application using
								MongoDB, one using MySQL requires that a dump of
								the existing database be placed in the{' '}
								<i>/docker-entrypoint-initdb.d</i> directory to
								be recreated upon container startup, as
								described in{' '}
								<a
									className='underline'
									href='https://hub.docker.com/_/mysql'
									target='_blank'
									rel='noreferrer'
								>
									Docker Hub&apos;s MySQL image reference page
								</a>{' '}
								in the &quot;Initializing a fresh instance&quot;
								section.
							</p>
							<figure
								id='deploymentImgWrapper'
								className='flex w-full flex-col justify-center text-center lg:w-fit'
							>
								<Image
									alt='Deployment environment on Railway.app'
									src={deploymentImg}
									objectFit='cover'
									objectPosition='top'
								/>
								<figcaption className='mt-4 text-xs'>
									Deploying ChatStation live on{' '}
									<a
										className='underline'
										href='https://railway.app'
										target='_blank'
										rel='noreferrer'
									>
										Railway.app
									</a>{' '}
									also required a dump and import of the
									existing MySQL database
								</figcaption>
							</figure>
							<p>
								I found this somewhat unintuitive, though
								I&apos;m probably just spoiled by the
								simplification that MongoDB grants to its users.
								In any case, the experience of manually
								configuring a database dump and recreation in
								Docker will no doubt prove useful in the future
								while using MySQL databases in other
								applications.
							</p>
							<p>
								I also had issues deploying the compiled
								JavaScript version of this TypeScript
								application due to a strange syntactical quirk
								that the TypeScript compiler really wanted to
								include. Some{' '}
								<a
									className='underline'
									href='https://github.com/microsoft/TypeScript/issues/38552'
									target='_blank'
									rel='noreferrer'
								>
									googling
								</a>{' '}
								and{' '}
								<a
									className='underline'
									href='https://stackoverflow.com/questions/70543122/changing-from-typescript-3-to-4-what-is-purpose-of-new-export-somename-void-0'
									target='_blank'
									rel='noreferrer'
								>
									further googling
								</a>{' '}
								suggests that the behavior is intended as a way
								to hoist exports so that they are immediately
								visible as members of the containing module.
							</p>
							<div
								id='compilerWeirdnessImgWrapper'
								className='relative mx-auto flex h-auto justify-center md:w-auto'
							>
								<Image
									alt='screenshot of the strange compiled TypeScript code'
									src={compilerWeirdnessImg}
								/>
							</div>
							<p>
								I don&apos;t claim to know more about JavaScript
								than the TypeScript development team - surely
								they had a good reason for implementing this
								pattern. But I can say that manually overriding
								the compiled code and removing the initial
								all-inclusive assignment to
								<i>void 0</i> resulted in the correct assignment
								of environment variable values needed to allow
								ChatStation to run properly after deployment.
							</p>
						</div>
					</section>
				</div>
				<motion.div
					id='mainImgWrapper'
					className='mx-auto mt-32 mb-64 flex max-h-[60vh] w-full flex-col justify-center text-center md:mb-32 lg:w-fit'
					style={
						darkMode
							? {
									boxShadow:
										'rgba(255, 255, 255, 5%) 0px 5px 50px',
							  }
							: {
									boxShadow:
										'rgba(0, 0, 0, 25%) 0px 5px 50px',
							  }
					}
					initial={{ y: '25%', opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					<Image
						alt="ChatStation's user authentication page"
						src={mainImg}
						objectFit='cover'
						objectPosition='top'
					/>
				</motion.div>
				<Footer darkMode={darkMode} />
			</div>
		</MotionConfig>
	)
}

export default ChatStationDetails
