import Image from 'next/image'
import React from 'react'
import headerImg from '../public/projectDetails/dancingButtonHeader.webp'
import mainImg from '../public/projectDetails/dancingButtonMain.webp'
import fakeButton from '../public/projectDetails/dancingFakeButton.webp'
import imperativeStyling from '../public/projectDetails/uglyImperativeStyles.webp'
import declarativeStyling from '../public/projectDetails/prettyDeclarativeStylesEdited.webp'

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
					<div className='max-w-[80%] space-y-8 pl-8'>
						<p>
							This project served as my welcoming ceremony into
							the world of CSS animations, and quickly turned into
							our honeymoon as well.
						</p>
						<p>
							Going in, I had little experience writing animation
							keyframes. Bit by bit though, I experimented - first
							with the button hover effect, then the rotating
							timer border, then the pulsing and screen-shaking
							streak effects, then finally the rocket
							crash-landing sequence - and found over and over
							that it was a joy and that I wanted to keep adding
							more!
						</p>
						<p>
							Ultimately this straight-forward game amounted to a
							hulking 950-line stylesheet, about <sup>1</sup>
							&frasl;<sub>3</sub> of which was dedicated to
							animation keyframes, because I just couldn&apos;t
							stop!
						</p>
					</div>
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
							I was able to piece together this expression which
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
			<section id='takeaways' className='mb-32'>
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
						beauty of <strong>declarative programming.</strong>
					</p>
					<p className='mt-8'>
						<i>Huh? A vanilla JavaScript application?</i> Allow me
						to explain...
					</p>
					<div className='mt-16 flex h-auto max-w-[80%] flex-col pl-16'>
						<ul
							className='space-y-8'
							style={{ listStyleType: 'circle' }}
						>
							<li>
								It was while coding DBD that I discovered CSS
								functions <i>min()</i>, <i>max()</i> and{' '}
								<i>clamp()</i> that have since become crucial
								tools in my frontend toolkit. With simple,
								declarative styling made possible using these
								functions I was able to shave about 300 lines of
								code from the original media queries used to
								achieve a responsive layout.
							</li>
							<div
								id='takeawaysImages'
								className='flex justify-around'
							>
								<figure className='relative flex max-h-80 w-auto flex-col items-center'>
									<Image
										src={imperativeStyling}
										objectFit='cover'
									/>
									<figcaption className='mt-4 text-xs'>
										Icky repeated code ❌
									</figcaption>
								</figure>
								<figure className='relative flex max-h-80 w-auto flex-col items-center'>
									<Image
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
								After fighting my way through 26 variable
								declarations for different DOM selectors that
								would be needed to make the app run properly, I
								also started to understand and appreciate more
								why React.js&apos;s component-based architecture
								and declarative conditional re-rendering API are
								a huge productivity boost to JavaScript
								developers.
							</li>
						</ul>
					</div>
					<p className='mt-16'>
						DBD is also the first project for which I configured{' '}
						<strong>automated pre-deployment testing</strong> using
						Github Actions and the Jest testing framework, a
						workflow enhancement that I am eager to spread to more
						projects moving forward!
					</p>
				</div>
			</section>
			<footer className='absolute bottom-0 left-0 flex h-32 w-full bg-slate-700 px-8 text-white lg:px-16'>
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
