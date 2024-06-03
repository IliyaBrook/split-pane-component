import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default {
	input: 'src/index.tsx',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: 'esm',
			exports: 'named',
			sourcemap: true,
		},
	],
	external: [
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.json',
		}),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
		}),
	],
	watch: {
		include: 'src/**',
	},
};
