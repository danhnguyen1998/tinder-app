import {colors} from '@src/styles';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {IProps} from './propState';
import styles from './styles';

export default React.forwardRef((props: IProps, ref: React.LegacyRef<TextInput>) => {
  const borderColor = props.errorMessage ? colors.red : colors.grey;
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.label && <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>}
      <View style={[styles.inputWrap, props.inputWrapStyle, {borderColor}]}>
        {props.leftIcon && (
          <TouchableOpacity
            onPress={props.leftIconOnPress}
            onPressIn={props.leftIconOnPressIn}
            onPressOut={props.leftIconOnPressOut}>
            <Icon
              containerStyle={[styles.iconLeftStyles, props.leftIconContainerStyle]}
              type={props.leftIconType || 'font-awesome'}
              name={props.leftIcon}
              iconStyle={{...styles.leftIconStyle, ...props.leftIconStyle}}
            />
          </TouchableOpacity>
        )}
        <TextInput
          ref={ref}
          placeholderTextColor={props.placeholderTextColor || colors.darkGray}
          style={[styles.inputStyles, props.inputStyle]}
          maxLength={props.maxLength}
          {...props}
        />
        {props.rightIcon && (
          <TouchableOpacity onPressIn={props.rightIconOnPressIn} onPressOut={props.rightIconOnPressOut}>
            <Icon
              containerStyle={[styles.iconRightStyles, props.rightIconContainerStyle]}
              type={props.rightIconType || 'font-awesome'}
              name={props.rightIcon}
              iconStyle={{...styles.rightIconStyle, ...props.rightIconStyle}}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.errorMessage && <Text style={styles.errorText}>{props.errorMessage}</Text>}
    </View>
  );
});
