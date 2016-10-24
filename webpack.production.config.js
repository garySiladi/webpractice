'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '/src/client/index.jsx')
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "react"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    },
    {
     test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
     loader: "url?limit=10000&mimetype=application/font-woff"
    },
    {
     test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
     loader: "url?limit=10000&mimetype=application/font-woff"
    },
    {
     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
     loader: "url?limit=10000&mimetype=application/octet-stream"
    },
    {
     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
     loader: "file"
    },
    {
     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
     loader: "url?limit=10000&mimetype=image/svg+xml"
    },
    {
     test: /\.(png|jpg|gif)$/,
     loader: 'file'
   }
  ]
  },
  postcss: webpack => [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')({
        browsers: ['ie >= 10', 'last 3 versions']
      })
  ]
};
