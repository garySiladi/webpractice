'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = 'localhost';
const PORT = '4000';

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src', 'client', 'index.jsx');
var postcssImport = require('postcss-import');

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    APP_DIR
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel',
             query:
              {
                  presets:['es2015', 'react', 'airbnb']
              }
         },
         {
           test: /\.json?$/,
           loader: 'json'
         },
         {
           test: /\.css$/,
           loader: "style-loader!css-loader!postcss-loader"
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
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};

module.exports = config;
