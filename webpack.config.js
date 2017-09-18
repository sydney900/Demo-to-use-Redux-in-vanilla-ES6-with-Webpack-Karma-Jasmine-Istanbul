const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	entry: {
		myapp: './src/redux/indexmyapp.js',
	},

	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, 'dist'),
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true,
						removeComments: false,
						collapseWhitespace: false
					}
				}],
			},

			{
				test: /\.jpg$/,
				use: ["file-loader"]
			},

			{
				test: /\.png$/,
				use: ["url-loader?mimetype=image/png"]
			},

			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: [path.join(__dirname, 'src')],
				use: [{
					loader: 'babel-loader'
				}],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title: 'es6 boilerplate',
				template: path.join(__dirname, 'public', 'index.html')
			}),

		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		})
	],
	devServer: {
		hot: true,
		inline: true,
		stats: 'errors-only',
	}
};