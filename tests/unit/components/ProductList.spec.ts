import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/ProductList.vue';

import localVue from 'tests-unit/index';
import store from '@/store/';

// Data
import { CartProduct } from '@/store/types';
const products: CartProduct[] = [];

for (let index = 0; index < 8; index++) {
	products.push({
		id: index,
		quantity: 15,
		name: 'name',
		price: 15,
		image: '/img.jpg'
	});
}

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(ProductList, {
		localVue,
		store,
		propsData: {
			products
		}
	});
});

// Tests
describe('ProductList.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
