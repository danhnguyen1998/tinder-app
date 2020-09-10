import AsyncStorage from '@react-native-community/async-storage';
import {offLoadingAction, onLoadingAction} from '@src/containers/redux/common/actions';
import {logError} from '@src/utils';
import {put, takeLatest} from 'redux-saga/effects';
import {logOutAction} from './actions';

function* logOutWatcher() {
  yield takeLatest(logOutAction, function* () {
    try {
      yield put(onLoadingAction());
      yield AsyncStorage.clear();
    } catch (error) {
      logError(error.message);
    } finally {
      yield put(offLoadingAction());
    }
  });
}

export default {logOutWatcher};
