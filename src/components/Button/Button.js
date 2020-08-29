import React from 'react';
import styles from './styles.module.scss';

export const Button = ({ type = 'button', loading, children, onClick, disabled }) => (
  
  <button
    type={type}
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
  >
    {loading || children}
  </button>
  
);
