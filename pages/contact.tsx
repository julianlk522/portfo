import Image from 'next/image'

export default function Work() {
	return (
		<div
			id='contactContainer'
			className=' h-full py-16 px-32 flex flex-col justify-between text-center relative overflow-hidden'
		>
			<h1 id='contactTitle' className='text-8xl pt-8'>
				Let's design your dream web app.
			</h1>
			<main className='flex justify-evenly w-full h-[75%]'>
				<section id='form' className='w-[40%] h-full'>
					<form
						onSubmit={() => console.log('thanks for submitting!')}
						className='relative h-full flex flex-col justify-evenly items-center after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-sunset after:rounded-[3rem] py-8 px-12 after:border-[#FF5B23] after:border-opacity-10 after:blur-sm'
					>
						<h3 className='self-start z-[1] text-white'>Name</h3>
						<input
							type='text'
							id='nameInput'
							className='w-full z-[1] rounded-xl py-2 px-4'
						/>
						<h3 className='self-start z-[1] text-white'>Email</h3>
						<input
							type='email'
							id='emailInput'
							className='w-full z-[1] rounded-xl py-2 px-4'
						/>
						<h3 className='self-start z-[1] text-white'>Message</h3>
						<textarea
							name='messageContent'
							id='messageInput'
							className='w-full resize-none z-[1] rounded-xl py-2 px-4'
							placeholder='your message'
							rows={5}
						></textarea>
						<button type='submit' className='text-white z-[1]'>
							Submit!
						</button>
					</form>
				</section>

				<section id='experience'>...</section>
			</main>
		</div>
	)
}
