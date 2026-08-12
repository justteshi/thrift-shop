import {defineConfig} from 'vite';
import {resolve} from 'node:path';

export default defineConfig(({command}) => ({
    base: command === 'serve' ? '/' : '/thrift-shop/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                products: resolve(import.meta.dirname, 'products.html'),
                about: resolve(import.meta.dirname, 'about.html'),
                contacts: resolve(import.meta.dirname, 'contacts.html'),
                notFound: resolve(import.meta.dirname, '404.html')
            }
        }
    }
}));
