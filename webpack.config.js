const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    // hot: IS_DEV,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      scriptLoading: 'defer',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
};
