import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const login = (credentials) => API.post('/user/login', credentials);
export const fetchMessages = () => API.get('/chat/history');
export const newMessage = (message) => API.post('/chat/new', message);
