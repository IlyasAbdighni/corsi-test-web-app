export default (state = { sum: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case 'LOGIN':
      return {
        user_id: action.user_id,
        user_name: action.user_name,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return { user_id: null, user_name: null, isAuthenticated: false };
    default:
      return state;
  }
};
