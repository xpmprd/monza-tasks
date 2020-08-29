import { useSelector, useDispatch } from 'react-redux';
import { login, clean } from './actions';

export const useLogin = () => {
  
  const { 
    isAuthenticated,
    user,
    ifUid,
    error,
    loading,
    verifiedEmail,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
 
  return {
    login: (email, password) => dispatch(login(email, password)),
    user,
    ifUid,
    loading,
    isAuthenticated,
    error,
    verifiedEmail,
    clean: () => dispatch(clean()),
  };
};
