import {Alert, Dimensions, Platform} from 'react-native';
import configServices from './configServices';
import location from './location';
import {getMimeTypes} from './mimeTypes';
import permission from './permission';
import validation from './validation';

/** Check device IPhoneX */
const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || dimen.height === 896 || dimen.width === 896)
  );
};

const ifIphoneX = (iphoneXStyle: any, regularStyle: any) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

const logError = (message: string) => Alert.alert('Error', message, [{text: 'OK', style: 'cancel'}]);

export {getMimeTypes, configServices, validation, isIphoneX, ifIphoneX, location, permission, logError};
