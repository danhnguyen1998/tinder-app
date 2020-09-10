import {handleActions} from 'redux-actions';
import {setUserToListAction, setUserAction} from './actions';
import IActionState from './state';

export default handleActions<IActionState, any>(
  {
    [setUserToListAction.toString()]: (state, {payload}) => ({
      ...state,
      data: payload.data,
    }),
    [setUserAction.toString()]: (state, {payload}) => ({
      ...state,
      user: payload.data,
    }),
  },
  {
    data: [],
    user: {},
  },
);
