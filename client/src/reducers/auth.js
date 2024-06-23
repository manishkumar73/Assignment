const authReducer = (state = { isAuthenticated: false, user: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, isAuthenticated: true, user: action?.data?.result };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
