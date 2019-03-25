import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import i18n, { loadLanguageAsync } from '@/i18n';

// Directly import Anomalies view for faster rendering of first page
import Home from '@/views/Home.vue';

Vue.use(Router);
Vue.use(Meta);

// See https://router.vuejs.org/fr/essentials/navigation.html for help
const router = new Router({
	mode: 'history', // Use the History API, and remove the hash from the URL
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '*', // Everything that doesn't match something
			name: 'notFound',
			component: () => import(/* webpackChunkName: "not-found" */ './views/NotFound.vue')
		}
	],
	// Native-like scroll behavior
	scrollBehavior(to, from, savedPosition) {
		// If there is an hash, this is an anchor, so scroll to it
		if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			// Else simulate browser behavior by returning to the previous position, or fallback to top
			if (savedPosition) {
				return savedPosition;
			} else {
				return { x: 0, y: 0 };
			}
		}
	}
});

// Resolve translations before each navigation
router.beforeEach((to, from, next) => {
	const lang = i18n.locale;
	loadLanguageAsync(lang).then(() => next());
});

export default router;
