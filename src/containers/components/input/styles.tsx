import {colors, fontSizes} from '@src/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  inputWrap: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 49,
  },
  inputStyles: {
    fontSize: fontSizes.small,
    fontWeight: 'normal',
    flex: 1,
    color: colors.darkMain,
    minHeight: 32,
  },
  iconLeftStyles: {
    width: 35,
    height: 35,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftIconStyle: {
    color: colors.darkGray,
  },
  iconRightStyles: {
    width: 35,
    height: 35,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightIconStyle: {
    color: colors.darkGray,
  },
  errorText: {
    color: colors.red,
    fontSize: fontSizes.verySmall,
  },

  label: {
    fontWeight: '500',
    fontSize: 13,
    color: colors.subText,
    marginBottom: 5,
  },
});

export default styles;
