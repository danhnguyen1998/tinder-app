import {typography} from '@src/utils/typography';
import {Navigation} from 'react-native-navigation';
import {checkInternetConnection, offlineActionTypes} from 'react-native-offline';
import {persistStore} from 'redux-persist';
import configureStore from './src/boot/configureStore';
import {registerScreens} from './src/registerScreens';
import {rootProfileScreen} from '@src/screens/myProfile/navigation';

typography();

const store = configureStore();

registerScreens(store);

Navigation.events().registerAppLaunchedListener(() => {
  persistStore(store, {}, () => {
    checkInternetConnection().then(async (isConnected: boolean) => {
      store.dispatch({
        type: offlineActionTypes.CONNECTION_CHANGE,
        payload: isConnected,
      });
      rootProfileScreen();
    });
  });
});
