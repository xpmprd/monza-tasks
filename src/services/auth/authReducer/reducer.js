import { loginActions } from '../login/actions';
import { registerActions } from '../register/actions';
import { verifyEmailActions } from '../verifyEmail/actions';
import { recoverActions } from '../recoverPass/actions';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  ifUid: null,
  loading: false,
  currentUser: null,
  verifiedEmail: null,
  verifyEmailSuccess: false,
  recoverSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case registerActions.REGISTER: {
      return {
        ...state,
        loading: true,
      };
    }
    case loginActions.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
        ifUid: action.payload.user.uid,
        loading: false,
        currentUser: action.payload.user.email,
        verifiedEmail: action.payload.user.emailVerified
      };
    }
    case loginActions.LOGIN_FAIL: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
        loading: false,
      };
    }
    case loginActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        ifUid: null,
        loading: false,
      };
    }
    case registerActions.REGISTER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
        loading: false,
      };
    }
    case registerActions.REGISTER_FAIL: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
        loading: false,
      };
    } case loginActions.CLEAN_UP: {
      return {
        ...state,
        error: null,
        loading: false,
      };
    } case verifyEmailActions.VERIFY_EMAIL_START: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    } case verifyEmailActions.VERIFY_EMAIL_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        verifyEmailSuccess: true,
      }
    } case verifyEmailActions.VERIFY_EMAIL_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    } case verifyEmailActions.VERIFIED_EMAIL: {
      return {
        ...state,
        error:null,
        verifiedEmail: action.payload.user.emailVerified
      }
    } case verifyEmailActions.NOT_VERIFIED_EMAIL: {
      return {
        ...state,
        error: null,
        verifiedEmail: action.payload.user.emailVerified
      }
    } case recoverActions.RECOVER: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    } case recoverActions.RECOVER_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        recoverSuccess: true,
      }
    } case recoverActions.RECOVER_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }

    default:
      return state;
  }
};

export const ifUid = state => state.auth.user.user.uid || {};
export const isAuthenticated = state => state.auth.isAuthenticated || false;
export const currentUser = state => state.auth.user.user.email || {};
export const verifiedEmail = state => state.firebase.auth.emailVerified || {};
export default authReducer;
