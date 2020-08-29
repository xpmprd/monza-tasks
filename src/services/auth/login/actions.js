export const loginActions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CLEAN_UP: 'CLEAN_UP',
};

export const login = (email, password) => ({
  type: loginActions.LOGIN,
  payload: { email, password },
});
  
export const loginSuccess = (email, password) => ({
  type: loginActions.LOGIN_SUCCESS,
  payload: { email, password },
});
      
export const logout = () => ({
  type: loginActions.LOGOUT,
});

export const clean = () => ({
  type: loginActions.CLEAN_UP,
});

