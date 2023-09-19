import { defineConfig } from "astro/config";
import { BASE_ROUTE } from "./src/constants/routes";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://uuykay.github.io",
  base: BASE_ROUTE,
});
