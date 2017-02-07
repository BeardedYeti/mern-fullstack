var webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	moduel: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader'
			},
			{
        		test: /\.json$/,
        		loader: 'json-loader'
      		}
		]
	}
}