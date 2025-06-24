/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
         xs: '640px',       // grid-cols-2
        sm: '800px',       // grid-cols-3
        md: '1024px',     // grid-cols-4
        lg: '1280px',
      },
	  keyframes: {
        ring1: {
          "0%": { transform: "rotateX(35deg) rotateY(-45deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(35deg) rotateY(-45deg) rotateZ(-360deg)" },
        },
        ring2: {
          "0%": { transform: "rotateX(50deg) rotateY(10deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(50deg) rotateY(10deg) rotateZ(360deg)" },
        },
        ring3: {
          "0%": { transform: "rotateX(35deg) rotateY(55deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(35deg) rotateY(55deg) rotateZ(360deg)" },
        },
      },
      animation: {
        ring1: "ring1 2s linear infinite",
        ring2: "ring2 2s linear infinite",
        ring3: "ring3 2s linear infinite",
      },
		},
	},
	plugins: [],

};
