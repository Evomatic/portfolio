import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), icon()]
});
