import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://jewerly-api.azurewebsites.net/api/',
});
