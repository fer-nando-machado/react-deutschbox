import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "dist") {
    return {
      plugins: [
        react(),
        cssInjectedByJsPlugin({
          cssAssetsFilterFunction: (outputAsset) =>
            outputAsset.fileName === "style.css",
        }),
        dts(),
      ],
      build: {
        outDir: "dist",
        lib: {
          entry: path.resolve(__dirname, "src/DeutschBox.tsx"),
          name: "DeutschBox",
          fileName: (format: any) => `DeutschBox.${format}.js`,
          formats: ["es", "umd"],
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
    base: "/react-deutschbox/",
    build: {
      outDir: "build",
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
    },
  };
});
