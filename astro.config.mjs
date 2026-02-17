// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sadik-malik.github.io",
  base: '/sadik-malik',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  output: 'static',
});