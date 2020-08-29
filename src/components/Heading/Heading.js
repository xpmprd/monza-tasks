import React from 'react'; 
import styles from './styles.module.scss';
import classNames from 'classnames';

const Heading = ({ children, bold, size }) => {
  if (size === 'h1') {
    return (
      <h1 className={classNames(
        styles.h1,
        bold && styles.bold,
      )}
        bold={bold}
      >
        {children}
      </h1>
    ); 
  }

  if (size === 'h2') {
    return (
      <h2 className={classNames(
        styles.h2,
        bold && styles.bold,
      )}
        bold={bold}
      >
        {children}
      </h2>
    ); 
  }

  if (size === 'h3') {
     return (
        <h3 className={classNames(
          styles.h3,
          bold && styles.bold,
        )}
          bold={bold}
        >
          {children}
        </h3>
    ); 
  }

  if (size === 'h4') {
    return (
      <h4 className={classNames(
        styles.h4,
        bold && styles.bold,
      )}
        bold={bold}
      >
        {children}
      </h4>
    ); 
  } 
 
  
};

export default Heading;
