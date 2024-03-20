/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				griptape: "url('./src/assets/griptape.jpg')",
				menugreen: "url('./src/assets/menugreen.svg')",
				menuwhite: "url('./src/assets/menuwhite.svg')",
			},
			colors: {
				lightblue: "#ADD8E6",
			},
		},
	},
	plugins: [],
};
