import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';
const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 15,
    paddingTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentNoHeader: {
    position: 'relative',
    flex: 1,
  },
  bottomFixed: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 20,
  },
  rowBottomFixed: {
    flex: 0,
    minHeight: 55,
  },
  mainContainer: {
    marginVertical: 20,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    width: SCREEN_WIDTH - 50,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    minWidth: 20,
    height: 20,
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 17,
    marginLeft: 10,
    textAlign: 'left',
    height: 35,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  p_hori_5: {paddingHorizontal: 5},
  m_l_10: {
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  m_0: {
    margin: 0,
  },
  m_hori_0: {
    marginHorizontal: 0,
  },
  text_left: {
    textAlign: 'left',
  },
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flexColumnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  font24: {
    fontSize: 24,
  },
  font20: {
    fontSize: 20,
  },
  font18: {
    fontSize: 18,
  },
  font16: {
    fontSize: 16,
  },
  font15: {
    fontSize: 15,
  },
  font14: {
    fontSize: 14,
  },
  font8: {
    fontSize: 8,
  },
  pd5: {
    padding: 5,
  },
  pd10: {
    padding: 10,
  },
  pd15: {
    padding: 15,
  },
  pd20: {
    padding: 20,
  },
  pl0: {
    paddingLeft: 0,
  },
  pl5: {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl20: {
    paddingLeft: 20,
  },
  pt20: {
    paddingTop: 20,
  },
  pt10: {
    paddingTop: 10,
  },
  pv10: {
    paddingVertical: 10,
  },
  noPadding: {
    padding: 0,
  },
  py10: {
    paddingVertical: 10,
  },
  py15: {
    paddingVertical: 15,
  },
  py5: {
    paddingVertical: 5,
  },
  py3: {
    paddingVertical: 3,
  },
  py0: {
    paddingVertical: 0,
  },
  px30: {
    paddingHorizontal: 30,
  },
  px20: {
    paddingHorizontal: 20,
  },
  px0: {
    paddingHorizontal: 0,
  },
  pr5: {},
  pr10: {
    paddingRight: 10,
  },
  pr0: {
    paddingRight: 0,
  },
  pr3: {
    paddingRight: 3,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  ml5: {
    marginLeft: 5,
  },
  ml20: {
    marginLeft: 20,
  },
  mt0: {
    marginTop: 0,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mr0: {
    marginRight: 0,
  },
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },
  mx20: {
    marginHorizontal: 20,
  },
  mx15: {
    marginHorizontal: 15,
  },
  mx10: {
    marginHorizontal: 10,
  },
  mx5: {
    marginHorizontal: 5,
  },
  my5: {
    marginVertical: 5,
  },
  my10: {
    marginVertical: 10,
  },
  my20: {
    marginVertical: 20,
  },
  textNormal: {
    fontWeight: 'normal',
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textSemiBold: {
    fontWeight: '500',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },

  borderTransparent: {
    borderColor: 'transparent',
  },
  noRadius: {
    borderRadius: 0,
  },
  noBorderTopRadius: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  noBorderBottomRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
  btnBlue: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  relative: {
    position: 'relative',
  },
  fullWidth: {
    width: '100%',
  },

  wrapTextLink: {
    padding: 10,
    width: 'auto',
  },
  textLink: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.red,
  },
  // textDefault: {
  //   fontWeight: '500',
  //   fontSize: 13,
  //   color: colors.subText,
  //   textAlign: 'center',
  // }

  // header
  btnBack: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingRight: 20,
  },
  headerContainer: {
    backgroundColor: colors.bgColor,
    justifyContent: 'space-around',
    paddingHorizontal: 0,
    borderBottomWidth: 0,
    height: 50,
    paddingTop: 0,
  },

  // modal

  modalContainer: {
    minHeight: 200,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 16,
    marginVertical: 5,
    shadowColor: 'rgba(131, 121, 108, 1)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.13,
    shadowRadius: 14,
    elevation: 10,
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 40,
    height: 40,
  },
  modalTitle: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: colors.darkMain,
    marginVertical: 15,
  },
});
