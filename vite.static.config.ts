import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Static SPA build config (for shared hosting like Hostinger cPanel).
// Outputs a plain index.html + assets to dist/, no SSR.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
