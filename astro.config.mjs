import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site: 'https://evomatic.github.io',
	integrations: [
		htmx(),
		icon({
			iconDir: 'src/images/icons',
		}),
	],
	// adapter: vercel(),
});
