import React, { useState } from 'react';

import styles from './styles.module.scss';
import { useLogout } from './components/Logout/hook';
import { useLogin } from 'services/auth/login/hook';
import { Hamburger } from './components/Hamburger/Hamburger';
import { Links } from './components/Links/Links';




export const Navbar = () => {

  const { logout, currentUser } = useLogout();
  const { clean } = useLogin();
  const [isOpened, setIsOpened] = useState(false);
 
  
  return (

    <div className={styles.NavContainer}>
      <div className={styles.Container}>
        <img
          src={require('../../images/logo.png')}
          alt="logo"
        />
        <div className={styles.Hamburger}>
          <Hamburger opened={isOpened ? 1 : 0}  clicked={() => setIsOpened(!isOpened)}/>
        </div>
        <Links opened={isOpened ? 1 : 0}/>
        <div className={styles.rightContaier}>
          <span className={styles.span}>{currentUser}</span>
          <div className={styles.linebreak} />
          
          <a
            href="/login"
            onClick={logout}
          ><div className={styles.Link} onClick={clean}>Logout</div>
          </a>
          
        </div>
      </div>
    </div>
  
  );
};
