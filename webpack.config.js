var webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader'
			},
			{
        		test: /\.json$/,
        		loader: 'json-loader'
      		},
      		{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	}
}
