import { all, fork } from 'redux-saga/effects';

import { userEffects } from '../../services/users/user/effects';
import regEffects from '../../services/auth/register/effects';
import loginEffects from '../../services/auth/login/effects';
import { taskEffects } from '../../services/todo/effects';
import { verifyEmailEffects } from '../../services/auth/verifyEmail/effects';
import { recoverPassEffects } from '../../services/auth/recoverPass/effects';

export function* rootSaga() {
  yield all([
    ...userEffects,
    ...recoverPassEffects,
    ...taskEffects,
    ...verifyEmailEffects,
  ]);
  yield fork(regEffects);
  yield fork(loginEffects);
}
