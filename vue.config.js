// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help
const path = require('path');

module.exports = {
	configureWebpack: {
		// Production optimization
		resolve: {
			alias : {
				'icons': path.resolve(__dirname, 'node_modules/vue-material-design-icons')
			},
			extensions: [
				'.vue'
			]
		}
	},
	// Transpile ES6 inside dependencies
	transpileDependencies: ['vuex-persist'],
	devServer: {
		proxy: {
			// Redirect api requests in development mode
			'^/api': {
				target: 'http://localhost:3000/',
				changeOrigin: true
			}
		}
	}
};
