import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
	devtools: { enabled: true },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	build: {
		transpile: ["vuetify"],
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
		//...
	],
	css: [
		"@mdi/font/css/materialdesignicons.min.css",
		"vuetify/lib/styles/main.css",
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
});
