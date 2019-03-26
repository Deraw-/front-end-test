import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState, ProductType } from '../types';

interface CartState {
	added: ProductType[];
	lastCheckout: null | string;
}

const state: CartState = {
	added: [],
	lastCheckout: null
};

const actions: ActionTree<CartState, RootState> = {
	addToCart({ commit }, product: ProductType) {
		commit('ADD_TO_CART', product.id);
	},
	removeFromCart({ commit }, product: ProductType) {
		commit('REMOVE_FROM_CART', product.id);
	},
	deleteFromCart({ commit }, product: ProductType) {
		commit('DELETE_FROM_CART', product.id);
	}
};

const mutations: MutationTree<CartState> = {
	ADD_TO_CART(state, productId: number) {
		state.lastCheckout = null;
		const record = state.added.find((p: ProductType) => p.id === productId);

		// If the product is not in the cart, add it
		if (!record) {
			state.added.push({
				id: productId,
				quantity: 1
			});
		} else {
			// Else, update his quantity
			record.quantity++;
		}
	},
	REMOVE_FROM_CART(state, productId: number) {
		const record = state.added.find((p: ProductType) => p.id === productId);

		if (record) {
			record.quantity--;

			if (record.quantity === 0) {
				const index = state.added.indexOf(record);
				state.added.splice(index, 1);
			}
		}
	},
	DELETE_FROM_CART(state, productId: number) {
		const record = state.added.find((p: ProductType) => p.id === productId);

		if (record) {
			const index = state.added.indexOf(record);
			state.added.splice(index, 1);
		}
	}
};

const getters: GetterTree<CartState, RootState> = {
	cartProducts(state, getters, rootState: any) {
		return state.added.map(({ id, quantity }) => {
			const product = rootState.products.all.find((p: ProductType) => p.id === id);

			return {
				name: product.name,
				price: product.price,
				image: product.image,
				id,
				quantity
			};
		});
	},
	count(state) {
		let totalCount = 0;

		state.added.forEach(({ quantity }) => {
			totalCount += quantity;
		});

		return totalCount;
	}
};

const cart: Module<CartState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};

export default cart;
