const APP_NAME = process.env.VUE_APP_NAME || 'Vue Websanova Auth'

module.exports = {
	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = APP_NAME
				return args
			})
	}
}
