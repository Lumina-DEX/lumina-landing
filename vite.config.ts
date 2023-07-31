import type { UserConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "path";

// Fix for
// Uncaught (in promise) DOMException: Failed to execute 'postMessage' on 'Worker': SharedArrayBuffer transfer requires self.crossOriginIsolated.
// during localhost development
const crossOriginIsolation: Plugin = {
  name: "cross-origin-isolation",
  configureServer(server) {
    server.middlewares.use((_, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
      next();
    });
  },
};

const config: UserConfig = {
  define: {
    "process.env.BUILDTIME": JSON.stringify(new Date().toISOString()),
  },
  plugins: [react(), crossOriginIsolation],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
  },
  resolve: {
    alias: {
      $assets: path.resolve("./src/assets"),
      $components: path.resolve("./src/components"),
      $constants: path.resolve("./src/constants"),
      $contexts: path.resolve("./src/contexts"),
      $pages: path.resolve("./src/pages"),
      $utils: path.resolve("./src/utils"),
      $states: path.resolve("./src/states"),
      $types: path.resolve("./src/types"),
      $lib: path.resolve("./src/lib"),
    },
  },
};

export default config;

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import topLevelAwait from "vite-plugin-top-level-await";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     topLevelAwait({
//       // The export name of top-level await promise for each chunk module
//       promiseExportName: "__tla",
//       // The function to generate import names of top-level await promise in each chunk module
//       promiseImportName: (i) => `__tla_${i}`,
//     }),
//   ],
//   resolve: {
//     alias: {
//       $assets: path.resolve("./src/assets"),
//       $components: path.resolve("./src/components"),
//       $constants: path.resolve("./src/constants"),
//       $contexts: path.resolve("./src/contexts"),
//       $pages: path.resolve("./src/pages"),
//       $parts: path.resolve("./src/parts"),
//       $utils: path.resolve("./src/utils"),
//     },
//   },
//   build: {
//     target: "esnext",
//   },
// });
