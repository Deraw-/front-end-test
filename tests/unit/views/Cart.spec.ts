import { shallowMount } from '@vue/test-utils';
import Cart from '@/views/Cart.vue';

import localVue from 'tests-unit/index';
import router from 'tests-unit/router';
import store from '@/store/';
import '@/filters/';

// Data
import { CartProduct } from '@/store/types';

function newProducts(howMany: number) {
	const cartProducts: CartProduct[] = [];

	for (let index = 0; index < howMany; index++) {
		cartProducts.push({
			id: index,
			quantity: 2,
			name: 'name',
			price: 15,
			image: '/img.jpg'
		});
	}

	return cartProducts;
}

// Build component
function build(products: CartProduct[]) {
	return shallowMount(Cart, {
		localVue,
		router,
		store,
		computed: {
			cartProducts: () => products,
			// Used for vm.suggestion
			added: () => products,
			all() {
				return newProducts(16);
			}
		}
	});
}

// Tests
describe('Cart.vue', () => {
	it('renders correctly', () => {
		const wrapper = build(newProducts(8));
		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly without data', () => {
		const wrapper = build([]);
		expect(wrapper).toMatchSnapshot();
	});
});
