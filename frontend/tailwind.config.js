/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
         xs: '640px',       // grid-cols-2
        sm: '800px',       // grid-cols-3
        md: '1024px',      // grid-cols-4
        lg: '1280px',
      },
		},
	},
	plugins: [],

};
