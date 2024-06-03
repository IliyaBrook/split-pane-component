import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	const isProduction = mode === 'production';
	return {
		root: isProduction ? undefined : 'stories',
		plugins: [
			react(),
			viteTsconfigPaths(),
			dts({
				tsconfigPath: 'tsconfig.json',
				insertTypesEntry: true,
				outDir: 'dist/types',
				cleanVueFileName: true,
				staticImport: true,
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		build: {
			lib: {
				entry: path.resolve('src/index.tsx'),
				name: 'split-pane-component',
				fileName: (format) => `split-pane-component.${format}.js`,
			},
			rollupOptions: {
				external: ['react', 'react-dom'],
				output: {
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM',
					},
				}
			}
		},
		server: {
			port: 4002
		},
	}
})
