import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [
    react(),
    svgr(),
    VitePWA({
      srcDir: "src",
      filename: "service-worker.ts",
      strategies: "injectManifest",
      injectManifest: {
        swDest: "dist/service-worker.js",
      },
      manifest: {
        name: "Stadslab Zeist",
        short_name: "Stadslab",
        description: "Stadslab Zeist",
        theme_color: "#000000",
        icons: [
          {
            src: "img/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "img/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
