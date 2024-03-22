import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import icon from 'astro-icon';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), icon({
    iconDir: 'src/images/icons'
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});