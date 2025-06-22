import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "dist", // Ensures it builds into 'frontend/dist'
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
				changeOrigin: true,
			},
		},
	},
});
