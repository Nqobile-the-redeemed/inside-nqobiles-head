import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import markdownIt from 'vite-plugin-markdown'
// import markdownPlugin from './plugins/markdownPlugin'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    Inspect(),
    markdownIt(),
  ],
})
