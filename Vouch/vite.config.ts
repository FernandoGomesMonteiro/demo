import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // <--- ESSA LINHA É OBRIGATÓRIA. SE NÃO TIVER, A TELA FICA BRANCA.
})