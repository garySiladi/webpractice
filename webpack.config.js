var webpack = require('webpack');
var path = require('path');

const HOST = 'localhost';
const PORT = '4000';

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/client/');
var postcssImport = require('postcss-import');

var config = {
  devtool: 'source-map',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel',
             query:
              {
                  presets:['es2015', 'react']
              }
         },
         {
           test: /\.css$/,
           loader: "style-loader!css-loader!postcss-loader"
         },
         {
           test: /\.(png|jpg|svg)$/,
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
  devServer: {
    contentBase: './build/',
    host: HOST,
    port: PORT,
    historyApiFallback: true
  },
  plugins: [
  new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
  ],
};

module.exports = config;
