import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vs/", // 将 'vs' 替换为你的仓库名称
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   sourcemap: false,
  //   minify: 'terser',
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['react', 'react-dom'],
  //       }
  //     }
  //   }
  // }
});
