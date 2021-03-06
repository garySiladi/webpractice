const path = require('path');
const express = require('express');
const webpack = require('webpack');
const blogs = require('./api/blog.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 5000;
const app = express();

// if (isDeveloping) {
//   const webpackMiddleware = require('webpack-dev-middleware');
//   const webpackHotMiddleware = require('webpack-hot-middleware');
//   const config = require('./webpack.config.js');
//   const compiler = webpack(config);
//   const middleware = webpackMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     contentBase: 'src',
//     stats: {
//       colors: true,
//       hash: false,
//       timings: true,
//       chunks: false,
//       chunkModules: false,
//       modules: false
//     }
//   });
//   app.use('/blogs',blogs);
//   app.use(middleware);
//   app.use(webpackHotMiddleware(compiler));
//   app.get('*', function response(req, res) {
//     res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
//     res.end();
//   });
// } else {
  app.use(express.static(__dirname + '/public'));
  app.use('/blogs',blogs);
  app.get('*', function response(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
// }

app.listen(process.env.PORT || port);
console.log("listening");
