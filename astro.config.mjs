import { defineConfig } from 'astro/config'; 

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://teunlamers.github.io",
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
  integrations: [
    tailwind(),
    react(), 
    svelte()
  ],
});