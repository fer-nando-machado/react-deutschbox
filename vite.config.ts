import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/deutschbox/",
  build: {
    outDir: "dist",
    //lib: {
    //  entry: path.resolve(__dirname, 'src/DeutschBox.tsx'),
    //  name: 'DeutschBox',
    //  fileName: (format) => `deutschBox.${format}.js`,
    //},
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      //external: ["react", "react-dom"],
      //output: {
      //  globals: {
      //    react: "React",
      //    "react-dom": "ReactDOM",
      //  },
      //},
    },
  },
});
