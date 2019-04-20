const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/scripts/[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    writeToDisk: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    }),
    ...common.plugins
  ]
});
