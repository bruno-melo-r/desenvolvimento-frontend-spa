import { defineConfig } from 'vite';

export default defineConfig({
    root: 'html',
    base: '/desenvolvimento-frontend-spa/',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    }
});