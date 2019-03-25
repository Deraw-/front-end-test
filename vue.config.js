module.exports = {
	runtimeCompiler: false,
	productionSourceMap: true,
	parallel: true,
	configureWebpack: {
		optimization: {
			minimize: true,
			splitChunks: {
				maxSize: 244000,
				chunks: 'all'
			}
		}
	},
	transpileDependencies: ['vuex-persist'],
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000/',
				changeOrigin: true
			}
		}
	}
};
