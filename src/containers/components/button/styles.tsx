import {colors} from '@src/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
  },
  btnContainer: {
    height: 49,
    borderWidth: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderRadius: 76,
    alignSelf: 'center',
    paddingHorizontal: 20,
    minWidth: 110,
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;
