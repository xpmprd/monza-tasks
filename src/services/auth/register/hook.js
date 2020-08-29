import { useSelector, useDispatch } from 'react-redux';

import { clean } from '../login/actions';
import { register } from './actions';

export const useRegister = () => {
  
  const { 
    isAuthenticated,
    ifUid,
    error,
    loading,
    verifiedEmail,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return {
    register: (email, password) => dispatch(register(email, password)),
    ifUid,
    isAuthenticated,
    error,
    loading,
    verifiedEmail,
    clean: () => dispatch(clean()),
  };
};
