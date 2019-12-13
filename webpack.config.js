var path = require('path');
var CLNT_DIR = path.join(__dirname, '/client/index.js');
var PUB_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: CLNT_DIR,
  output: {
    filename: 'app.js',
    path: PUB_DIR
  },
  resolve: {
    alias: {
   "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
  }
  },
  module: {
   rules: [
     {
        test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }


      test: /\.css$/i,
      exclude: /\.module\.css$/i,
      use: ['style-loader', 'css-loader'],


      test: /\.module\.css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },




      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      loader: 'url-loader',
      options: {
        limit: 8192,
      },




};