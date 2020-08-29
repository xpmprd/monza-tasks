import React from 'react';

import styles from './styles.module.scss';

export const Input = ({ type, name, placeholder, value, error, onChange, required }) => (
  
  <div className={styles.InputContainer}>
    <input
      className={styles.Input} 
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      error={error}
      onChange={onChange}
      required={required}
      
    />
  </div>
  
);

