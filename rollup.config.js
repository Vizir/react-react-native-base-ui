import typescript from 'rollup-plugin-typescript';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from './package.json';

// export default {
//   input: 'index.ts',
//   plugins: [
//     peerDepsExternal(),
//     typescript() // so Rollup can convert TypeScript to JavaScript
//   ],
//   output: [
//     { file: pkg.main, format: 'cjs' },
//     { file: pkg.module, format: 'esm' },
//     { file: pkg.browser, name: 'BaseUI', format: "umd" }
//   ]
// }
export default [
  {
    input: 'src/index.ts',
    plugins: [
      peerDepsExternal(),
      typescript() // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: 'dist/index.cjs.js', format: 'cjs' },
      { file: 'dist/index.esm.js', format: 'esm' },
      { file: 'dist/index.umd.js', name: 'BaseUI', format: "umd" }
    ]
  },
  {
    input: 'src/index.native.ts',
    plugins: [
      peerDepsExternal(),
      typescript() // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: 'dist/index.cjs.native.js', format: 'cjs' },
      { file: 'dist/index.esm.native.js', format: 'esm' },
      { file: 'dist/index.umd.native.js', name: 'BaseUI', format: "umd" }
    ]
  },
]
