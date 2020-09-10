import {colors} from '@src/styles';
import {ifIphoneX} from '@src/utils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottomNavigation: {
    height: ifIphoneX(90, 60),
    paddingLeft: 20,
  },
  fullTabLabelStyle: {
    fontFamily: 'Rubik',
    letterSpacing: 0,
    fontSize: 12,
  },
  btnCenter: {
    position: 'absolute',
    zIndex: 2,
    bottom: ifIphoneX(140, 75),
    borderRadius: 40,
    height: 65,
    width: 65,
    right: 15,
    backgroundColor: colors.red,
  },
  iconAdd: {
    alignSelf: 'center',
  },
});

export default styles;
