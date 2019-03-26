import VueTestUtils, { createLocalVue } from '@vue/test-utils';

// Mock i18n functions
(VueTestUtils as any).config.mocks.$t = (key: string) => key;
(VueTestUtils as any).config.mocks.$tc = (key: string) => key;

import Meta from 'vue-meta';
import Vuex from 'vuex';

// Create localVue with the default plugins
const localVue = createLocalVue();

localVue.use(Meta);
localVue.use(Vuex);

export default localVue;
