export const recoverActions = {
    RECOVER: 'RECOVER',
    RECOVER_SUCCESS: 'RECOVER_SUCCESS',
    RECOVER_FAIL: 'RECOVER_FAIL',
}
  
export const recover = (email) => ({
  type: recoverActions.RECOVER,
  payload: { email },
});
    
export const recoverSuccess = (email) => ({
  type: recoverActions.RECOVER_SUCCESS,
  payload: { email },
});

export const recoverFail = (error) => ({
  type: recoverActions.RECOVER_FAIL,
  payload: error,
});