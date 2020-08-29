import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Hamburger = ({ opened, clicked }) => {
  return (
    <div className={classNames(
      styles.Hamburger,
      opened && styles.opened,
    )} onClick={clicked} opened={opened}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};


