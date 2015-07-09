var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var client = {
	target: 'web',
	debug: true,
	stats: { children: false },
	entry: {
		main: './src/client.js',
	},
	devtool: 'source-map',
	output: {
		path: './public/dist',
		filename: '[name].js'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['','.js','.json'],
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json-loader'},
			{ test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'raw-loader!autoprefixer-loader?browsers=last 2 version!sass-loader')},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' },
		]
	},
	plugins: [
		// new webpack.DefinePlugin({arc: JSON.stringify(arc)}),
		new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
		new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/$/),
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
	],
};

if (process.env.NODE_ENV === 'production') {
	client.plugins = client.plugins.concat([
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
	]);
}

module.exports = [
	client,
];