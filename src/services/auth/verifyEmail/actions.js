export const verifyEmailActions = {
    VERIFY_EMAIL_START: 'VERIFY_EMAIL_EMAIL_START',
    VERIFY_EMAIL_SUCCESS: 'VERIFY_EMAIL_SUCCESS',
    VERIFY_EMAIL_FAIL: 'VERIFY_EMAIL_FAIL',
    VERIFIED_EMAIL: 'VERIFIED_EMAIL',
    NOT_VERIFIED_EMAIL: 'NOT_VERIFIED_EMAIL'
  };
  
  export const verifyEmail = () => ({
    type: verifyEmailActions.VERIFY_EMAIL_START,
  });
  
  export function verifyEmailFail(error) {
    return {
      type: verifyEmailActions.VERIFY_EMAIL_FAIL,
      payload: error,
    }
  }
    
  export function verifyEmailSuccess() {
    return {
    type: verifyEmailActions.VERIFY_EMAIL_SUCCESS,
   }
  };
  
  