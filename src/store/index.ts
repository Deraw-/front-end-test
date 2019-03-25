import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { RootState } from './types';

// Modules
import cart from './modules/cart';
import products from './modules/products';

// The store is saved in the browser's session
const vuexLocal = new VuexPersistence({
	storage: window.sessionStorage
});

Vue.use(Vuex);

// See https://vuex.vuejs.org/fr/getting-started.html for help
const store: StoreOptions<RootState> = {
	strict: true,
	state: {},
	// See https://vuex.vuejs.org/guide/modules.html for more info on modules
	modules: {
		cart,
		products
	},
	plugins: [
		vuexLocal.plugin
	]
};

export default new Vuex.Store<RootState>(store);
