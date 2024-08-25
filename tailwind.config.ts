import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accentColor: '#3F4A99',
        textColor: '#3F4A99',
        bgColor: '#000',
      },
      fontFamily: {
        poppin: ['Poppin', 'san-serif'],
        sacra: ['Sacramento', 'cursive'],
        gowun: ['Gowun Batang', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
