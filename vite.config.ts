import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";

export default defineConfig({
  base: './',
  plugins: [
    vue(),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: './docs',
    // lib: {
    //   entry: resolve(__dirname, "src/index.ts"),
    //   name: 'vue3-draggable',
    //   fileName: (format) => `vue3-draggable.${format}.js`
    // },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
