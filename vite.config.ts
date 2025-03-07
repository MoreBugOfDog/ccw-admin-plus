import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "ccw",
        match: [
          "https://admin.ccw.site/fe-ccw-delivery-admin/creation-center/*",
        ],
      },
    }),
  ],
});
