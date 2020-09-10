import {RNNDrawer} from 'react-native-navigation-drawer-extension';

const APP_SIDE_MENU_SCREEN = 'app.sidemenu';

const openSideMenu = (parentComponentId: string | number) =>
  RNNDrawer.showDrawer({
    component: {
      name: APP_SIDE_MENU_SCREEN,
      passProps: {
        animationOpenTime: 100,
        animationCloseTime: 100,
        style: {},
        parentComponentId,
      },
    },
  });

export {APP_SIDE_MENU_SCREEN, openSideMenu};
