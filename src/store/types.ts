// tslint:disable-next-line:no-empty-interface
export interface RootState {}

export interface ProductType extends Object {
	id: number;
	quantity: number;
}

export interface CartProduct extends ProductType {
	name: string;
	price: number;
	image: string;
}

// This is used to properly type components using mappers from Vuex
// see https://github.com/vuejs/vuex/pull/1121
// tslint:disable-next-line: no-empty-interface
export default interface VuexBindings {
	cartProducts: CartProduct[];
	all: ProductType[];
	added: CartProduct[];
}
