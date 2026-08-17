import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: [
			// all directories and extensions will correspond to your Nuxt config
			'./app/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
			'./app/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
			'./app/widgets/**/*.{vue,js,jsx,mjs,ts,tsx}',
			'./app/UI/**/*.{vue,js,jsx,mjs,ts,tsx}',
			'./app/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
			'./app/plugins/**/*.{js,ts,mjs}',
			'./app/types/**/*.{js,ts,mjs}',
			'./app/store/**/*.{js,ts,mjs}',
			'./app/composables/**/*.{js,ts,mjs}',
			'./app/utils/**/*.{js,ts,mjs}',
			'./app/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
			'./app/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
			'./app.config.{js,ts,mjs}',
			'./app/spa-loading-template.html'
		]
	},
	theme: {
		screens: {
			laptop: { max: '1280px' },
			tablet: { max: '992px' },
			mobile: { max: '768px' },
			mobileSmall: { max: '480px' }
		},
		extend: {}
	},
	plugins: []
}
