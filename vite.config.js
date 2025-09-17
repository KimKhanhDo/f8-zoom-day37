import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    base: '/f8-zoom-day37/',
    resolve: {
        alias: {
            // Trả về đường dẫn tuyệt đối trong dự án đến thẳng src
            // eslint-disable-next-line no-undef
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(
                // eslint-disable-next-line no-undef
                __dirname,
                './src/layouts/DefaultLayout/components'
            ),
        },
    },
});
