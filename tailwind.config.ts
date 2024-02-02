import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accentColor: "#498bce",
				textColor: "#99bee4",
				bgColor: "#10253b",
			},
			fontFamily: {
				poppin: ["Poppin", "san-serif"],
				sacra: ["Sacramento", "cursive"],
				gowun: ["Gowun Batang", "serif"],
			},
		},
	},
	plugins: [],
};
export default config;
