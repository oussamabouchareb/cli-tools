import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import shebang from "rollup-plugin-preserve-shebang";
import rjson from "@rollup/plugin-json";
import peerDeps from "rollup-plugin-peer-deps-external";

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
    
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-typescript"],
      plugins: ["@babel/plugin-proposal-class-properties"],
      babelHelpers: "bundled",
    }),
    typescript(),
    shebang(),
    rjson(),
    peerDeps()
  ],
};
