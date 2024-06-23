import axios from 'axios';

const REACT_APP_API_URL = 'http://localhost:5000';

const API = axios.create({ baseURL: REACT_APP_API_URL });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchChats = () => async (dispatch) => {
  try {
    const { data } = await API.get('/chat/history');
    dispatch({ type: 'FETCH_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createChat = (message) => async (dispatch) => {
  try {
    const { data } = await API.post('/chat/message', { message });
    dispatch({ type: 'CREATE_CHAT', payload: data });
  } catch (error) {
    console.error(error);
  }
};
