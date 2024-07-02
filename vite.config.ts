import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "dist") {
    return {
      plugins: [react()],
      build: {
        outDir: "dist",
        lib: {
          entry: path.resolve(__dirname, "src/DeutschBox.tsx"),
          name: "DeutschBox",
          fileName: (format) => `DeutschBox.${format}.js`,
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
  };
});
