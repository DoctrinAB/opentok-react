module.exports = (config) => {
	const browser = process.env.BROWSER || 'ChromeHeadless';

	config.set({
		frameworks: ['webpack', 'jasmine'],
		files: ['https://static.opentok.com/v2/js/opentok.js', 'test/**/*.js'],
		preprocessors: {
			'test/**/*.js': ['webpack'],
		},
		webpack: require('./webpack.test.config'),
		webpackMiddleware: {
			stats: 'errors-only',
		},
		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,
		browsers: [browser[0].toUpperCase() + browser.substr(1)],
	});
};
