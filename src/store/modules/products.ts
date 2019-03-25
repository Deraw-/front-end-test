import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState, Product } from '../types';

import shop from '@/services/shop';

interface ProductsState {
	all: Product[];
}

const state: ProductsState = {
	all: []
};

const actions: ActionTree<ProductsState, RootState> = {
	setAllProducts({ commit, dispatch }: any) {
		shop
			.getProducts()
			.then((response) => {
				commit('RECEIVE_PRODUCTS', response.data);
			})
			.catch((error) => {
				//
			});
	}
};

const mutations: MutationTree<ProductsState> = {
	RECEIVE_PRODUCTS(state: any, products: any) {
		state.all = products;
	}
};

const getters: GetterTree<ProductsState, RootState> = {
	findProduct: (state) => (id: number) => {
		return state.all.find((p: Product) => p.id === id) || {};
	}
};

const products: Module<ProductsState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};

export default products;
