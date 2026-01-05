// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Placeholder - Update with your actual GitHub username and repo
  site: 'https://robert-laws.github.io',
  base: process.env.CI ? '/career-pivot-site' : undefined,

  vite: {
    plugins: [tailwindcss()],
  },
});