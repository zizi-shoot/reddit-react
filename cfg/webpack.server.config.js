const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV } = process.env;

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
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
    new MiniCssExtractPlugin(),
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
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
