import React from 'react';

import styles from './styles.module.scss';

export const ExtraText = ({ children }) => (

  <div className={styles.extraText}>
    <span className={styles.extraP}>{children}</span>
  </div>

);
