import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:
  //         "https://api.render.com/deploy/srv-clpkpe1oh6hc73c5vps0?key=MdAB4HJKc_Y/api",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
