import { eventChannel } from 'redux-saga';
import { call, fork, take, put } from 'redux-saga/effects';

import { auth } from '../firebase/firebase';
import { loginActions } from './actions';

const createAuthChannel = () => eventChannel(emit => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
     
      const { uid, email, refreshToken, emailVerified } = user;
        
      emit({ uid, email, refreshToken, emailVerified });
    } else {
      // No user.
      
    }
  });

  return unsubscribe;
});

function* watchAuthChan() {
  
  const authChan = yield call(createAuthChannel);

  while (true) {
    const user = yield take(authChan);
  
    yield put({ type: loginActions.LOGIN_SUCCESS, payload: { user } });

  }
}

function* loginEffects() {
  
  yield fork(watchAuthChan);
  
  while (true) {
    try {
     
      const { type, payload: { email, password } } = yield take([
        loginActions.LOGIN,
        loginActions.LOGIN_SUCCESS,
      
      ]);
      
      if (type === loginActions.LOGIN) {
        yield call([auth, auth.signInWithEmailAndPassword], email, password);
      }

      yield take(loginActions.LOGOUT);
      yield call([auth, auth.signOut]);
      yield put({ type: loginActions.LOGOUT_SUCCESS });
    } catch (error) {
      yield put({ type: loginActions.LOGIN_FAIL, error: true, payload: { error } });
    }
  }
}

export default loginEffects;

