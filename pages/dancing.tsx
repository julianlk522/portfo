import Image from 'next/image'
import React from 'react'
import headerImg from '../public/projectDetails/dancingButtonHeader.webp'
import mainImg from '../public/projectDetails/dancingButtonMain.webp'
import fakeButton from '../public/projectDetails/dancingFakeButton.webp'

function DancingButtonDetails({ darkMode }) {
	return (
		<div
			id='dancingButtonDetails'
			className='relative h-full w-screen px-8 pt-24 pb-32 text-stone-600 dark:text-white lg:px-16'
		>
			<header className='mb-32 flex'>
				<div id='headerText' className='w-1/2'>
					<h1
						className='mb-4'
						style={{
							fontSize: 'clamp(1rem, 6vw, 6vh)',
						}}
					>
						Dancing Button of Doom
					</h1>
					<ul
						id='dancingButtonStackTextItems'
						className='mb-16 flex w-auto space-x-8 text-xs'
					>
						<li>HTML</li>
						<li className='font-bold'>CSS</li>
						<li>JavaScript</li>
						<li>Vite</li>
						<li>Jest</li>
					</ul>

					<div className='flex h-auto w-4/5 flex-col space-y-8 pl-8'>
						<p>
							I <i>love</i> games (word games, video games,
							psychological games like trying to exercise a
							certain number of times per week, virtually any
							other kind of game), and so my first goal after
							gaining some experience with JavaScript/HTML/CSS was
							of course to try to make a game.
						</p>
						<p>
							Some of my favorites games are ones where speed and
							accuracy are a central component to success. There's
							something so rewarding about finally triumphing in
							those games, after enduring numerous near-wins along
							the way no doubt.
						</p>
						<p>
							DBD is designed to appeal to those out there who
							share a love for the same exhilarating,
							accuracy-driven style of gameplay.
						</p>
					</div>
				</div>

				<div
					id='headerImgFlexWrapper'
					className='flex h-auto w-full max-w-[50%] items-center'
				>
					<div
						id='headerImageWrapper'
						className='relative flex h-min max-h-[50vh] shadow-xl dark:shadow-none'
						style={
							darkMode
								? {
										boxShadow:
											'rgb(255 255 255 / 5%) 0px 5px 50px',
								  }
								: {}
						}
					>
						<Image
							src={headerImg}
							objectFit='cover'
							objectPosition='top'
						/>
					</div>
				</div>
			</header>
			<div id='centralTextContent' className='flex h-auto'>
				<section className='flex h-auto w-1/2 flex-col'>
					<h2
						className='mb-16'
						style={{
							fontSize: 'clamp(1rem, 4vw, 4vh)',
						}}
					>
						What Went Well
					</h2>
					<p className='max-w-[80%] pl-8'>
						This project served as my welcoming ceremony into the
						world of CSS animations. Animating such features as the
						rocket crash-landing sequence and the spinning border on
						the game timer seemed dauning at first, though bit by
						bit they became not only functional but, I think, also
						fun to experience in the game!
					</p>
					<video
						controls
						controlsList='nodownload nofullscreen'
						autoPlay
						muted
						disablePictureInPicture
						playsInline
						className='mt-16 max-w-[80%] pl-8'
					>
						<source
							src={'/projectDetails/crashLanding.mp4'}
							type='video/mp4'
						/>
						Your browser doesn&apos;t support the video tag.
					</video>
				</section>
				<section className='flex h-auto w-1/2 flex-col'>
					<h2
						className='mb-16'
						style={{ fontSize: 'clamp(1rem, 4vw, 4vh)' }}
					>
						What Was Tricky
					</h2>
					<div className='space-y-8 pl-8'>
						<p>
							A key feature of the Dancing Button Game is that
							occasionally the user is prompted with a fake button
							that they must recognize and avoid clicking in order
							to maximize their score.
						</p>
						<p>
							The fake button misspells the word “clicks” in order
							to give the user enough of a visual cue to detect
							the difference. But the misspelling cannot be so bad
							that the word doesn&apos;t resemble “clicks” at all
							or else it would be too easy to notice. So the
							perfect fake button text looks something like
							“clkics.”
						</p>
						<div
							id='fakeButtonImgWrapper'
							className='relative flex h-auto w-auto justify-center'
						>
							<Image src={fakeButton} />
						</div>

						<p>
							This feature wasn’t too difficult to implement in
							JavaScript using some random number generation and
							string concatentation, but what really threw me was
							the regex required to accurately test this feature.
						</p>
						<p>
							I had never before dealt with{' '}
							<a
								className='underline'
								href='https://www.rexegg.com/regex-lookarounds.html'
							>
								lookarounds
							</a>{' '}
							or{' '}
							<a
								className='underline'
								href='https://regexone.com/lesson/capturing_groups'
							>
								numbered capturing groups
							</a>{' '}
							and struggled to imagine how I might test a string
							for a random order of non-repeating letters.
						</p>
						<p>
							With the help of some kind StackOverflow veterans
							and some trial-and-error on{' '}
							<a
								className='underline'
								href='https://regex101.com/'
							>
								Regex101.com
							</a>{' '}
							I was able to eventually achieve this regex which
							gets the job done:
						</p>
						<code
							className='inline-block pl-8 text-sm italic'
							style={{ marginTop: '4rem' }}
						>
							/cl(?:([ick]))(?:(?!\1)([ick]))(?:(?!\1|\2)([ick]))s;\)
							10$/
						</code>
						<div className='flex w-full pl-8'>
							<p className='w-full italic'>e.g. "Clckis; 10"</p>
							<span className='w-full pr-8 text-right text-xs'>
								10 is the user’s current score*
							</span>
						</div>
					</div>
				</section>
			</div>
			<div id='mainImgWrapper' className='my-32'>
				<Image src={mainImg} className='w-full' />
			</div>
			<div id='takeaways'>
				<h2
					style={{
						fontSize: 'clamp(1rem, 4vw, 4vh)',
					}}
				>
					Key Takeaways
				</h2>
				<div className='mt-16 flex flex-col pl-8'>
					<p>
						More than anything else, this project taught me the
						beauty of declarative programming.
					</p>
					<p>
						Huh? A vanilla JavaScript application? Allow me to
						explain...
					</p>
					<div className='mt-16 flex h-auto flex-col'>
						<ol>
							<li>
								It was while coding the Dancing Button Game that
								I discovered CSS functions min(), max() and
								clamp() that have since become crucial tools in
								my frontend toolkit.{' '}
							</li>
							<li>
								For this project, I was able to shave over 300
								lines of code from the original media queries
								used to achieve a responsive layout after
								replacing them with simple, declarative styling
								using the above functions.
							</li>
							<li>
								After fighting my way through 26 variable
								declarations for different DOM selectors that
								would be needed to make the app run properly, I
								also started to understand and appreciate more
								why React.js&apos;s component-based architecture
								and declarative conditional re-rendering API are
								a huge productivity boost to JavaScript
								developers.
							</li>
						</ol>
					</div>
					<p>
						Dancing Button Game is also the first project I
						configured automated pre-deployment testing for using
						Github Actions, a workflow enhancement that I am eager
						to spread to more projects moving forward!
					</p>
				</div>
			</div>
			<footer className='absolute bottom-0 left-0 flex h-32 w-full bg-slate-700 px-8 lg:px-16'>
				<div id='footerMainLinks' className='flex w-full items-center'>
					<button
						id='homeButton'
						className='mr-16 underline underline-offset-4'
					>
						<a
							style={{
								fontSize: 'clamp(0.75rem, 2vw, 2vh)',
							}}
							href='https://julianlk.vercel.app'
							target='_self'
							rel='noreferrer'
						>
							JLK
						</a>
					</button>
					<ul className='flex space-x-4'>
						<li>About</li>
						<li>Skills</li>
						<li>Work</li>
						<li>Contact</li>
					</ul>
				</div>

				<div
					id='footerSecondaryLinks'
					className='flex w-auto items-center'
				>
					<ul className='flex flex-col items-center justify-center'>
						<li>Github</li>
						<hr className='my-2 w-1/2 opacity-20' />
						<li>Resume</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default DancingButtonDetails
