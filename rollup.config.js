import typescript from 'rollup-plugin-typescript';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: 'src/index.ts',
    plugins: [
      peerDepsExternal(),
      typescript() // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: 'dist/index.web.cjs.js', format: 'cjs' },
      { file: 'dist/index.web.esm.js', format: 'esm' },
      { file: 'dist/index.web.umd.js', name: 'BaseUI', format: "umd" }
    ]
  },
  {
    input: 'src/index.native.ts',
    plugins: [
      peerDepsExternal(),
      typescript() // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: 'dist/index.native.cjs.js', format: 'cjs' },
      { file: 'dist/index.native.esm.js', format: 'esm' },
      { file: 'dist/index.native.umd.js', name: 'BaseUI', format: "umd" }
    ]
  },
]
