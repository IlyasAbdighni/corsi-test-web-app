export default (state = {}, action) => {
  switch (action.type) {
    case 'videos':
      return { ...state, vinfo: action.videoInfo, loading: false };

    default:
      return state;
  }
};
