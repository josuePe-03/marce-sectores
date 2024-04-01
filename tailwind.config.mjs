/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs
import animations from '@midudev/tailwind-animations'


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {},
	},
	plugins: [
		animations
	  ],
  };