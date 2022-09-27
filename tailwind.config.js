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
					'linear-gradient(166deg, rgba(255,172,198,1) 25%, rgba(255,91,35,1) 100%)',
				sunrise:
					'linear-gradient(180deg, rgba(255, 0, 0, 0.9) 0%, rgba(255, 91, 35, 0.3) 100%)',
				sunset: 'linear-gradient(180deg, rgba(252, 17, 17, 0.4) 42.19%, rgba(151, 71, 255, 0.4) 100%)',
				mainBg: "url('../public/bg.png')",
				mainBgFaded: "url('../public/bgFaded.png')",
				mainBgDark: "url('../public/bgFadedDark.png')",
				workStackTextSm:
					'linear-gradient(135deg, rgba(255,91,35,0) 0%, rgba(255,0,0,0.0984768907563025) 20%, rgba(255,91,35,0.14889705882352944) 45%, rgba(255,0,0,0.1) 70%, rgba(255,91,35,0) 100%)',
				workStackTextLg:
					'linear-gradient(135deg, rgba(255,91,35,0) 35%, rgba(255,91,35,0.1) 60%, rgba(255,0,0,0.15) 85%, rgba(255,91,35,0.1) 95%, rgba(255,91,35,0) 100%)',
				contactFormBackdropDarkMode:
					'linear-gradient(330deg, rgba(255,172,198,0) 15%, rgba(0,216,255,0.15) 140%, rgba(255,172,198,0) 50%)',
				contactFormBackdropLightMode:
					'linear-gradient(350deg, rgba(255,172,198,0) 40%, rgba(0,216,255,0.2) 100%)',
				contactFormSubmitBackdrop:
					'linear-gradient(315deg, rgba(255,172,198,0.5) 0%, rgba(0,216,255,0.5) 35%, rgba(255,172,198,0.5) 55%, rgba(255,172,198,0.5) 75%, rgba(0,216,255,0.25) 100%)',
			},
			borderColor: {
				softLightPink: 'rgba(255, 172, 198, 0.5)',
			},
			dropShadow: {
				mediumDark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
			boxShadow: {
				thick: '0px 6px 20px 0px rgba(0,0,0,0.65)',
				navbar: '0px 0px 10px #999',
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
