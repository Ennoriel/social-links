import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true
			},
			{
				file: pkg.browser,
				format: 'umd',
				name: 'chyme',
				sourcemap: true
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true
			}
		],
		plugins: [commonjs(), typescript()]
	},
	{
		input: 'src/index.ts',
		output: {
			file: pkg.types,
			format: 'es'
		},
		plugins: [dts()]
	}
];
