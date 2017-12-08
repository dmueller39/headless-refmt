import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";

export default {
  input: "index.js",
  output: { file: "public/bundle.js", format: "iife" },
  plugins: [resolve(), commonjs(), builtins()],
  sourcemap: true,
  treeshake: false,
  name: "headlessRefmt"
};
