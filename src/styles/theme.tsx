import {ifIphoneX} from '@src/utils';
import {Platform} from 'react-native';
import colors from './colors';

export default {
  Header: {
    statusBarProps: {
      backgroundColor: colors.solitude,
    },
    containerStyle: {
      backgroundColor: colors.solitude,
      height: Platform.OS === 'android' ? 45 : ifIphoneX(90, 50),
      paddingTop: Platform.OS === 'android' ? 0 : ifIphoneX(40, 0),
      paddingHorizontal: 20,
    },
  },
};
