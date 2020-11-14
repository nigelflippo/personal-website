const path = require('path')
module.exports = {
	configureWebpack: config => {
		const resultConfig = {
			module: {
				rules: [
					{
						test: /\.svg$/,
						loader: 'svg-inline-loader'
					}
				]
			},
			resolve: {
				alias: {
					'src': path.resolve(__dirname, 'src/')
				}
			}
		}
		return resultConfig
	},
	chainWebpack: (config) => {
		config.plugins.delete('prefetch')
		config.plugins.delete('preload')
		config.module
			.rule('svg')
			.test(() => false)
			.use('file-loader')
	}
}