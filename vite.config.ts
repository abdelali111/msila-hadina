import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouterVite(),
    react(),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ["@tanstack/react-query"],
  },
  build: {
    target: ["ES2020"],
    minify: "esbuild",
    rollupOptions: {
      external: ["node:async_hooks"],
    },
  },
});
