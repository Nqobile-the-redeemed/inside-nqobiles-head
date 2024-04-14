import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  Markdown  from 'markdown-it'
import Inspect from 'vite-plugin-inspect'

const md = new Markdown()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    Inspect(),
    {
      name: 'omega-markdown-translator',
      transform(code, id) {
        if (id.endsWith('.md')) {
          const result = md.render(code);
          console.log({id, result});
          return `export default ${JSON.stringify(result)}`;
        }
      }
    }
  ],
})
