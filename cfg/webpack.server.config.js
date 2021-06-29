const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV } = process.env;

module.exports = {
  target: 'node',
  mode: NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
    publicPath: 'static/',
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
  watchOptions: {
    ignored: /dist/,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
