import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const ErrorMsg = ({ children, error, success, show }) => (
    
  <p className={classNames(
    styles.P,
    error && styles.error,
    show && styles.show,
  )}
    error={error}
    success={success}
    show={show}
  >
    {children}
  </p>

);
