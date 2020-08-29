import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';
import { Container } from './Container/Container'; 
import classNames from 'classnames';

export const PopUp = ({ opened, close, children }) => { 
  
  return ReactDOM.createPortal(

  <>
    <Container
      close={close}
      opened={opened}
    />
    <div className={classNames(
      styles.PopUpContainer,
      opened && styles.opened
    )} opened={opened}>
      <div className={styles.Container}>{children}</div>
    </div>
  </>,

  document.getElementById('root-popup'),
    
  );
};


