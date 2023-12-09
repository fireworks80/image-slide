import axios, { AxiosResponse } from 'axios';
import { List } from './photoList';

const api = axios.create({
	baseURL: 'https://api.slingacademy.com/v1/sample-data',
});

export const request = {
	getPhotos: async (): Promise<AxiosResponse<List>> => {
		return await api('/photos', {
			method: 'GET',
		});
	},
};
