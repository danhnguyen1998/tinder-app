import {createActions} from 'redux-actions';

const actions = createActions({
  ON_LOADING_ACTION: null,
  OFF_LOADING_ACTION: null,
  LOG_OUT_ACTION: null,
});

export const {onLoadingAction, offLoadingAction, logOutAction} = actions;
