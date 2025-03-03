import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://Martinjose1998.github.io',
  base: 'portfolio-astro',
  integrations: [svelte()]
});
