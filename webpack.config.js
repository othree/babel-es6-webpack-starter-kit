module.exports = {
	context: __dirname + "/app",
	entry: "./index",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: "html" },
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	},
	devServer: {
		contentBase: "./public",
	}
};
