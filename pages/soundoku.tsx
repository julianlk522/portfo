import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import Footer from '../components/ProjectDetails/Footer'
import headerImg from '../public/projectDetails/soundokuFilledCell.webp'
import mainImg from '../public/projectDetails/soundokuWin.webp'
import { audioInterfaces } from './soundokuAudioInterfaces'

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
							<li className='font-bold'>Angular</li>
							<li>Jasmine</li>
							<li>Karma</li>
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
								Since I really love trying to solve puzzles and
								sudoku is one of my favorite kinds, I wanted to
								recreate sudoku but take it up a notch. I&apos;m
								also passionate about all kinds of music and
								have for long been curious about the building
								blocks of audio engineering. When I learned of
								JavaScript's Web Audio API, I knew I had to try
								it!
							</p>
							<p>
								From the intersection of puzzle making, problem
								solving and a fascination with the anatomy of
								audio, Soundoku 🌱 came to life.
							</p>
							<p>
								In Soundoku the user can&apos;t see the numbers
								on the board but instead must listen for the
								tone that each cell emits. By listening to those
								tones and keeping a mental map of their numeric
								translations, the user can determine cell values
								and eventually the solution to the board.
							</p>
							<p>
								Removing the visual stimuli normally used as
								clues makes this game format much tougher than
								the original, and greatly amplifies the
								satisfaction of achieving a solution. Try it if
								you dare! 😈
							</p>
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
										href='https://github.com/julianlk522/soundoku'
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
								Glancing at the contents of the Web Audio API on
								occasion previously, I was at first intimidated
								by the volume of varying interfaces and their
								complete tree of properties and methods that can
								be used together for sound engineering.{' '}
								<i>What the heck is all this for?</i> I thought.
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
								>
									<option
										className=' dark:text-stone-600'
										disabled
										selected
									>
										{audioInterfaces.length} total
									</option>
									{audioInterfaces.map((name) => {
										return (
											<option
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
								I'm still curious about the unused features and
								am looking for ways to add more to Soundoku!)
							</p>
							<pre className='overflow-auto bg-black/5 text-xs italic dark:bg-white/5'>
								<code>
									{`play(index: number) {
    this.audioCtx = new AudioContext();
    const gainNode = this.audioCtx.createGain();
    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = 'sine';

    const now = this.audioCtx.currentTime;

    gainNode.gain.setValueAtTime(0, 0);
    gainNode.gain.linearRampToValueAtTime(0.5, now + this.attackTime);
    gainNode.gain.linearRampToValueAtTime(
    this.sustainLevel,
    now + this.attackTime + this.decayTime
    );
    gainNode.gain.setValueAtTime(this.sustainLevel, now + 1 - this.releaseTime);
    gainNode.gain.linearRampToValueAtTime(0, now + 1);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    oscillator.frequency.value = this.notes[index].frequency;
    oscillator.start(now);
    oscillator.stop(now + 1);
}
    `}
								</code>
							</pre>
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
								since my projects thus far have been built
								mostly using functional programming techniques,
								but getting more comfortable with OOP has been
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
								have been wildly confused more often than not
								along my path to the current stage of the
								project. 😅
							</p>
							<p>
								The familiarity is coming together steadily bit
								by bit, though I've had a particularly tough
								time wrapping my head around the concepts of{' '}
								<a
									className='underline'
									href='https://rxjs.dev/guide/overview'
									target='_blank'
									rel='noreferrer'
								>
									Observables and Subjects
								</a>{' '}
								and am still trying to solidify an understanding
								of their ideal use cases over a service
								injection using standard properties.
							</p>
							<p>
								I also had some peculiar interactions with the
								Jasmine test suite that is native to Angular
								apps. Some tests failed for reasons that I still
								don&apos;t understand while other,
								similar-looking ones passed. Have a look at
								these examples, which seem to share the same
								essential test setups but produce different
								results.{' '}
								<i className='text-xs'>
									(If you know what&apos;s causing this
									behavior and feel like sharing, please drop
									me a message in the{' '}
									<Link
										href='/#contactContainer'
										scroll={false}
									>
										Contact section
									</Link>
									!)
								</i>
							</p>
							<div className='flex w-full flex-col text-sm md:pl-8'>
								<code className='inline-block bg-black/5 italic dark:bg-white/5'>
									spyOnAllFunctions(service);
									expect(service.formatSeconds(10)).toBe('0:
									10');
								</code>
								<span className='w-full pr-8 text-right text-xs font-bold'>
									passes 😎
								</span>
								<code className='inline-block bg-black/5 italic dark:bg-white/5'>
									spyOn(service, 'formatSeconds');
									expect(service.formatSeconds(10)).toBe('0:
									10');
								</code>
								<span className='w-full pr-8 text-right text-xs font-bold'>
									fails 🤔
								</span>

								<p className='my-8'>and also...</p>

								<code className='inline-block bg-black/5 italic dark:bg-white/5'>
									{`spyOnAllFunctions(component);
		component.handleCellSelected({ overallIndex: 10, value: false });
        expect(component.handleCellSelected).toHaveBeenCalled();`}
								</code>
								<span className='w-full pr-8 text-right text-xs font-bold'>
									passes 😁
								</span>
								<code className='inline-block bg-black/5 italic dark:bg-white/5'>
									{`spyOn(component, 'handleCellSelected');
                                    component.handleCellSelected({ overallIndex: 10, value: false });
    		expect(component.handleCellSelected).toHaveBeenCalled();`}
								</code>
								<span className='w-full pr-8 text-right text-xs font-bold'>
									fails 😰
								</span>
							</div>
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
					<div className='mt-16 flex flex-col space-y-8 px-8 md:pr-0'>
						<p>
							Angular is intimidating but will likely ultimately{' '}
							<strong>save you stress</strong> when building out
							component/service interactions or writing tests due
							to the safe foundations of the{' '}
							<strong>
								object-oriented and dependency injection-driven
							</strong>{' '}
							architecture.
						</p>
						<p className='pl-8'>
							For writing a{' '}
							<i>
								<strong>little more code</strong>
							</i>
							, it seems to me that you as the dev are{' '}
							<i>
								<strong>rewarded with the blessing</strong>
							</i>{' '}
							of having much of the thinking done already when
							extending the functionality of a component or
							service - very satisfying, and very worth the
							trouble!
						</p>
						<p className='pl-8'>
							I can also see how working with an Angular code base
							would be convenient for teams since intellisense
							from OOP and thorough, descriptive test suites could
							really simplify the process of understanding someone
							else's code that you're not immediately familiar
							with.
						</p>
						<p>
							Also, the JavaScript Web Audio API is not as
							insurmountable as it appears, so I (and everyone
							else) should use it more 🎸
						</p>
					</div>
				</section>
				<Footer darkMode={darkMode} />
			</div>
		</MotionConfig>
	)
}

export default SoundokuDetails
