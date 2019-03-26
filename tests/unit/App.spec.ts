import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

import localVue from 'tests-unit/index';
import router from 'tests-unit/router';
import store from '@/store/';

// Build component before each test
let wrapper: any;
beforeEach(() => {
	wrapper = shallowMount(App, {
		localVue,
		store,
		router
	});
});

// Tests
describe('App.vue', () => {
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
