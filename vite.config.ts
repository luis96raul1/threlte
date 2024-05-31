import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'RFSvelte',
      fileName: 'main',
      formats: ['es']
    }
  },
  plugins: [
    svelte({
      compilerOptions:{
        customElement: true
      }
    }),
  ],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, './src/lib/')
    }
  }
})

