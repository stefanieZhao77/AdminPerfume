import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  },
  compressHTML: false,
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  integrations: [mdx(), react()],
  srcDir: './src/html',
  publicDir: './src/html/public',
  cacheDir: './dist/.astro',
  outDir: './dist/html',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': 'http://localhost:4000'
      },
      watch: {
        ignored: ['!**/dist/**']
      }
    }
  }
})
