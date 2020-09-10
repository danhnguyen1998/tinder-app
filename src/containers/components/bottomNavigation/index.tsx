import {APP_MY_FRIEND_SCREEN, rootMyFriendScreen} from '@src/screens/myFriends/navigation';
import {APP_PROFILE_SCREEN, rootProfileScreen} from '@src/screens/myProfile/navigation';
import {APP_NOTIFICATION_SCREEN} from '@src/screens/notifications/navigation';
import {colors, common} from '@src/styles';
import React, {Fragment} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {IProps} from './propState';
import styles from './styles';

export default function BottomTabNavigation(props: IProps) {
  const _tabs = [
    {
      key: APP_MY_FRIEND_SCREEN,
      label: 'Friends',
      barColor: colors.white,
      img: 'ios-star',
      onPress: () => rootMyFriendScreen(),
    },
    {
      key: APP_NOTIFICATION_SCREEN,
      label: 'Notifications',
      barColor: colors.white,
      img: 'ios-notifications',
      onPress: () => rootMyFriendScreen(),
    },
    {
      key: APP_PROFILE_SCREEN,
      label: 'Profile',
      barColor: colors.white,
      img: 'ios-person',
      onPress: () => rootProfileScreen(),
    },
  ];

  const _handleTabPress = (newTab: any) => newTab.onPress();

  const _renderIcon = (tab: any) => ({isActive}) => (
    <Icon name={tab.img} size={26} color={isActive ? colors.red : colors.darkNude} style={common.mt0} />
  );

  const _renderTab = ({tab, isActive}) => (
    <FullTab
      key={tab.key}
      isActive={isActive}
      label={tab.label}
      labelStyle={[styles.fullTabLabelStyle, {color: isActive ? colors.red : colors.darkNude}]}
      renderIcon={_renderIcon(tab)}
    />
  );

  return (
    <Fragment>
      <BottomNavigation
        activeTab={props.activeTab}
        renderTab={_renderTab}
        tabs={_tabs}
        onTabPress={_handleTabPress}
        useLayoutAnimation={true}
        style={styles.bottomNavigation}
      />
    </Fragment>
  );
}
