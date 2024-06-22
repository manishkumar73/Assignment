import axios from 'axios';

export const login = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/user/signin', formData);
        dispatch({ type: 'AUTH', data });
        dispatch(fetchChats()); // Fetch chats upon login
    } catch (error) {
        console.error(error);
    }
};

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/user/signup', formData);
        dispatch({ type: 'AUTH', data });
    } catch (error) {
        console.error(error);
    }
};

export const resetPassword = (email) => async (dispatch) => {
    try {
        const { data } = await axios.post('/user/forgot-password', { email });
        dispatch({ type: 'RESET_PASSWORD', data });
    } catch (error) {
        console.error(error);
    }
};
