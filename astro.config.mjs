import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://teunlamers.nl",
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  integrations: [react(), svelte()],
  server: {
    // Vite blocks unknown Host headers, also in `astro preview` (our start command).
    allowedHosts: ["teunlamers.nl", "www.teunlamers.nl"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
