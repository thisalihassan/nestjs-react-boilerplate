/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

require('dotenv').config();
const projPath = path.resolve(__dirname, '../dist');
console.log(projPath);

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
  resolve: {
    alias: {
      '@client': path.resolve('src/'),
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: projPath,
    publicPath: '',
    filename: '[name].[contenthash].js',
    clean: true,
  },
};
