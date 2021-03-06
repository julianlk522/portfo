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
		},
	},
	plugins: [],
}
