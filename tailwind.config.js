/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				tomatoToLightPink:
					'linear-gradient(180deg, #FF5B23, #FFACC6 65%)',
				sunrise:
					'linear-gradient(180deg, rgba(255, 0, 0, 0.9) 0%, rgba(255, 91, 35, 0.3) 100%)',
				sunset: 'linear-gradient(180deg, rgba(252, 17, 17, 0.4) 42.19%, rgba(151, 71, 255, 0.4) 100%)',
				mainBg: "url('../public/bg.png')",
				mainBgFaded: "url('../public/bgFaded.png')",
				mainBgDark: "url('../public/bgFadedDark.png')",
			},
			borderColor: {
				softLightPink: 'rgba(255, 172, 198, 0.5)',
			},
			dropShadow: {
				mediumDark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
			boxShadow: {
				thick: '0px 6px 20px 0px rgba(0,0,0,0.65)',
				navbarDarkMild: '0px 0px 10px #999',
			},
		},
		screens: {
			xs: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
}
