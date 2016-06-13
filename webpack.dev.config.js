/* eslint-disable prefer-template */
var webpack = require('webpack');
var path = require('path');
var port = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=//0.0.0.0:' + port + '/__webpack_hmr',
      './dev_entry.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
    ],
  },
};
