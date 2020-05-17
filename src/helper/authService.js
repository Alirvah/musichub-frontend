import axios from 'axios';
import tokenStorage from './tokenStorage';
import { API_URL } from '../config/constants';
const tokenData = require('../mockJson/api_token');


// Add a request interceptorss
axios.interceptors.request.use(config => {
    const { url, method, data } = config;

    // Do something before request is sent
    if (url.includes(API_URL.TOKEN) && method === 'post') {
        if (data && data.username === 'test' && data.password === 'test')
            tokenStorage.setToken(tokenData.data);
    }
    else if (url.includes(API_URL.REGISTER) && method === 'post') {
    }
    else
        config.headers['Authorization'] = `Bearer ${tokenStorage.getToken()}`;
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});
