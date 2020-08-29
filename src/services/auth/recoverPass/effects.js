
import { auth } from '../firebase/firebase';
import {
  recoverActions,
  recoverSuccess
} from './actions';
import { put, call, takeLatest } from 'redux-saga/effects';


function* recoverEffects({ payload: {email}}) {
     
try {
  const recover = yield call([auth, auth.sendPasswordResetEmail],email);
        
  yield put(recoverSuccess(email));

  } catch (error) {
      yield put({ type: recoverActions.RECOVER_FAIL, error: true, payload: { error } }
    )
  }
};

export const recoverPassEffects = [
  takeLatest(recoverActions.RECOVER, recoverEffects),
];
 