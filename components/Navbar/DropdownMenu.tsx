import React from 'react'

function DropdownMenu({ setShowModal }) {
	return (
		<div
			id='modalDropdown'
			className='absolute top-16 left-[40%] z-[1] flex w-[60%] flex-col items-center justify-center bg-black bg-opacity-60 px-8 text-white'
			style={{ height: 'calc(100% - 4rem)' }}
		>
			<ul className='flex h-full flex-col items-center justify-center gap-16'>
				<li>
					<a
						href='#aboutContainer'
						onClick={() => setShowModal(false)}
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#workContainer'
						onClick={() => setShowModal(false)}
					>
						Work
					</a>
				</li>
				<li>Contact</li>
				<li>Resume</li>
			</ul>
		</div>
	)
}

export default DropdownMenu
