const webpack = require('webpack');
const express = require('express');
const nodemon = require('nodemon');
const path = require('path');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(webpackDevMiddleware(clientCompiler, {
  serverSideRender: true,
  writeToDisk: true,
  stats: 'errors-only',
  headers: (req, res, context) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  },
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, () => {
  console.log('HMR server successfully started');
});

const compiler = webpack(webpackServerConfig);

compiler.run((err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }

  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilation failed: ', err);
    }

    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  });
});
