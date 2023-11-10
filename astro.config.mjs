import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_URL, // TODO: Add your website URL here
  integrations: [sitemap()],
  output: "hybrid",
  adapter: vercel(),
});
