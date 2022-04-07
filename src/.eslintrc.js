module.exports = {
	extends: ['airbnb', 'prettier'],
	parser: '@babel/eslint-parser',
	plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
	globals: {
		OT: true,
	},
	env: {
		browser: true,
	},
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
	},
};
