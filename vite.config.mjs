// noinspection JSCheckFunctionSignatures

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';
	const root = isProduction ? undefined : 'stories';
	return {
		root,
		plugins: [react()],
		resolve: {
			alias: {
				'@': '/src'
			}
		},
		build: {
			outDir: 'dist',
			lib: {
				entry: 'src/index.tsx',
				name: 'SplitPaneComponent',
				formats: ['es', 'cjs'],
				fileName: (format) => `index.${format}.js`
			},
			rollupOptions: {
				external: ['react', 'react-dom'],
				output: {
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM'
					},
					exports: 'named'
				}
			}
		},
		server: {
			open: true
		}
	};
});