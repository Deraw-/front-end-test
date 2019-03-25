// tslint:disable-next-line:no-empty-interface
export interface RootState {}

export interface Product extends Object {
	id: number;
	quantity: number;
}

// This is used to properly type components using mappers from Vuex
// see https://github.com/vuejs/vuex/pull/1121
// tslint:disable-next-line: no-empty-interface
export default interface VuexBindings {}
