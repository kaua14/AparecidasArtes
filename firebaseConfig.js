import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ9Zzj5aohf0qvWx9z7XuSvQ4Ymlzh-xI',
  authDomain: 'br.com.aparecidasartes',
  projectId: 'aparecidas-artes',
  storageBucket: 'aparecidas-artes.appspot.com',
  messagingSenderId: '915846949056',
  appId: '1:915846949056:android:76e873fca7334e243ca525'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };

export { firebase }; 