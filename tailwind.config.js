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
				mainBg: "url('../public/mainBg.webp')",
				labText:
					'linear-gradient(45deg, hsl(189deg 100% 50%) 0%, hsl(196deg 100% 59%) 0%, hsl(221deg 100% 77%) 8%, hsl(279deg 99% 78%) 20%, hsl(323deg 100% 70%) 38%, hsl(345deg 100% 65%) 63%, hsl(15deg 100% 57%) 100%)',
				aboutTextContentBackdrop:
					'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0, 216, 255, 1) 0%, rgba(0,0,0,0) 50%)',
				portfoStackTextSm:
					'linear-gradient(135deg, rgba(255,91,35,0) 0%, rgba(255,0,0,0.1) 20%, rgba(255,91,35,0.15) 45%, rgba(255,0,0,0.1) 70%, rgba(255,91,35,0) 100%)',
				portfoStackTextLg:
					'linear-gradient(135deg, rgba(255,91,35,0) 35%, rgba(255,91,35,0.1) 60%, rgba(255,0,0,0.15) 85%, rgba(255,91,35,0.1) 95%, rgba(255,91,35,0) 100%)',
				contactFormBackdropDarkMode:
					'linear-gradient(330deg, rgba(255,172,198,0) 15%, rgba(0,216,255,0.15) 140%, rgba(255,172,198,0) 50%)',
				contactFormBackdropLightMode:
					'linear-gradient(350deg, rgba(255,172,198,0) 40%, rgba(0,216,255,0.2) 100%)',
				contactFormSubmitBackdrop:
					'linear-gradient(315deg, rgba(255,172,198,0.25) 0%, rgba(0,216,255,0.25) 35%, rgba(255,172,198,0.25) 55%, rgba(255,172,198,0.5) 75%, rgba(0,216,255,0.125) 100%)',
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
	darkMode: 'class',
	plugins: [],
}
