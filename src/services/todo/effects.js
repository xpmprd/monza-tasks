import { eventChannel } from 'redux-saga';
import { call, cancel, cancelled, fork, put, take, takeLatest } from 'redux-saga/effects';

import { loginActions } from '../auth/login/actions';
import { itemsRef, insert, remove, update, auth } from '../auth/firebase/firebase';
import {
  todoActions,
  created,
  removed,
  updated,
  actionFail,
} from './actions';
import { LOADING } from './loading';

function* createItemEffect({ payload: { item }}) {

    try {
      yield call(insert, item);
    } catch (error) {
      yield put(actionFail(error));
    }
  }


export function* updateItemEffect({ payload: { item } }) {
  
    try {
      yield call(update, item);
    } catch (error) {
      yield put(actionFail(error));
    }
  }


export function* removeItemEffect({ payload: { item } }) {

    try {
      yield call(remove, item);
    } catch (error) {
      yield put(actionFail(error));
    }
  }


const createItemChangeChannel = event => eventChannel(emit => {
  const listener = data => {
    const item = { id: data.key, ...data.val() };
    emit(item);
  };

  const { uid } = auth.currentUser;
  itemsRef.child(uid).on(event, listener);

  return () => itemsRef.child(uid).off(listener);
});

function* itemChangeTask(event, actionCreator) {
  const chan = yield call(createItemChangeChannel, event);

  try {
    while (true) {
      const item = yield take(chan);
      yield put(actionCreator(item));
    }
  } finally {
    if (yield cancelled()) {
      chan.cancel();
    }
  }
}

function* itemChangeEffect() {
  try {
     
    yield put({ type: LOADING });

    const createdTask = yield fork(itemChangeTask, 'child_added', created);
    const updatedTask = yield fork(itemChangeTask, 'child_changed', updated);
    const removedTask = yield fork(itemChangeTask, 'child_removed', removed);

    yield take(loginActions.LOGOUT_SUCCESS);
    cancel(createdTask);
    cancel(updatedTask);
    cancel(removedTask);
  } catch(error) {
    console.log(error)
  }
}

export const taskEffects = [
   takeLatest(loginActions.LOGIN_SUCCESS, itemChangeEffect),
   takeLatest(todoActions.CREATE, createItemEffect),
   takeLatest(todoActions.UPDATE, updateItemEffect),
   takeLatest(todoActions.REMOVE, removeItemEffect)
]