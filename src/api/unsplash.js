import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 35c747e070ce7aad9c6fe93959e1b7f51af07a1cb33327a1c942c7585bc5f57a'
	}
});
