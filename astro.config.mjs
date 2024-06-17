import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://evomatic.github.io',
	base: '/portfolio/',
	output: 'static',
	build: {
		outDir: 'dist',
	},
	integrations: [
		htmx(),
		icon({
			iconDir: 'src/images/icons',
		}),
	],
	// adapter: vercel(),
});
