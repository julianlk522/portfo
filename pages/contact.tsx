import Image from 'next/image'
import laugh from '../public/laugh.svg'
import visual from '../public/visual.svg'
import route from '../public/route.svg'
import react from '../public/react.svg'

export default function Work() {
	return (
		<div
			id='contactContainer'
			className=' h-full py-16 px-32 flex flex-col justify-between text-center relative overflow-hidden'
		>
			<h1 id='contactTitle' className='text-6xl pt-8'>
				Let's design your dream web app.
			</h1>
			<main className='flex justify-between w-full h-[75%]'>
				<section id='form' className='w-[40%] h-full'>
					<form
						onSubmit={() => console.log('thanks for submitting!')}
						className='relative h-full flex flex-col justify-evenly items-center overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-sunset rounded-[3rem] py-8 px-12 after:border-4 after:border-[#FF5B23] after:rounded-[3rem] after:border-opacity-50 after:blur-sm shadow-thicc'
					>
						<h3 className='self-start z-[1] text-white text-lg'>
							Name
						</h3>
						<input
							type='text'
							id='nameInput'
							className='w-full z-[1] rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none'
						/>
						<h3 className='self-start z-[1] text-white text-lg'>
							Email
						</h3>
						<input
							type='email'
							id='emailInput'
							className='w-full z-[1] rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none'
						/>
						<div className='flex justify-between items-center w-full'>
							<h3 className='self-start z-[1] text-white text-lg'>
								Message
							</h3>
							<Image
								src={laugh}
								className='z-[1]'
								width={32}
								height={32}
							/>
						</div>
						<textarea
							name='messageContent'
							id='messageInput'
							className='w-full resize-none z-[1] rounded-xl py-2 px-4 drop-shadow-mediumDark focus:outline-none'
							placeholder='your message'
							rows={5}
						></textarea>
						<button
							type='submit'
							className='w-1/2 py-2 px-4 text-white text-2xl z-[1] bg-[#FF5B23] bg-opacity-30 rounded-xl drop-shadow-mediumDark'
						>
							Submit!
						</button>
					</form>
				</section>

				<section
					id='experience'
					className='w-[60%] h-full flex flex-col justify-evenly'
				>
					<div className='flex justify-end items-center'>
						<div className='flex justify-center items-center mx-16 w-24 h-24 rounded-full bg-slate-300 drop-shadow-mediumDark'>
							<Image
								src={visual}
								width={80}
								height={80}
								layout='intrinsic'
								className='object-contain object-center'
							/>
						</div>
						<div className='flex flex-col justify-end items-center max-w-[60%]'>
							<h3 className='text-2xl'>
								UI/UX and Layout Design
							</h3>
							<p className='text-xs'>
								Bringing WCAG best practices to your project, a
								meticulous attention for detail, and a boundless
								thirst for inventive ways to express your
								content.
							</p>
						</div>
					</div>
					<div className='flex justify-end items-center'>
						<div className='flex justify-center items-center mx-16 w-24 h-24 rounded-full bg-slate-300 drop-shadow-mediumDark'>
							<Image
								src={route}
								width={80}
								height={80}
								layout='intrinsic'
								className='object-contain object-center'
							/>
						</div>
						<div className='flex flex-col justify-center items-center max-w-[60%]'>
							<h3 className='text-2xl'>
								Backend APIs and Routing
							</h3>
							<p className='text-xs'>
								Defending your app from errors or misuse while
								also maximizing performance. Designing your APIs
								with simplicity and ease-of-use in mind, but
								never at the expense of robustness.
							</p>
						</div>
					</div>
					<div className='flex justify-end items-center'>
						<div className='flex justify-center items-center mx-16 w-24 h-24 rounded-full bg-slate-300 drop-shadow-mediumDark'>
							<Image
								src={react}
								width={80}
								height={80}
								layout='intrinsic'
								className='object-contain object-center'
							/>
						</div>
						<div className='flex flex-col justify-center items-center max-w-[60%]'>
							<h3 className='text-2xl'>
								Modern Frameworks and Tech
							</h3>
							<p className='text-xs'>
								Harnessing expertise in ReactJS, modern (ES6+)
								JavaScript, TypeScript, NodeJS, Cypress testing
								library, and UI libraries such as MaterialUI and
								TailwindCSS.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
