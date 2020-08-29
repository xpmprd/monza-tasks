import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';
import { Loader } from 'components/Loading/Loading';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import styles from './styles.module.scss';

const root = document.getElementById('root');

ReactDOM.render(
  
  <div className={styles.Container}>
    <Loader />
  </div>,
  
  root,
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
   
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    
    root,
  );
});
serviceWorker.unregister();
