import { useSelector, useDispatch } from 'react-redux';
import { verifyEmail } from './actions';

export const useVerifyEmail = () => {
  

const dispatch = useDispatch();

const { 
  verifiedEmail,
  error,
  verifyEmailSuccess
} = useSelector((state) => state.auth);

return {
  verifyEmail: () => dispatch(verifyEmail()),
  verifiedEmail,
  error,
  verifyEmailSuccess
  };
};
