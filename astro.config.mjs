import { defineConfig } from "astro/config";
import { BASE_ROUTE } from "./src/constants/routes";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  site: "https://uuykay.github.io",
  base: BASE_ROUTE,
  experimental: {
    viewTransitions: true
  }
});