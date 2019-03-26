const path = require('path');

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
		},
		resolve: {
			alias : {
				'icons': path.resolve(__dirname, 'node_modules/vue-material-design-icons')
			},
			extensions: [
				'.vue'
			]
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
