import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { loading } from 'services/todo/loading';
import todoReducer from '../../services/todo/reducer';
import authReducer from '../../services/auth/authReducer/reducer';

export const rootReducer = combineReducers({
  items: todoReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  loading,
});
