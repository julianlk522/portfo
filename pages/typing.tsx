import Image from 'next/image'
import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import Footer from '../components/ProjectDetails/Footer'
import headerImg from '../public/projectDetails/typingHeader.webp'
import mainImg from '../public/projectDetails/typingMain.webp'
import netlifyError from '../public/projectDetails/typingNetlifyError.webp'
import wordList from '../public/projectDetails/typingWordList.webp'
import useTypewriter from '../public/projectDetails/typingUseTypewriter.webp'
import Link from 'next/link'

function HyperTyperDetails({ darkMode }) {
	return (
		<MotionConfig transition={{ duration: 1, ease: 'easeOut' }}>
			<div
				id='hyperTyperDetails'
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
							Hyper Typer 2000
						</h1>
						<ul
							id='stackTextItems'
							className='mb-16 flex w-auto space-x-4 text-center text-xs md:space-x-8'
						>
							<li>React.js</li>
							<li>TypeScript</li>
							<li>D3.js</li>
							<li>Cypress Testing Library</li>
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
									alt='Hyper Typer 2000 interactive words-per-minute chart, completed word list, timer and word input field'
									src={headerImg}
									objectFit='cover'
									objectPosition='top'
									priority
								/>
							</motion.div>
						</div>
						<div className='flex h-auto flex-col space-y-8 px-8 md:w-4/5 md:pr-0'>
							<p>
								Some of my favorite games are ones where speed
								and accuracy are a central component to success.
								There&apos;s something <i>so rewarding</i> about
								finally triumphing or hitting a new personal
								best score in those games after enduring
								numerous close misses along the way.
							</p>
							<p>
								Hyper Typer 2000 is designed to appeal to those
								out there who share a love for the same
								exhilarating, accuracy-driven style of gameplay,
								and also those who take pride in their ⌨ typing
								skills!
							</p>
							<p>
								Originally intended as a React.js port of the{' '}
								<Link href={'/dancing'} passHref>
									<a className='underline'>
										Dancing Button of Doom
									</a>
								</Link>
								, this project quickly snowballed into a mass of
								spontaneous innovation until becoming what it is
								today.
							</p>
						</div>
						<ul
							id='demoLinks'
							className='mt-16 flex w-auto justify-center space-x-8 text-xs md:max-w-[80%] md:pl-8'
						>
							<li>
								<button className='rounded-sm bg-black/60 p-2 font-bold text-white dark:bg-white/80 dark:text-stone-600'>
									<a
										href='https://hyper-typer-2000.netlify.app/'
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
										href='https://github.com/julianlk522/hyper-typer'
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
								alt='Hyper Typer 2000 interactive words-per-minute chart, completed word list, timer and word input field'
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
								I was unfamiliar with D3.js before starting to
								code Hyper Typer but was curious about how one
								might combine the fluidity of a React.js
								application with data visualization techniques.
								Now having experimented with it somewhat in
								order to achieve the interactive
								words-per-minute chart featured in the app,
								I&apos;m glad to have some experience using it
								to draw from in future projects.
							</p>
							<p>
								As a tangent to gaining experience with D3 I was
								also able to grow my understanding of SVGs and
								their native building block elements
								(&lt;path&gt;, &lt;circle&gt;, &lt;g&gt;, etc.)
								since D3 uses SVG to render data to the page.
								That knowledge has been monumentally helpful
								while building this portfolio page!
							</p>
							<p>
								I was also keen on the idea from the very start
								of using self-typing text as an aesthetic
								sprinkle for this project given its theme, and
								was delighted to find along the way the{' '}
								<a
									className='underline'
									href='https://www.npmjs.com/package/react-simple-typewriter'
								>
									React Simple Typewriter
								</a>{' '}
								NPM package which makes this task very simple
								and straightforward!
							</p>
						</div>
						<figure
							id='autoTypingImgWrapper'
							className='relative mt-16 flex h-auto flex-col justify-center text-center md:w-auto md:max-w-[80%] md:pl-8'
						>
							<Image
								alt='Example usage of the useTypewriter hook from React Simple Typewriter'
								src={useTypewriter}
							/>
							<figcaption className='mt-4 text-xs'>
								Assigning the Title Screen text state to the
								product of the useTypewriter hook, with a few
								small configurations.
							</figcaption>
						</figure>
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
								Hyper Typer was the first application with
								multi-page routing which I attempted to deploy
								live (using{' '}
								<a
									className='underline'
									href='https://netlify.com'
								>
									Netlify.com
								</a>
								). I quickly ran into issues with page redirects
								causing a 404 &quot;Page Not Found&quot; error,
								even at key app routes with specified content
								that seemingly would not need to redirect.
							</p>
							<div
								id='errorImgWrapper'
								className='relative mx-auto flex h-auto justify-center md:w-auto md:max-w-[60%]'
							>
								<Image
									alt='Error message from Netlify due to faulty redirects'
									src={netlifyError}
								/>
							</div>
							<p>
								Fortunately this error is well-documented and
								can be resolved by adding a <i>_redirects</i>{' '}
								file with some very brief instructions in the
								/public directory of your React app. But it was
								an intimidating problem the first time!
							</p>
							<p>
								Hyper Typer also saw issues early on with
								generating appropriate words from the word bank
								API endpoint that it was originally configured
								to request from. Since few configuration options
								were available, I scrapped the preconfigured API
								altogether and instead added a separate file
								containing a large array of (consistently
								inoffensive) words directly into the app
								contents.
							</p>
							<div
								id='errorImgWrapper'
								className='relative mx-auto flex h-auto max-h-80 justify-center md:w-auto'
							>
								<Image
									alt='Revised word list to be used for generating a random typing prompt'
									src={wordList}
									objectFit='cover'
									objectPosition='top'
								/>
							</div>
							<p>
								This approach amounts to a <i>slightly</i>{' '}
								larger project size but also offers more
								flexibility in the implementation (e.g.
								filtering for words of a certain length) and
								more freedom from third-party resources.
							</p>
						</div>
					</section>
				</div>
				<motion.div
					id='mainImgWrapper'
					className='my-32 mx-auto flex w-full justify-center lg:w-fit'
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
						alt='Hyper Typer start screen with a title, start button, and start button caption'
						src={mainImg}
						objectFit='cover'
					/>
				</motion.div>
				<section id='takeaways' className='mb-64 md:mb-32'>
					<h2
						style={{
							fontSize: 'clamp(2rem, 4vw, 4vh)',
						}}
					>
						Key Takeaways
					</h2>
					<div className='mt-16 flex flex-col space-y-8 px-8 md:pr-0'>
						<p>
							What I learned perhaps more than any framework or
							architectural pattern while making this app is that
							one great idea for a project may come unexpectedly
							as a result of experimenting in a different project.
						</p>
						<p>
							So the moral of the story is:{' '}
							<strong>keep coding and making projects!</strong>{' '}
							👨‍💻️
						</p>
						<p>
							Hyper Typer, and in particular working with D3 for
							the interactive words-per-minute chart, has also
							strengthened my comfort level working with SVG
							imagery and has encouraged me to implement it more
							often in recent projects!
						</p>
					</div>
				</section>
				<Footer darkMode={darkMode} />
			</div>
		</MotionConfig>
	)
}

export default HyperTyperDetails
