const webpack = require('webpack');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  resolve: {
    extensions: ['.*', '.jsx', '.js'],
    modules: [
      path.resolve('./src/'),
      'node_modules',
      '/public/',
    ],
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: [/'node_modules'/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
    }),
    new CleanWebPackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
};
