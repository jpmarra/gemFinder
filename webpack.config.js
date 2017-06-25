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
    rules: [
     {
       use: [{
         loader: 'babel-loader',
       }],
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
     },
     {
       test: /\.scss$/,
       use: [{
         loader: 'style-loader',
       }, {
         loader: 'css-loader',
       }, {
         loader: 'sass-loader',
       }],
     },
     {
       test: /\.(png|jpg)$/,
       loader: 'url?limit=25000'
     },
   ]
  }
}

module.exports = config;
