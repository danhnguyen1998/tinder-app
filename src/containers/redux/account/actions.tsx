import {createActions} from 'redux-actions';

const actions = createActions({
  INVALID_TOKEN_ACTION: null,
  SET_ACCOUNT_ACTION: (userInfor) => userInfor,
});

export const {invalidTokenAction, setAccountAction} = actions;
