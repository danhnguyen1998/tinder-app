import {logError} from '@src/utils';
import {put, takeLatest} from 'redux-saga/effects';
import {logOutAction, offLoadingAction, onLoadingAction} from '../common/actions';
import {appLaunchAction, appToBackgroundAction, backgroundToAppAction} from './actions';

function* appLaunchWatcher() {
  yield takeLatest(appLaunchAction, function* () {
    try {
      yield put(onLoadingAction());
    } catch (error) {
      logError(error.message);
    } finally {
      yield put(offLoadingAction());
    }
  });
}

function* appToBackgroundWatcher() {
  yield takeLatest(appToBackgroundAction, function* () {
    try {
      yield put(onLoadingAction());
    } catch (error) {
      logError(error.message);
    } finally {
      yield put(offLoadingAction());
    }
  });
}

function* backgroundToAppWatcher() {
  yield takeLatest(backgroundToAppAction, function* () {
    try {
      yield put(onLoadingAction());

      yield put(logOutAction());
    } catch (error) {
      logError(error.message);
    } finally {
      yield put(offLoadingAction());
    }
  });
}

export default {
  appLaunchWatcher,
  appToBackgroundWatcher,
  backgroundToAppWatcher,
};
