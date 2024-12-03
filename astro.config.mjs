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
	// update these values based on env
	site: `http://dev.nextgenstats.nfl.com:${DEV_PORT}`,
	base: undefined, // this will set a base url to every url path

	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),

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
