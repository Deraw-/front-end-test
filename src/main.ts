import Vue from 'vue';
import App from './App.vue';
import './filters/';
import router from './router';
import store from './store/';
import i18n from './i18n';

import 'icons/styles.css';

Vue.config.productionTip = false;

// Create Vue instance
new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App)
}).$mount('#app');
