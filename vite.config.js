import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/oms": {
        target: "https://10.123.250.132:9443",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/oms/, "")
      }
    }
  }
});