import { useSelector, useDispatch } from 'react-redux';

import { recover } from './actions';

export const useRecover = () => {

  const { 
    recoverSuccess,
    error,
    loading,
    } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

  return {
    recover: (email) => dispatch(recover(email)),
    error, 
    loading,
    recoverSuccess
  }
};