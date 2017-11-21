import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDo-IY5lda_3Tu2Smvz4ru8pIEFIRNi19g',
  authDomain: 'corsi-coding-test.firebaseapp.com',
  databaseURL: 'https://corsi-coding-test.firebaseio.com',
  projectId: 'corsi-coding-test',
  storageBucket: 'corsi-coding-test.appspot.com',
  messagingSenderId: '198422468719'
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
