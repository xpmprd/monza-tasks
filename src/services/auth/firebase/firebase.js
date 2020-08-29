import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDj8RWU5eveuIR5aILhAKUQinHZatGEmH8',
  authDomain: 'to-do-app-f2752.firebaseapp.com',
  databaseURL: 'https://to-do-app-f2752.firebaseio.com',
  projectId: 'to-do-app-f2752',
  storageBucket: 'to-do-app-f2752.appspot.com',
  messagingSenderId: '1056890059914',
  appId: '1:1056890059914:web:2d0eab14259339a0008173',
};

firebase.initializeApp(config);
firebase.firestore();

export const auth = firebase.auth();
export const db = firebase.database();
export const itemsRef = db.ref('items');

const getUid = () => auth.currentUser.uid;

export const insert = item => itemsRef
  .child(getUid())
  .push()
  .set(item);

export const remove = item => itemsRef.child(`${getUid()}/${item.id}`).remove();
export const update = item => itemsRef.child(`${getUid()}/${item.id}`).update(item);
export default firebase;
