// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ai-solutions.dev",

  // GitHub Pages uses the repo name as base, but with custom domain we don't need it
  base: "/",

  integrations: [react()],
});