const chatReducer = (state = { chats: [] }, action) => {
  switch (action.type) {
    case 'FETCH_CHATS':
      return { ...state, chats: action.payload };
    case 'CREATE_CHAT':
      return { ...state, chats: [...state.chats, action.payload] };
    default:
      return state;
  }
};

export default chatReducer;
