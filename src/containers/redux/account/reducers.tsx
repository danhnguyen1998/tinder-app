import {handleActions} from 'redux-actions';
import {setAccountAction} from './actions';
import IActionState from './state';

export default handleActions<IActionState, any>(
  {
    [setAccountAction.toString()]: (state, {payload}) => ({
      ...state,
      id: payload.id,
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      avatar: payload.avatar,
    }),
  },
  {
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    avatar: null,
  },
);
