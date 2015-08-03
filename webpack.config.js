var webpack = require('webpack');

module.exports = {
	entry: "./index.jsx",
	output: {
		path: __dirname + '/',
		filename: "index.js"
	},

	module: {
		loaders: [
			{ test: /\.js/, loader: "jsx-loader"}
		]
	}
};
