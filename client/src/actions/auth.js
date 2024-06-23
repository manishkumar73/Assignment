import axios from 'axios';
import { fetchChats } from './chat'; // Ensure this import is correct

const REACT_APP_API_URL = 'http://localhost:5000';

const API = axios.create({ baseURL: REACT_APP_API_URL });

export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await API.post('/user/signin', formData);
    localStorage.setItem('token', data.token); // Save token to localStorage
    dispatch({ type: 'AUTH', data });
    dispatch(fetchChats()); // Fetch chats upon login
  } catch (error) {
    console.error(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await API.post('/user/signup', formData);
    localStorage.setItem('token', data.token); // Save token to localStorage
    dispatch({ type: 'AUTH', data });
  } catch (error) {
    console.error(error);
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    const { data } = await API.post('/user/forgot-password', { email });
    dispatch({ type: 'RESET_PASSWORD', data });
  } catch (error) {
    console.error(error);
  }
};
