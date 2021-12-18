import { defineConfig } from 'rollup';
import { babel } from "@rollup/plugin-babel"
// Locate and bundle third-party dependencies in node_modules
import { nodeResolve } from "@rollup/plugin-node-resolve"
// Convert CommonJS modules to ES6
import commonjs from "@rollup/plugin-commonjs"

export default defineConfig({
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      // exclude core-js will solve Circular dependencies, 
      // but it breaks the polyfill
      // exclude: [/core-js/]
    }),
  ]
})