'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '/src/client/index.jsx')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ["./node_modules", "./node_modules/babel"]
  },

  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
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
      query: {
        "presets": ["es2015", "react", "airbnb"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
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
   },
   {
     test: /\.ico$/,
     loader: 'file-loader?name=[name].[ext]'
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
