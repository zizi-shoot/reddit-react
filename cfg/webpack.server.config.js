const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

const { NODE_ENV } = process.env;
const GLOBAL_SCSS_REGEXP = /\.global\.scss$/;

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
    new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }),
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
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
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
        exclude: GLOBAL_SCSS_REGEXP,
      },
      {
        test: GLOBAL_SCSS_REGEXP,
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
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
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
