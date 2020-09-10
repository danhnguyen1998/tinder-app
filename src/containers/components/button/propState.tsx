import {GestureResponderEvent, ViewStyle} from 'react-native';

interface IProps {
  styleContainer?: ViewStyle;
  styleButton?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
  text: string;
  disabled?: boolean;
  btnFull?: boolean;
  clear?: boolean;
}

export {IProps};
