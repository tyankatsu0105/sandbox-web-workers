const webpack = require("webpack")
const path = require('path');


/** @type {Parameters<typeof webpack>[0][0]} */
module.exports = {
  entry: './src/main.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    open: true,
    port: 3000,
  }
};