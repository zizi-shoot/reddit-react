const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_DEV) return 'inline-source-map';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  entry: [
    path.resolve(__dirname, '../src/client/index.tsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  plugins: IS_DEV
    ? [
      new MiniCssExtractPlugin(),
      new HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
    ]
    : [new MiniCssExtractPlugin()],
  watchOptions: {
    ignored: /dist/,
  },
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
  devtool: setupDevtool(),
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },

};

