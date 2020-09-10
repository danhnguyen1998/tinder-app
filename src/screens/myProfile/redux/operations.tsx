import {offLoadingAction, onLoadingAction} from '@src/containers/redux/common/actions';
import {logError} from '@src/utils';
import {call, put, takeLatest, select} from 'redux-saga/effects';
import {getRandomUserService} from '../services';
import {getRandomUserAction, setUserAction, setUserToListAction, swipeUserAction} from './actions';
import {RootState} from '@src/boot/rootReducers';

function* getRandomUserWatcher() {
  yield takeLatest(getRandomUserAction, function* () {
    try {
      yield put(onLoadingAction());
      const result = yield call(getRandomUserService);
      if (result) yield put(setUserAction(result.results[0]));
    } catch (error) {
      logError(error.message);
    } finally {
      yield put(offLoadingAction());
    }
  });
}

function* swipeUserWatcher() {
  yield takeLatest(swipeUserAction, function* ({payload}) {
    try {
      let data = yield select((state: RootState) => state.screens.randomUserReducer.data);
      yield put(onLoadingAction());
      if (payload) {
        data.push(payload);
        yield put(setUserToListAction(data));
        yield put(getRandomUserAction());
      }
    } catch (error) {
      logError(error.message);
    } finally {
      yield put(offLoadingAction());
    }
  });
}

export default {
  getRandomUserWatcher,
  swipeUserWatcher,
};
