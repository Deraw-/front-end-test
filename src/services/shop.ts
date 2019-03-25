import axios, { catcher } from '@/plugins/axios';

const files = {
	getProducts() {
		return axios
			.get('/api/products')
			.catch((error) => catcher(error));
	}
};

export default files;
