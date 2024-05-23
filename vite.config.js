/* eslint-disable no-undef */

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@images': path.resolve(__dirname, './src/assets/images/'),
            '@hooks': path.resolve(__dirname, './src/hooks/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@layout': path.resolve(__dirname, './src/components/layout/'),
            '@ui': path.resolve(__dirname, './src/components/ui/'),
            '@sections': path.resolve(__dirname, './src/components/sections/')
        }
    }
})
