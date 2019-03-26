import { shallowMount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';

import localVue from 'tests-unit/index';
import router from 'tests-unit/router';

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(NotFound, {
		localVue,
		router
	});
});

// Tests
describe('NotFound.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
