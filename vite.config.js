import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/webminner/',  // GitHub repo name
    server: {
        port: 5173
    }
})
