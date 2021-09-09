const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

const DEV_PLUGINS = [new HotModuleReplacementPlugin()];
const COMMON_PLUGINS = [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }), new CleanWebpackPlugin(), new MinCssExtractPlugin()];

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_SCSS_REGEXP = /\.global\.scss$/;
const SERVER = process.env.SERVER || 'http://localhost';

function setupDevtool() {
  if (IS_DEV) return 'inline-source-map';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  entry: [
    path.resolve(__dirname, '../src/client/index.tsx'),
    `webpack-hot-middleware/client?path=${SERVER}/static/__webpack_hmr`,
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: 'static/',
  },
  plugins: IS_DEV ? [...DEV_PLUGINS, ...COMMON_PLUGINS] : COMMON_PLUGINS,
  watchOptions: {
    ignored: /dist/,
  },
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
          MinCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
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
          MinCssExtractPlugin.loader,
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
  devtool: setupDevtool(),
};
