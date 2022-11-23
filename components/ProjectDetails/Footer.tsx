import React from 'react'
import Link from 'next/link'

function Footer() {
	const sections = ['about', 'skills', 'work', 'contact']
	return (
		<footer className='absolute bottom-0 left-0 flex h-64 w-full bg-slate-700 px-8 text-white sm:px-16 md:h-32'>
			<div
				id='footerMainLinks'
				className='mr-auto flex w-min items-center md:mr-16 md:w-full'
			>
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
				<ul className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
					{sections.map((section, i) => {
						return (
							<li key={i}>
								<Link
									href={`/#${section}Container`}
									scroll={false}
								>
									{section.at(0).toUpperCase() +
										section.slice(1)}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>

			<div id='footerSecondaryLinks' className='flex w-auto items-center'>
				<ul className='flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0'>
					<li>
						<a
							href='https://github.com/julianlk522'
							target='_blank'
							rel='noreferrer'
						>
							Github
						</a>
					</li>
					<li className='mx-4 hidden opacity-20 md:block'>|</li>
					<hr className='block h-1 w-1/4 opacity-20 md:hidden' />
					<li>
						<a
							href='https://docs.google.com/document/d/e/2PACX-1vQfJyEmppuH3zko7vjioYFQe3ZBsEva8x0kWg8kL-ASaeDoCh5sysfEJus9H61_3Smvub8fXZiN-beA/pub'
							target='_blank'
							rel='noreferrer'
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
