import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
	baseURL: 'http://e5b30955.ngrok.io'
});

// let url;
// if (__DEV__) {
// 	url = 'http://23ac4263.ngrok.io';
// } else {
// 	url = 'https://sleepy-savannah-10606.herokuapp.com';
// }

// const instance = axios.create({
// 	baseURL: url
// });

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default instance;
