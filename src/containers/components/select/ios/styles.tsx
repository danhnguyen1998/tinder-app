import {colors} from '@src/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {flex: 1, backgroundColor: colors.greyOpacity},
  modalContent: {
    position: 'absolute',
    backgroundColor: colors.white,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalButtonLeft: {
    margin: 10,
    fontSize: 17,
    color: colors.bunting,
  },
  modalButtonRight: {
    margin: 10,
    fontSize: 17,
    color: colors.mediumSlateBlue,
  },
  pickerItem: {
    fontSize: 17,
    color: colors.bunting,
  },
});

export default styles;
