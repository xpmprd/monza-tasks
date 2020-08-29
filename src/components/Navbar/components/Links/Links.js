import React from 'react';

import { useLogout } from '../Logout/hook';
import { useLogin } from 'services/auth/login/hook';
import styles from './styles.module.scss';
import classNames from 'classnames';


export const Links = ({ opened }) => {
    
const { clean } = useLogin();
const { logout } = useLogout();

    return (
        <div className={classNames(
          styles.Menu,
          opened && styles.opened
        )} opened={opened}>
          <a
            className={styles.Hop}
            href="/login"
            onClick={logout}
          >  <div className={styles.Link} onClick={clean}>Logout</div>
          </a>
        </div>
    )
}
