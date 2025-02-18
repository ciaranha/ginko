import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { netlifyEdgeAdapter } from "@builder.io/qwik-city/adapters/netlify-edge/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      netlifyEdgeAdapter(),
    ],
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.netlify.tsx", "@qwik-city-plan"],
      },
    },
  };
}); 