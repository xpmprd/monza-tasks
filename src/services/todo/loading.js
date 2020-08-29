import {
  loginActions,
} from '../auth/login/actions';
import { todoActions } from './actions';
  
export const LOADING = 'LOADING';

export const loading = (state = false, action) => {
  switch (action.type) {
    
    case loginActions.LOGIN_SUCCESS:
    case loginActions.LOGIN:
    case loginActions.LOGOUT:
    case todoActions.CREATE:
    case todoActions.REMOVE:
    case todoActions.UPDATE:
      return true;
    case todoActions.UPDATED:
    case todoActions.TASK_CLEAN:
    case loginActions.LOGOUT_SUCCESS:
    case todoActions.CREATED:
    case todoActions.REMOVED:
      return false;
      
    default:
      return state;
  }
};
  
