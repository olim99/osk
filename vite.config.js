import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/well/', // обязательно ставим слэш в начале и в конце
  plugins: [react(),
    tailwindcss(),
  ],
});
