import { defineConfig } from 'vite';

/** @type {import('tailwindcss').Config} */
export default defineConfig({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}) 