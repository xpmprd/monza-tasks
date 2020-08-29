
import { auth } from '../firebase/firebase';
import {
  verifyEmailActions,
  verifyEmailFail,
  verifyEmailSuccess
} from './actions';
import { put, call, takeLatest } from 'redux-saga/effects';


function* verifyEmail() {
    
        try {
        
            const user = auth.currentUser
            yield call([user, user.sendEmailVerification]);
            yield put(verifyEmailSuccess());
        }
       
     catch (error) {
        yield put(verifyEmailFail(error));
      }
    }




export const verifyEmailEffects = [
    takeLatest(verifyEmailActions.VERIFY_EMAIL_START, verifyEmail)
]
