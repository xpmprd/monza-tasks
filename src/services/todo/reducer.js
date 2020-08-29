import { loginActions } from '../auth/login/actions';
import { 
  todoActions,   
} from './actions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.CREATED:
      return [...state, action.payload.item];
      
    case todoActions.UPDATED: {
      const changed = action.payload.item;
  
      return state
        .map(item => (item.id === changed.id ? changed : item))
          
    };
    case todoActions.REMOVED: {
      const removed = action.payload.item;

      return state.filter(item => item.id !== removed.id);
    } 
    case loginActions.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default todoReducer;
