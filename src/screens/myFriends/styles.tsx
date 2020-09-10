import {colors} from '@src/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  headerImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default styles;
