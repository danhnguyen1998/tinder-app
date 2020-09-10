import {createActions} from 'redux-actions';

const actions = createActions({
  GET_RANDOM_USER_ACTION: () => ({}),
  SET_USER_ACTION: (data) => ({data}),
  SET_USER_TO_LIST_ACTION: (data) => ({data}),
  SWIPE_USER_ACTION: (data) => ({data})
});

export const {getRandomUserAction, setUserToListAction, setUserAction, swipeUserAction} = actions;