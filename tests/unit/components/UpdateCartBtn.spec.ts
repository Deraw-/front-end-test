import { shallowMount } from '@vue/test-utils';
import UpdateCartBtn from '@/components/UpdateCartBtn.vue';

import localVue from 'tests-unit/index';
import store from '@/store/';

// Data
import { ProductType } from '@/store/types';
const product: ProductType = {
	id: 0,
	quantity: 15
};

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(UpdateCartBtn, {
		localVue,
		store,
		propsData: {
			product
		}
	});
});

// Tests
describe('UpdateCartBtn.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
