import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from 'rollup-plugin-peer-deps-external'
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
// import cssPorter from 'rollup-plugin-css-porter';

// const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/esm/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            external(),
            postcss({
                extract: true,
                modules: true
            }),
            typescript({ 
                tsconfig: "./tsconfig.json",
                // exclude: ['*.css']
            }),
            // cssPorter({
            //     dest: 'dist/bundle.css'
            // })
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
