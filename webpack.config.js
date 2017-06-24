const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, 'app');
const buildPath = path.join(__dirname, 'public');

const config = {
  context: srcPath,
  entry: path.join(__dirname, 'app/index'),
  output: {
    filename: "bundle.js",
    path: buildPath
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
     { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
   ]
  }
}

module.exports = config;
