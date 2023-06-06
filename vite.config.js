import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';
import {fileURLToPath} from 'url';
import {resolve} from "pathe";
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    // base: "/react-todo_2023/",
    // base: process.NODE_ENV === "production" ? "/react-todo_2023/" : "/",
    // publicDir: "public",
    plugins: [react()],
    resolve: {

        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            "@": resolve(__dirname, "./src")
        }
    }
})
