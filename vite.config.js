import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/ngariung/didieu/',
    plugins: [
        tailwindcss(),
    ],
})