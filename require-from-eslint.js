"use strict";
// C:\Users\Harsha\OneDrive\Desktop\social media\node_modules\babel-eslint\lib\require-from-eslint.js, you can use the following approach:

Locate the re
const resolve = require("resolve");
const eslintBase = require.resolve("eslint");



onst definition = require('eslint-scope/lib/definition');

// After (replace with dynamic import)
import('eslint-scope/lib/definition').then((definition) => {
  // Use 'definition' here
}).catch((error) => {
  console.error(error);
});


module.exports = function requireFromESLint(id) {
  const path = resolve.sync(id, { basedir: eslintBase });
  return require(path);
};