const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV } = process.env;
const GLOBAL_CSS_REGEXP = /\.global\.scss$/;

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
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: [
          'css-loader',
          'scss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2)$/i,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};