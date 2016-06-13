var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: 'build/',
    filename: 'search-flight.js',
    library: 'SearchFlight',
    libraryTarget: 'umd',
  },
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
  plugins: [
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  externals: {
    color: {
      root: 'color',
      commonjs2: 'color',
      commonjs: 'color',
      amd: 'color',
    },
    moment: {
      root: 'moment',
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment',
    },
    radium: {
      root: 'Radium',
      commonjs2: 'radium',
      commonjs: 'radium',
      amd: 'radium',
    },
    'radium-normalize': {
      root: 'normalize',
      commonjs2: 'radium-normalize',
      commonjs: 'radium-normalize',
      amd: 'radium-normalize',
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'react-helmet': {
      root: 'Helmet',
      commonjs2: 'react-helmet',
      commonjs: 'react-helmet',
      amd: 'react-helmet',
    },
    'react-motion': {
      root: 'ReactMotion',
      commonjs2: 'react-motion',
      commonjs: 'react-motion',
      amd: 'react-motion',
    },
    'react-onclickoutside': {
      root: 'onClickOutside',
      commonjs2: 'react-onclickoutside',
      commonjs: 'react-onclickoutside',
      amd: 'react-onclickoutside',
    },
    'to-em': {
      root: 'em',
      commonjs2: 'to-em',
      commonjs: 'to-em',
      amd: 'to-em',
    },
  },
};
