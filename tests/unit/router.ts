import localVue from './';

import VueRouter from 'vue-router';
localVue.use(VueRouter);

export default new VueRouter({
	routes: [{
		path: '/'
	}]
});
