import axios from 'axios';

export const fetchChats = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/chat/history');
        dispatch({ type: 'FETCH_CHATS', data });
    } catch (error) {
        console.error(error);
    }
};

export const createChat = (message) => async (dispatch) => {
    try {
        const { data } = await axios.post('/chat/message', { message });
        dispatch({ type: 'CREATE_CHAT', data });
    } catch (error) {
        console.error(error);
    }
};
