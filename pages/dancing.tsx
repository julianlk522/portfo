import Image from 'next/image'
import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import Footer from '../components/ProjectDetails/Footer'
import headerImg from '../public/projectDetails/dancingButtonHeader.webp'
import mainImg from '../public/projectDetails/dancingButtonMain.webp'
import fakeButton from '../public/projectDetails/dancingFakeButton.webp'
import imperativeStyling from '../public/projectDetails/dancingUglyImperativeStyles.webp'
import declarativeStyling from '../public/projectDetails/dancingPrettyDeclarativeStyles.webp'

function DancingButtonDetails({ darkMode }) {
	return (
		<MotionConfig transition={{ duration: 1, ease: 'easeOut' }}>
			<div
				id='dancingButtonDetails'
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
							Dancing Button of Doom
						</h1>
						<ul
							id='stackTextItems'
							className='mb-16 flex w-auto space-x-8 text-xs'
						>
							<li>HTML</li>
							<li className='font-bold'>CSS</li>
							<li>JavaScript</li>
							<li>Jest</li>
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
									alt='Dancing Button Game rocket and heads-up-display'
									src={headerImg}
									objectFit='cover'
									objectPosition='top'
									priority
								/>
							</motion.div>
						</div>
						<div className='flex h-auto flex-col space-y-8 px-8 md:w-4/5 md:pr-0'>
							<p>
								I <i>love</i> games of virtually any kind (word
								games, video games, even psychological games
								like trying to exercise a certain number of
								times per week), and so my first goal after
								gaining some experience with JavaScript/HTML/CSS
								was of course to try to make a game.
							</p>
							<p>
								The Dancing Button of Doom (DBD) leverages
								essential web development technologies to
								deliver a simple but enjoyable game. Be ready
								for lots of animation!
							</p>
						</div>
						<ul
							id='demoLinks'
							className='mt-16 flex w-auto justify-center space-x-8 text-xs md:max-w-[80%] md:pl-8'
						>
							<li>
								<button className='rounded-sm bg-black/60 p-2 font-bold text-white dark:bg-white/80 dark:text-stone-600'>
									<a
										href='https://dancing-button-of-doom.netlify.app/'
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
										href='https://github.com/julianlk522/dancing-button'
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
								alt='Dancing Button Game rocket and heads-up-display'
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
								This project served as my welcoming ceremony
								into the world of CSS animations, and quickly
								turned into our honeymoon as well.
							</p>
							<p>
								Going in, I had little experience writing
								animation keyframes. Bit by bit though, I
								experimented - first with the button hover
								effect, then the rotating timer border, then the
								pulsing and screen-shaking streak effects, then
								finally the rocket crash-landing sequence - and
								found over and over that it was a joy and that I
								wanted to keep adding more!
							</p>
							<p>
								Ultimately this small game amounted to a
								950-line stylesheet, about <sup>1</sup>
								&frasl;<sub>3</sub> of which was dedicated to
								animation keyframes, because I just
								couldn&apos;t stop!
							</p>
						</div>
						<figure className='mt-16 flex flex-col items-center md:max-w-[80%] md:pl-8'>
							<video
								controls
								controlsList='nodownload nofullscreen'
								autoPlay
								muted
								disablePictureInPicture
								playsInline
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
							>
								<source
									src={
										'/projectDetails/dancingCrashLanding.mp4'
									}
									type='video/mp4'
								/>
								Your browser doesn&apos;t support the video tag.
							</video>
							<figcaption className='mt-4 text-xs'>
								Rocket crash-landing animation sequence
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
								A key feature of DBD is that occasionally the
								user is prompted with a fake button that they
								must recognize and avoid clicking in order to
								maximize their score.
							</p>
							<p>
								The fake button misspells the word
								&quot;clicks&quot; in order to give the user
								enough of a visual cue to detect the difference.
								But the misspelling cannot be so bad that the
								word doesn&apos;t resemble &quot;clicks&quot; at
								all or else it would be too easy to notice. So
								the perfect fake button text looks something
								like &quot;clkics.&quot;
							</p>
							<div
								id='fakeButtonImgWrapper'
								className='relative flex h-auto w-fakeButtonImageSm justify-center md:w-auto'
							>
								<Image
									alt='fake dancing button'
									src={fakeButton}
								/>
							</div>
							<p>
								This feature wasn&apos;t too difficult to
								implement in JavaScript using some random number
								generation and string concatentation, but what
								really threw me was the regex required to
								accurately test this feature.
							</p>
							<p>
								I had never before dealt with{' '}
								<a
									className='underline'
									href='https://www.rexegg.com/regex-lookarounds.html'
									target='_blank'
									rel='noreferrer'
								>
									lookarounds
								</a>{' '}
								or{' '}
								<a
									className='underline'
									href='https://regexone.com/lesson/capturing_groups'
									target='_blank'
									rel='noreferrer'
								>
									numbered capturing groups
								</a>{' '}
								and struggled to imagine how I might test a
								string for a random order of non-repeating
								letters.
							</p>
							<p>
								With the help of some kind StackOverflow
								veterans and some trial-and-error on{' '}
								<a
									className='underline'
									href='https://regex101.com/'
									target='_blank'
									rel='noreferrer'
								>
									Regex101.com
								</a>{' '}
								I was able to piece together this expression
								which gets the job done:
							</p>
							<code
								className='inline-block bg-black/5 text-sm italic dark:bg-white/5 lg:pl-8'
								style={{ marginTop: '4rem' }}
							>
								/cl(?:([ick]))(?:(?!\1)([ick]))(?:(?!\1|\2)([ick]))s;\)
								10$/
							</code>
							<div className='flex w-full md:pl-8'>
								<p className='w-full italic'>
									e.g. &quot;Clckis; 10&quot;
								</p>
								<span className='w-full pr-8 text-right text-xs'>
									10 is the user&apos;s current score*
								</span>
							</div>
						</div>
					</section>
				</div>
				<motion.div
					id='mainImgWrapper'
					className='my-32 text-[0px]'
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
						alt='Dancing Button of Doom game screen showcasing the dancing button, timer, and title text'
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
					<div className='mt-16 flex flex-col px-8 md:pr-0'>
						<p>
							More than anything else, this project taught me the
							beauty of <strong>declarative programming.</strong>
						</p>
						<p className='mt-8'>
							<i>Huh? A vanilla JavaScript application?</i> Allow
							me to explain...
						</p>
						<div className='mt-16 flex h-auto flex-col md:max-w-[80%] md:pl-16'>
							<ul
								className='space-y-8'
								style={{ listStyleType: 'circle' }}
							>
								<li>
									It was while coding DBD that I discovered
									CSS functions <i>min()</i>, <i>max()</i> and{' '}
									<i>clamp()</i> that have since become
									crucial tools in my frontend toolkit. With
									simple, declarative styling made possible
									using these functions I was able to shave
									about 300 lines of code from the original
									media queries used to achieve a responsive
									layout.
								</li>
								<div
									id='takeawaysImages'
									className='flex flex-col justify-around md:flex-row'
								>
									<figure className='relative my-16 flex max-h-80 w-auto flex-col items-center md:my-0 md:max-w-[45%]'>
										<Image
											alt='example of many repeated or very similar imperative lines of code needed for a responsive layout without using CSS functions'
											src={imperativeStyling}
											objectFit='cover'
										/>
										<figcaption className='mt-4 text-xs'>
											Icky repeated code ❌
										</figcaption>
									</figure>
									<figure className='relative mb-16 flex max-h-80 w-auto flex-col items-center md:mb-0 md:max-w-[45%]'>
										<Image
											alt='example of clean and concise responsive styling using declarative CSS functions'
											src={declarativeStyling}
											objectFit='cover'
											objectPosition='bottom'
										/>
										<figcaption className='mt-4 text-xs'>
											One size fits all ✔️
										</figcaption>
									</figure>
								</div>
								<li>
									After fighting through 26 variable
									declarations at the beginning of the main
									script file, used for different DOM
									selectors that would be needed for various
									app functionalities, I also began to
									appreciate more how React.js&apos;s
									component-based architecture and declarative
									conditional re-rendering API are a huge
									boost to productivity and project
									organization for JavaScript developers.
								</li>
							</ul>
						</div>
						<p className='mt-16'>
							DBD is also the first project for which I configured{' '}
							<strong>automated pre-deployment testing</strong>{' '}
							using Github Actions and the Jest testing framework,
							a workflow enhancement that I am eager to spread to
							more projects moving forward!
						</p>
					</div>
				</section>
				<Footer darkMode={darkMode} />
			</div>
		</MotionConfig>
	)
}

export default DancingButtonDetails
