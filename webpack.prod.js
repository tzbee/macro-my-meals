const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    ...common.plugins
  ]
});
