import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },

	vite: {
		optimizeDeps: {
			include: ['swiper/vue', 'swiper/modules', 'swiper']
		}
	},

	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],

	devServer: {
		port: 3423,
		host: '0.0.0.0'
	},

	app: {
		head: {
			title: 'Şöhrat Toýlyýew',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		}
	}
})
