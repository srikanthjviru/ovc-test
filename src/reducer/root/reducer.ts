import { SET_USERS } from './actions';
import { IUser } from '../../interfaces';

interface IState {
  users: IUser[];
}

const initState: IState = {
  users: [],
};

const reducerMethods = {
  [SET_USERS]: (state: IState, { users }) => {
    return {
      ...state,
      users,
    }
  }
};

const Reducer = (state = initState, action: any) => {
  if (reducerMethods[action.type]) {
    return reducerMethods[action.type](state, action);
  }

  return state;
};

export default Reducer;
