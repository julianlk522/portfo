export interface GridMemberProps {
	tailwindStyles: string
	objectPosition?: string
	screenshotId: number
	title: string
	description?: string
	altImgText: string
	stackItems: string[]
	ghLink: string
	liveLink?: string
}

const projectsData: GridMemberProps[] = [
	{
		tailwindStyles: 'md:col-span-2',
		screenshotId: 0,
		title: 'PetSocial',
		description: 'Media sharing for pet owners and pet lovers',
		altImgText: 'a Social Media app for pet owners',
		stackItems: [
			'React.js',
			'TypeScript',
			'Redux Toolkit',
			'Node.js',
			'Express.js',
			'MongoDB',
			'MaterialUI',
			'Google OAuth',
		],
		ghLink: 'https://github.com/julianlk522/pet-social-media',
		liveLink: 'https://pet-social-project.netlify.app',
	},
	{
		tailwindStyles:
			'row-start-2 md:col-span-1 md:col-start-3 md:row-start-1',
		screenshotId: 1,
		title: 'Hyper Typer 2000',
		altImgText: 'a React-based typing game to test your speed and accuracy',
		stackItems: [
			'D3.js',
			'React.js',
			'TypeScript',
			'Context API',
			'TailwindCSS',
			'DaisyUI',
			'Cypress Testing Library',
		],
		ghLink: 'https://github.com/julianlk522/hyper-typer',
		liveLink: 'https://hyper-typer-2000.netlify.app/start',
	},
	{
		tailwindStyles: 'row-start-3 md:col-span-1 md:row-start-2',
		screenshotId: 2,
		title: 'Dancing Button of Doom',
		altImgText:
			'a click-based Javascript and CSS game with a surprising twist',
		stackItems: ['Javascript', 'CSS', 'HTML'],
		ghLink: 'https://github.com/julianlk522/dancing-button',
		liveLink: 'https://dancing-button-of-doom.netlify.app/',
	},
	{
		tailwindStyles: 'row-start-4 md:col-span-2 md:row-start-2',
		objectPosition: 'object-left-bottom',
		screenshotId: 3,
		title: 'Chat Station',
		description: 'Quickly and conveniently message your friends',
		altImgText: 'a chat app for messaging your friends',
		stackItems: [
			'React.js',
			'TypeScript',
			'MySQL',
			'Express.js',
			'Context API',
			'TailwindCSS',
			'Google OAuth',
		],
		ghLink: 'https://github.com/julianlk522/chat-app',
		liveLink: 'https://chat-station-project.netlify.app/',
	},
]

export default projectsData