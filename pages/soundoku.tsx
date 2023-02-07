import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import { audioInterfaces } from '../components/Work/ProjectsGrid/soundokuAudioInterfaces'
import Footer from '../components/ProjectDetails/Footer'
import headerImg from '../public/projectDetails/soundokuSelection.webp'
import mainImg from '../public/projectDetails/soundokuWin.webp'
import oscillatorCode from '../public/projectDetails/soundokuOscillatorCode.webp'
import attackTimeCode from '../public/projectDetails/soundokuAttackTimeCode.webp'
import passingCode1 from '../public/projectDetails/soundokuPassing1.webp'
import failingCode1 from '../public/projectDetails/soundokuFailing1.webp'
import passingCode2 from '../public/projectDetails/soundokuPassing2.webp'
import failingCode2 from '../public/projectDetails/soundokuFailing2.webp'

function SoundokuDetails({ darkMode }) {
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
							Soundoku
						</h1>
						<ul
							id='stackTextItems'
							className='mb-16 flex w-auto space-x-8 text-xs'
						>
							<li>Web Audio API</li>
							<li>Jasmine Test Suite</li>
							<li className='font-bold'>Angular</li>
							<li className='font-bold'>/</li>
							<li className='font-bold'>Svelte</li>
						</ul>
						<div
							id='headerImgFlexWrapperSm'
							className='my-16 flex w-full items-center md:hidden'
						>
							<motion.div
								id='headerImageWrapper'
								className='relative flex'
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
									alt='Soundoku cell selection UI'
									src={headerImg}
									objectFit='cover'
									objectPosition='top'
									priority
								/>
							</motion.div>
						</div>
						<div className='flex h-auto flex-col space-y-8 px-8 md:w-4/5 md:pr-0'>
							<p>
								Since I really love trying to solve puzzles and
								sudoku is one of my favorite puzzle games, I
								wanted to recreate sudoku but take it up a
								notch. I&apos;m also passionate about all kinds
								of music and have for long been curious about
								the building blocks of audio engineering. When I
								learned of JavaScript&apos;s Web Audio API, I
								knew I had to try it!
							</p>
							<p>
								From the intersection of puzzle making, problem
								solving and a peek into the anatomy of audio,
								Soundoku 🌱 came to life.
							</p>
							<p>
								In Soundoku the user can&apos;t see the numbers
								on the board but instead must listen for the
								tone that each cell emits. By listening to those
								tones and keeping a mental map of their numeric
								equivalents, the user can determine hidden cell
								values and eventually the solution to the board.
							</p>
							<p>
								Removing the visual stimuli normally used as
								clues makes this game format much tougher than
								the original, and greatly amplifies the
								satisfaction of achieving a solution. Try it if
								you dare! 😈
							</p>
							<div className='ml-16'>
								<h3 className='my-16 font-bold'>
									UPDATE (2/7/23):
								</h3>
								<p>
									I rebuilt Soundoku in{' '}
									<a
										href='https://svelte.dev/'
										target='_blank'
										rel='noreferrer'
										className='underline'
									>
										Svelte&nbsp;
									</a>
									and have since replaced the original Angular
									project in the live demo and source code
									links.
								</p>
								<p className='mt-8'>
									If you're interested in seeing the original
									Angular source code, you can{' '}
									<a
										href='https://github.com/julianlk522/soundoku'
										target='_blank'
										rel='noreferrer'
										className='underline'
									>
										find that here
									</a>
									.
								</p>
							</div>
						</div>
						<ul
							id='demoLinks'
							className='mt-16 flex w-auto justify-center space-x-8 text-xs md:max-w-[80%] md:pl-8'
						>
							<li>
								<button className='rounded-sm bg-black/60 p-2 font-bold text-white dark:bg-white/80 dark:text-stone-600'>
									<a
										href='https://soundoku.netlify.app'
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
										href='https://github.com/julianlk522/soundoku-svelte'
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
							className='relative flex'
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
								alt='Soundoku cell selection UI'
								src={headerImg}
								objectFit='cover'
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
								Glancing at the contents of the Web Audio API
								previously, I was at first intimidated by the
								volume of varying interfaces and their complete
								tree of properties and methods that can be used
								together in audio engineering.
							</p>
							<p>
								<i>"So much power!</i> 😱"
							</p>
							<div
								id='selectFlexWrapper'
								className='flex flex-col'
							>
								<label
									htmlFor='audioInterfaces'
									className='bg-sunrise bg-clip-text font-bold text-transparent dark:bg-tomatoToLightPink'
								>
									Interface list from MDN Web Docs:
								</label>
								<select
									className='bg-black/5 dark:bg-white/5'
									name='audioInterfaces'
									id='audioInterfaces'
									value={audioInterfaces.length + ' total'}
								>
									<option
										className=' dark:text-stone-600'
										disabled
									>
										{audioInterfaces.length + ' total'}
									</option>
									{audioInterfaces.map((name, i: number) => {
										return (
											<option
												key={i}
												className='dark:text-stone-600'
												value={name}
												disabled
											>
												{name}
											</option>
										)
									})}
								</select>
							</div>
							<p>
								Having now spent some time messing with them
								though, I was able to achieve the desired output
								for Soundoku in only a few lines of code and
								without needing to absorb the meanings of all of
								the available tooling options provided. (Though
								I&apos;m still curious about the unused features
								and am looking for ways to add more to
								Soundoku!)
							</p>
							<figure
								id='oscillatorCodeImgWrapper'
								className='relative mx-auto flex h-auto flex-col justify-center text-center md:w-auto'
							>
								<Image
									alt='Snapshot of the code used to create the various tones used in Soundoku'
									src={oscillatorCode}
									objectFit='cover'
									objectPosition='top'
								/>
								<figcaption className='mt-4 text-xs'>
									Code to create short oscillations according
									to the value (1-9) passed as an argument
								</figcaption>
							</figure>
							<p>
								Working with the Web Audio API was something I
								anticipated would be a leading challenge of
								building Soundoku. Fortunately it amounted to
								one of the simpler and most painless parts, a
								pleasant surprise!
							</p>
							<p>
								I was also slightly intimidated by
								Angular&apos;s object-oriented nature at first
								since my projects thus far have been built using
								mainly functional programming techniques, but
								getting more comfortable with OOP has been
								refreshing.
							</p>
							<p>
								The orderliness of class-based encapsulation is
								handy, and I also enjoy the editor intellisense
								that comes with carefully-configured access
								modifiers for class properties and methods.
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
								Soundoku is the first project I made using
								Angular, and coming from a background in
								React.js I notice many similarities but overall
								was wildly confused more times than I care to
								admit along my path to the current stage of the
								project. 😅
							</p>
							<p className='ml-16'>
								<span className='font-bold'>Edit:</span> Svelte
								to the rescue!
							</p>
							<p>
								I had some peculiar experiences working with the
								Jasmine test suite that is native to Angular
								apps. Some tests failed for reasons that I still
								don&apos;t understand while other seemingly
								equal ones passed. Have a look at these
								examples, which seem to share the same essential
								test setups but produce different results.{' '}
								<i className='text-xs'>
									(If you know what&apos;s causing this
									behavior and feel like sharing, please drop
									me a message in the{' '}
									<span className='underline'>
										<Link href='/#contact' scroll={false}>
											Contact section
										</Link>
									</span>
									!)
								</i>
							</p>
							<div className='flex w-full flex-col text-sm md:pl-8'>
								<figure id='passingCodeSample1Wrapper'>
									<Image
										alt='Passing code example 1'
										src={passingCode1}
									/>
									<figcaption className='pr-8 text-right text-xs font-bold'>
										passes 😎
									</figcaption>
								</figure>
								<figure
									id='failingCodeSample1Wrapper'
									className='mt-2'
								>
									<Image
										alt='Failing code example 1'
										src={failingCode1}
									/>
									<figcaption className='pr-8 text-right text-xs font-bold'>
										fails 🤔
									</figcaption>
								</figure>
								<p className='my-8'>and also...</p>

								<figure id='passingCodeSample2Wrapper'>
									<Image
										alt='Passing code example 2'
										src={passingCode2}
									/>
									<figcaption className='pr-8 text-right text-xs font-bold'>
										passes 😁
									</figcaption>
								</figure>
								<figure
									id='failingCodeSample2Wrapper'
									className='mt-2'
								>
									<Image
										alt='Failing code example 2'
										src={failingCode2}
									/>
									<figcaption className='pr-8 text-right text-xs font-bold'>
										fails 😰
									</figcaption>
								</figure>
							</div>
							<p>
								I also ran into some tricky UX logistics
								regarding rapid starting and stopping of the
								generated oscillators. Stopping an oscillator
								while the gain (basically volume) is still high
								causes an unpleasant flickering effect, but
								crushing the gain too quickly as a prophylactic
								measure results in short, unsatisfying tones
								that are more difficult to analyze.
							</p>
							<p>
								As a workaround, I measure the waiting time
								between notes and quickly throttle the attack
								time (basically startup time to produce audible
								sound) and cancel earlier oscillators when the
								notes are played rapidly, then quickly cut
								attack time again and don't cancel ongoing
								oscillators if the waiting time is sufficient
								for longer, fuller notes. It works pretty well,
								I think!
							</p>
							<figure
								id='attackTimeCodeImgWrapper'
								className='relative mx-auto flex h-auto flex-col justify-center text-center md:w-auto'
							>
								<Image
									alt='Snapshot of the code to throttle tones played in rapid succession'
									src={attackTimeCode}
									objectFit='cover'
									objectPosition='top'
								/>
								<figcaption className='mt-4 text-xs'>
									Code to throttle tones played in rapid
									succession
								</figcaption>
							</figure>
						</div>
					</section>
				</div>
				<motion.div
					id='mainImgWrapper'
					className='my-32 mx-auto w-fit text-[0px]'
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
						alt="Soundoku win screen, showcasing the user's game time and error count for the completed round"
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
							Angular is intimidating but will likely ultimately{' '}
							<strong>save you stress</strong> when building out
							component/service interactions or writing tests due
							to the safe foundations of the{' '}
							<strong>object-oriented</strong> and{' '}
							<strong>dependency injection-driven</strong>{' '}
							architecture.
						</p>
						<p className='pl-8'>
							For writing a <i>little more</i> code, it seems to
							me that you as the dev are rewarded with the
							blessing of having{' '}
							<strong>
								much of the thinking done already when extending
							</strong>{' '}
							the functionality of a component or service - very
							satisfying when that happens, and very worth the
							trouble!
						</p>
						<p className='pl-8'>
							I can also see how working with an Angular code base
							would be convenient for teams since OOP-based
							intellisense as well as thorough, descriptive test
							suites could really{' '}
							<strong>
								simplify the process of understanding
							</strong>{' '}
							someone else&apos;s code that you&apos;re not
							immediately familiar with .
						</p>
						<p>
							Also, the JavaScript Web Audio API is not as
							insurmountable as it appears, so I (and everyone
							else who likes making music and writing code) should
							play with it more often! 🎸
						</p>
					</div>
				</section>
				<Footer darkMode={darkMode} />
			</div>
		</MotionConfig>
	)
}

export default SoundokuDetails
