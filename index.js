const refmt = require("./refmt");

function compileREToJS(
  reSource,
  ocaml /* ocaml is in the global scope from an iife */
) {
  const ast = refmt.parseRE(reSource);
  const mlSource = refmt.printML(ast);
  console.log(mlSource);
  return ocaml.compile(mlSource);
}

module.exports = compileREToJS;
