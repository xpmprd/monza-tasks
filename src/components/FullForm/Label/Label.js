import React from 'react';

import styles from './styles.module.scss';

export const Label = ({ children }) => (

  <label className={styles.Label}>
    {children}
  </label>
  
);
