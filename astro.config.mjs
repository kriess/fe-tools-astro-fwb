import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

const DEV_PORT = 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',

	server: {
		/* Dev. server only */
		port: DEV_PORT,
		host: true,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
	],

	vite: {
		base: '',
		define: {
			global: {},
		},
		publicDir: path.resolve(__dirname, './public'),
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
});
