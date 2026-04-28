module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	externals: {
		'react/addons': true,
		'react/lib/ReactContext': true,
		'react/lib/ExecutionEnvironment': true,
	},
};
