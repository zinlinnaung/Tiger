import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3011,
  },
  preview: {
    allowedHosts: ["app.tigerinvites.com"], // Add your allowed host here
  },
});
