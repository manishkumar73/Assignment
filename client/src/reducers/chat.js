const chatReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return { ...state, messages: action.payload };
    case 'NEW_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default chatReducer;
