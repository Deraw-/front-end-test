import { shallowMount } from '@vue/test-utils';
import Product from '@/components/Product.vue';

import localVue from 'tests-unit/index';
import store from '@/store/';
import '@/filters/';

// Data
import { CartProduct } from '@/store/types';
const product: CartProduct = {
	id: 0,
	quantity: 15,
	name: 'name',
	price: 15,
	image: '/img.jpg'
};

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(Product, {
		localVue,
		store,
		propsData: {
			product
		}
	});
});

// Tests
describe('Product.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
