import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../../services/auth/login/actions';

export const useLogout = () => {
  
  const { 
    currentUser,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
 
  return {

    logout: () => dispatch(logout()),
    currentUser,
  };
  
};

