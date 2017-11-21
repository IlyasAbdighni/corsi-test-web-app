import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = () => {
  const auth = firebase.auth().signInWithPopup(googleAuthProvider);
  return dispatch => {
    dispatch({ type: 'LOGIN', payload: auth });
  };
};

export const logout = () => {
  firebase.auth().signOut();
  return dispatch => {
    dispatch({ type: 'LOGOUT' });
  };
};
