import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	root: 'stories',
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src'
		}
	},
	build: {
		outDir: '../dist',
		lib: {
			entry: 'src/index.ts',
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
});
