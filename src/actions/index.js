import { firebase, googleAuthProvider } from '../firebase/firebase';
import axios from 'axios';

const getChannelId = () => {
  return axios
    .get(
      'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=PiuChePuoiVideo&key=AIzaSyBZ-f3rkoW-Phj2xjQMX6Ao3M6imngHK_E'
    )
    .then(res => {
      return res.data.items[0].id;
    });
};

export const login = () => {
  const auth = firebase.auth().signInWithPopup(googleAuthProvider);
  return dispatch => {
    dispatch({ type: 'LOGIN' });
  };
};

export const logout = () => {
  firebase.auth().signOut();
  return dispatch => {
    dispatch({ type: 'LOGOUT' });
  };
};

export const getVideos = (channelId, pageToken) => {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBZ-f3rkoW-Phj2xjQMX6Ao3M6imngHK_E&channelId=${channelId}&part=snippet,id&order=date&maxResults=6&type=video&pageToken=${pageToken}`
    )
    .then(res => {
      let result = {
        nextPageToken: res.data.nextPageToken,
        prevPageToken: res.data.prevPageToken,
        items: res.data.items
      };
      return result;
    });
};

export const loadVideos = pageToken => {
  return dispatch => {
    getChannelId().then(channelId => {
      getVideos(channelId, pageToken)
        .then(response => {
          dispatch({ type: 'videos', videoInfo: response, loading: false });
        })
        .catch(err => {
          dispatch({ type: 'ERROR', message: err, loading: true });
        });
    });
  };
};
