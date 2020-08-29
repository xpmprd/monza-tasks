import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import firebase from 'services/auth/firebase/firebase';
import { rootReducer } from './reducer/reducers';
import { rootSaga } from './effect/effects';

const sagaMiddleware = createSagaMiddleware();

const rrfConfig = {
  attachAuthIsReady: true, // attaches auth is ready promise to store
};


const store = createStore(
  rootReducer,
  compose(
    reactReduxFirebase(firebase, rrfConfig),
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
