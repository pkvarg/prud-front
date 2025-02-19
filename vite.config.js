import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3010,
    //port: 3000,
    proxy: {
      '/api': {
        //target: 'http://localhost:3009',
        target: 'https://prud-back.pictusweb.com',
      },

      '/uploads': {
        // target: 'http://localhost:3009',
        target: 'https://prud-back.pictusweb.com',
      },
    },
    // hmr: {
    //   overlay: false,
    // },
  },
})
