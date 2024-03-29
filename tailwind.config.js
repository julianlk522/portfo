/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primaryOrange: '#FF5B23',
				primaryPink: '#FFACC6',
				primaryBlue: '#00d8ff',
			},
			spacing: {
				aboutSpiralTopLg: 'calc(50% - 16rem)',
				fakeButtonImageSm: 'calc(100vw - 8rem)',
			},
			backgroundImage: {
				introAndOutroBg: "url('../public/introAndOutroBg.webp')",
				tomatoToLightPink:
					'linear-gradient(166deg, rgba(255,172,198,1) 25%, rgba(255,91,35,1) 100%)',
				sunrise:
					'linear-gradient(180deg, rgba(255, 0, 0, 0.9) 0%, rgba(255, 91, 35, 0.3) 100%)',
				layeredWaves: "url('../public/contactBgLayeredWaves.svg')",
				portfoStackTextSm:
					'linear-gradient(135deg, rgba(255,91,35,0) 0%, rgba(255,0,0,0.025) 20%, rgba(255,91,35,0.1) 45%, rgba(255,0,0,0.025) 70%, rgba(255,91,35,0) 100%)',
				portfoStackTextLg:
					'linear-gradient(135deg, rgba(255,91,35,0) 20%, rgba(255,91,35,0.1) 30%, rgba(255,0,0,0.15) 60%, rgba(255,91,35,0.1) 80%, rgba(255,91,35,0) 100%)',
			},
			dropShadow: {
				mediumDark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
			boxShadow: {
				thick: '0px 4px 12px 0px rgba(0,0,0,0.5)',
				gridMemberDark: '0px 10px 30px -15px rgb(255 255 255 / 15%)',
				gridMemberLight: '0px 10px 30px -15px rgb(0 0 0 / 25%)',
			},
		},
		screens: {
			xs: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			tall: { raw: '(min-height: 750px)' },
		},
	},
	darkMode: 'class',
	plugins: [],
}
