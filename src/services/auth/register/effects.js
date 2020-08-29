
import { call, take, put } from 'redux-saga/effects';
import { auth } from '../firebase/firebase';
import {
  registerActions,
  registerSuccess,
} from './actions';

function* regEffects() {

  while (true) {
   
    try {
      const { type, payload: { email, password } } = yield take([
        registerActions.REGISTER,
        registerActions.REGISTER_SUCCESS,
      ]);

      if (type === registerActions.REGISTER) {
        yield call([auth, auth.createUserWithEmailAndPassword], email, password);
        const user = auth.currentUser
        yield call([user, user.sendEmailVerification]);
      }
      yield put(registerSuccess(email, password));

    } catch (error) {
      yield put({ type: registerActions.REGISTER_FAIL, error: true, loading: true, payload: { error } });
    }
  }
   
}

export default regEffects;

