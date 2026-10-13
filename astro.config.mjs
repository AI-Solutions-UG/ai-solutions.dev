// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ai-solutions.dev",

  // Custom domain → root. PR previews are built into a subfolder
  // (e.g. /pr-preview/pr-3/) by the preview workflow via BASE_PATH.
  base: process.env.BASE_PATH || "/",

  integrations: [react()],
});
