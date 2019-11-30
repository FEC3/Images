var path = require('path');
var CLNT_DIR = path.join(__dirname, '/client/components/index.jsx');
var PUB_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: CLNT_DIR,
  output: {
    filename: 'app.js',
    path: PUB_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};