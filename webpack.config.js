'use strict';

var webpack = require('webpack')

var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    library: 'DigDeep',
    libraryTarget: 'umd'
  }
}

module.exports = config
