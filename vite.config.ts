import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '15f9-82-7-115-83.ngrok-free.app',  // Add your Ngrok URL here
      'localhost',
      '127.0.0.1'
    ]
  }
});
