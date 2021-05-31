import typescript from 'rollup-plugin-typescript';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from './package.json';

export default {
  input: 'index.ts',
  plugins: [
    peerDepsExternal(),
    typescript() // so Rollup can convert TypeScript to JavaScript
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
    { file: pkg.browser, name: 'BaseUI', format: "umd" }
  ]
}
	// browser-friendly UMD build
	// {
	// 	input: 'index.ts',
	// 	output: {
	//    name: 'index',
	//    file: pkg.browser,
	//    format: 'umd'
	// 	},
	// 	plugins: [
	//    resolve(), // so Rollup can find `ms`
	//    commonjs(), // so Rollup can convert `ms` to an ES module
	//    typescript() // so Rollup can convert TypeScript to JavaScript
	// 	]
	// },

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)

// ];
