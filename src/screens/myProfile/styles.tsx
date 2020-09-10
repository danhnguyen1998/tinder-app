import {colors} from '@src/styles';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  headerImage: {
    borderRadius: 90,
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    marginTop: 5,
    fontSize: 24,
    textAlign: 'center',
    // color: colors.eastBay,
    marginBottom: 25,
    fontWeight: '500'
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 16,
    shadowColor: 'rgba(131, 121, 108, 1)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.13,
    shadowRadius: 14,
    elevation: 10,
    position: 'relative',
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 120,
    transform: [{rotate: spin}]
  },
  titleCard: {
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    color: colors.darkGray,
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
});

export default styles;
