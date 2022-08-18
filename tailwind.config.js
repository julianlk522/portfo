/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				mainBg: "url('../public/bg.png')",
				mainBgFaded: "url('../public/bgFaded.png')",
			},
			borderColor: {
				softLightPink: 'rgba(255, 172, 198, 0.5)',
			},
			dropShadow: {
				mediumDark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
}
