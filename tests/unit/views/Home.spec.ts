import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

import localVue from 'tests-unit/index';
import store from '@/store/';

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(Home, {
		localVue,
		store
	});
});

// Tests
describe('Home.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
