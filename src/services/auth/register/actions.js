export const registerActions = {
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
};

export const register = (email, password) => ({
  type: registerActions.REGISTER,
  payload: { email, password },
});

export const registerFail = (error) => ({
  type: registerActions.REGISTER_FAIL,
  payload: error,
});

export const registerSuccess = (email, password) => ({
  type: registerActions.REGISTER_SUCCESS,
  payload: { email, password },
});

