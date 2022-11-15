import React from 'react'

const NavHomeButton = () => {
	return (
		<div id='NavHomeButton' className='h-6 w-6 dark:text-white md:hidden'>
			<svg
				className='max-h-full max-w-full'
				xmlns='http://www.w3.org/2000/svg'
				shapeRendering='geometricPrecision'
				textRendering='geometricPrecision'
				imageRendering='optimizeQuality'
				viewBox='0 0 123 112'
				width='123'
				height='112'
				fill='currentColor'
			>
				<a
					href='https://julianlk.vercel.app'
					target='_self'
					rel='noreferrer'
				>
					<text x='0' y='15' fill='black'>
						My Blog!
					</text>
				</a>
				<g>
					<path d='M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z' />
				</g>
			</svg>
		</div>
	)
}

export default NavHomeButton
