export default (state = { sum: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      console.log('action.type ADD ', action.payload);
      return { sum: action.payload };
    default:
      return state;
  }
};
