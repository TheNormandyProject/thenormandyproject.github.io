/* POSTCSS CONFIG FILE */

let plugins = [];

const globalPlugins = [
  require("tailwindcss"),
  require("autoprefixer")
]

const productionPlugins = [
  require("cssnano")
];

plugins = plugins.concat(globalPlugins);

if ( process.env.NODE_ENV === "production" ) {
  plugins = plugins.concat(productionPlugins);
}

module.exports = { plugins }