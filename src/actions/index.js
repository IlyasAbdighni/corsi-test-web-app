export const add = (a, b) => {
  return dispatch => {
    const sum = a + b;
    dispatch({ type: 'ADD', payload: sum });
  };
};
