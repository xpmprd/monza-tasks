import React, { useEffect } from 'react'
import { useLogin } from 'services/auth/login/hook';
import { useHistory } from "react-router-dom";

export const RouteGuard = ({children}) => {

let history = useHistory();

const {ifUid, verifiedEmail} = useLogin();

useEffect(() => {
  
  if (!ifUid) {
  history.push('/register');
  history.push('/recover');
  history.push('/login');
  
      
  } else if(ifUid && !verifiedEmail)  {
    history.push('/verifyemail')
  } else {
    history.push('/task')
  }
}, [ifUid]);

  return <>{children}</>;
 
};