const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pages = require('./src/data/pages');

module.exports = {
	entry: { main: './src/assets/scripts/app.js' },
	target: 'web',
	module: {
		rules: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin([path.resolve(__dirname, 'public')]),
		...pages.map(
			({ id, data }) =>
				new HtmlWebpackPlugin({
					inject: false,
					hash: true,
					template: `./src/templates/pages/${id}.hbs`,
					filename: `${id}.html`,
					minify: {
						collapseWhitespace: true,
						removeComments: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true,
						useShortDoctype: true
					},
					...data
				})
		)
	]
};
