import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/max-profit-interactive-game/", // Replace with your actual repository name
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensure that index.html is at the root of dist
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
