// noinspection JSCheckFunctionSignatures

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';
	
	return {
		root: isProduction ? undefined : 'stories',
		plugins: [
			react(),
			dts({
				tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
				outDir: 'dist',
				insertTypesEntry: true,
			}),
		],
		resolve: {
			alias: [
				{
					find: '~',
					replacement: path.resolve(__dirname, './src'),
				},
			],
		},
		build: {
			manifest: true,
			minify: true,
			reportCompressedSize: true,
			lib: {
				entry: path.resolve(__dirname, 'src/index.tsx'),
				name: 'SplitPaneComponent',
				fileName: format => `split-pane-component.${format}.js`,
				formats: ['es', 'cjs'],
			},
			rollupOptions: {
				external: ['react', 'react-dom'],
				output: {
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM',
					},
					exports: 'named',
				},
				plugins: [
					typescriptPaths({
						preserveExtensions: true,
					}),
				],
			},
		},
		server: {
			open: true,
			port: 4002
		},
	};
});
