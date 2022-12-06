import Image from 'next/image'
import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import Footer from '../components/ProjectDetails/Footer'
import headerImg from '../public/projectDetails/petSocialHeader.webp'
import mainImg from '../public/projectDetails/petSocialMain.webp'
import formImg from '../public/projectDetails/petSocialForm.webp'
import scriptImg from '../public/projectDetails/petSocialOAuthScript.webp'
import thunkTypingImg from '../public/projectDetails/petSocialAsyncThunkTyping.webp'
import loadingSkeletonsImg from '../public/projectDetails/petSocialLoadingSkeleton.webp'

function PetSocialDetails({ darkMode }) {
	return (
		<MotionConfig transition={{ duration: 1, ease: 'easeOut' }}>
			<div
				id='petSocialDetails'
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
							PetSocial
						</h1>
						<ul
							id='stackTextItems'
							className='mb-16 flex w-auto space-x-4 text-center text-xs md:space-x-8'
						>
							<li>Material UI</li>
							<li>Redux Toolkit</li>
							<li>MongoDB</li>
							<li>Google OAuth</li>
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
									alt="PetSocial's main app interface, showing a few posts and navigation tools as well as the form to submit a new post"
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
								As a huge animal lover myself and hopefully
								soon-to-be pet owner, I often find myself
								browsing the web for pet-related content and
								wanting to share my favorite moments with other
								like-minded fans.
							</p>
							<p>
								PetSocial is a media sharing platform designed
								to allow pet owners and appreciators everywhere
								to share their favorite pet-related moments
								publicly.
							</p>
							<p>
								It was built with the purpose of centralizing
								these interractions and providing a platform to
								easily navigate existing pet-related content
								based on a particular theme, for example
								<i>&quot;fish.&quot;</i>
							</p>
						</div>
						<ul
							id='demoLinks'
							className='mt-16 flex w-auto justify-center space-x-8 text-xs md:max-w-[80%] md:pl-8'
						>
							<li>
								<button className='rounded-sm bg-black/60 p-2 font-bold text-white dark:bg-white/80 dark:text-stone-600'>
									<a
										href='https://pet-social-project.netlify.app'
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
										href='https://github.com/julianlk522/pet-social-media'
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
								alt="PetSocial's main app interface, showing a few posts and navigation tools as well as the form to submit a new post"
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
								Sometimes, I think, making an app&apos;s design
								system can be one of the most tedious steps in
								building it. I have a tendency to obsess over
								small details and search meticulously for
								constant small improvements, and though it comes
								from good intentions this habit can bottleneck
								overall progress at times.
							</p>
							<p>
								Utilizing Material UI in PetSocial&apos;s
								frontend was a huge productivity boost during
								development since MUI components come (mostly)
								pre-styled and naturally fit well together.
								Finding ways for most app components to mingle
								peacefully was not an issue, and my urge to
								endlessly micro-optimize was contained by the
								completeness of the base design system.
							</p>
							<p>
								The MUI component-based abstractions of CSS grid
								as well as the &lt;Pagination /&gt; and
								&lt;Autocomplete /&gt; components (Autocomplete
								used for tags input field) in particular were
								huge time-savers!
							</p>
							<div
								id='formImgWrapper'
								className='relative mt-16 flex h-auto flex-col justify-center text-center md:ml-8 md:w-auto md:max-w-[80%]'
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
								<Image
									alt="PetSocial's post submission form, made with Material UI components"
									src={formImg}
									objectFit='cover'
									objectPosition='top'
								/>
							</div>
							<p>
								Additionally, post and user data for PetSocial
								is stored in a MongoDB database which is queried
								and updated through an Express.js server. Both
								MongoDB and Express.js were technologies that I
								used for the first time in making this project,
								and I found them both intuitive and enjoyable to
								use!
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
								<a
									className='underline'
									href='https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid'
									target='_blank'
									rel='noreferrer'
								>
									Configuring Google OAuth credentials for a
									web application
								</a>{' '}
								is fortunately well-documented and involves
								fairly few steps. The steps required to load the
								JavaScript client library and render a
								sign-up/login button in an app, however, were
								confusing at times and led to complications in
								both the code implementation and in the UI/UX.
							</p>
							<p>
								The{' '}
								<a
									className='underline'
									href='https://developers.google.com/identity/gsi/web/guides/client-library'
									target='_blank'
									rel='noreferrer'
								>
									method that I attempted
								</a>{' '}
								for rendering a &quot;sign-up/login with
								Google&quot; button involved injecting a custom
								script into the document with an HTML
								&lt;script&gt; tag. Once the client library
								script is loaded you can call the initialize()
								method to provide a callback function for
								successful signups/logins and the renderButton()
								method to create a clickable element that
								executes the callback. This method came with
								some spicy unexpected challenges:
							</p>
							<ol className='list-decimal space-y-4 pl-8 text-sm'>
								<li>
									If your auth logic requires multiple
									callback functions - like, for signing up{' '}
									<i>and</i> logging in - you will need to
									remove the script, replace it, and re-render
									your app to swap the current callback, which
									results in an awkward code implementation
									and potentially also problems in UX if the
									page reload causes a noticeable hiccup.
								</li>
								<li>
									The IdConfiguration interface that is
									required and defined{' '}
									<a
										className='underline'
										href='https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration'
										target='_blank'
										rel='noreferrer'
									>
										here in the docs
									</a>{' '}
									is hefty, and cannot be easily copied to
									your project. (Or, at least, I struggled to
									find out how to do that.)
								</li>
								<li>
									Very few style configurations can be applied
									to the login/signup button - manual
									alterations will be overridden by the client
									library script - so it can be difficult to
									integrate elegantly into your layout.
								</li>
							</ol>
							<figure
								id='oAuthScriptImgWrapper'
								className='relative mx-auto flex h-auto flex-col justify-center text-center md:w-auto'
							>
								<Image
									alt='Code snapshot of the OAuth client script injection'
									src={scriptImg}
									objectFit='cover'
									objectPosition='top'
								/>
								<figcaption className='mt-4 text-xs'>
									Code snapshot of the awkward 🤔 script
									injection and replacement when toggling
									between signup and login
								</figcaption>
							</figure>
							<p>
								Another challenge while building PetSocial was
								converting from JavaScript to TypeScript after
								coding most of the application already.
							</p>
							<p>
								Though I enjoy the added type safety of working
								with TypeScript codebase, converting PetSocial
								all at once with only a working understanding of
								TypeScript was a bit of a headache. 😅 One
								noteworthy example of a tricky adaptation was
								adding type safety to Redux Toolkit&apos;s{' '}
								<i>createAsyncThunk()</i> function that is used
								to maintain global state based on interractions
								with a backend.
							</p>
							<p>
								To satisfy the TS linter and run or compile your
								application, it seemed that you must provide
								type definitions for:{' '}
							</p>
							<ol className='list-decimal space-y-4 pl-8 text-sm'>
								<li>
									Payload values to be incorporated into
									global state
								</li>
								<li>
									Input values, if any, of the payload creator
									callback function
								</li>
								<li>Your global app state</li>
							</ol>
							<div
								id='thunkTypingImgWrapper'
								className='relative mx-auto flex h-auto justify-center md:w-auto'
							>
								<Image
									alt='providing explicit typing for createAsyncThunk()'
									src={thunkTypingImg}
								/>
							</div>
							<p>
								Arriving at that conclusion, however, took a
								solid chunk of time experimenting and trying to
								wrap my head around generic function types,
								though it has also helped me to better
								understand them while working with TypeScript
								codebases since beginning the TS conversion of
								PetSocial.
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
						alt='PetSocial authentication screen main banner'
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
							A significant amount of time is often spent loading
							while PetSocial re-queries its backend between
							routes and after small user changes like submitting
							a comment, which can feel sluggish and take away
							from the overall UX. Moving forward, to circumvent
							this unneeded wait time wherever possible, I will
							incorporate{' '}
							<strong>caching mechanisms for global state</strong>{' '}
							and <strong>optimistic mutations</strong> such as
							those provided by{' '}
							<a
								className='underline'
								href='https://redux-toolkit.js.org/rtk-query/overview'
								target='_blank'
								rel='noreferrer'
							>
								RTK Query
							</a>{' '}
							or{' '}
							<a
								className='underline'
								href='https://tanstack.com/query/v4/docs/overview'
								target='_blank'
								rel='noreferrer'
							>
								React Query
							</a>{' '}
							into full-stack projects to maximize the fluidity of
							the user experience.
						</p>
						<figure
							id='loadingImgWrapper'
							className='mx-auto flex w-full flex-col items-center justify-center lg:w-fit'
							style={
								darkMode
									? {
											boxShadow:
												'rgba(255, 255, 255, 5%) 0px 5px 50px',
									  }
									: {}
							}
						>
							<Image
								alt='PetSocial post loading skeletons that are displayed frequently between user interractions'
								src={loadingSkeletonsImg}
								objectFit='cover'
							/>
							<figcaption className='mt-4 text-xs'>
								Too many post loading skeletons ❌
							</figcaption>
						</figure>
						<p>
							Material UI is a great option for bootstrapping a
							frontend if you struggle with creating or adhering
							to a consistent design approach. That being said,
							the lack of customizability is sometimes frustrating
							and may situationally be not worth the potential
							time saved from its abstractions.
						</p>
					</div>
				</section>
				<Footer darkMode={darkMode} />
			</div>
		</MotionConfig>
	)
}

export default PetSocialDetails
