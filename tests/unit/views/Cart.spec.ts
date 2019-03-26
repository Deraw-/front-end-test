import { shallowMount } from '@vue/test-utils';
import Cart from '@/views/Cart.vue';

import localVue from 'tests-unit/index';
import router from 'tests-unit/router';
import store from '@/store/';

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(Cart, {
		localVue,
		router,
		store
	});
});

// Tests
describe('Cart.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
