import React, {ComponentClass, FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import RootComponent from './boot';
import MyFriendScreen from './screens/myFriends';
import {APP_MY_FRIEND_SCREEN} from './screens/myFriends/navigation';
import MyProfileScreen from './screens/myProfile';
import {APP_PROFILE_SCREEN} from './screens/myProfile/navigation';
import NotificationScreen from './screens/notifications';
import {APP_NOTIFICATION_SCREEN} from './screens/notifications/navigation';
import {colors} from './styles';
import theme from './styles/theme';

const Screens = new Map();

Screens.set(APP_MY_FRIEND_SCREEN, MyFriendScreen);
Screens.set(APP_PROFILE_SCREEN, MyProfileScreen);
Screens.set(APP_NOTIFICATION_SCREEN, NotificationScreen);

const WrappedComponent = (Component: FunctionComponent | ComponentClass, store: Store) => {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.bgColor}}>
          <ThemeProvider theme={theme}>
            <RootComponent>
              <Component {...props} />
            </RootComponent>
          </ThemeProvider>
        </SafeAreaView>
      </Provider>
    );
    return <EnhancedComponent />;
  };
};

export const registerScreens = (store: Store) => {
  Screens.forEach((ScreenComponent, key) =>
    Navigation.registerComponent(key, () => WrappedComponent(ScreenComponent, store)),
  );
};
