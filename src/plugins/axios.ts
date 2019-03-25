import axios from 'axios';
import { AxiosError } from 'axios';

const instance = axios.create({
	// Handled by proxy
	baseURL: '/',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export function catcher(error: AxiosError) {
	return Promise.reject(error); // For Promise.all().catch
}

export default instance;
