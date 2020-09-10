import {colors} from '@src/styles';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IProps} from './propState';
import styles from './styles';

export default function ButtonComponent(props: IProps) {
  return (
    <View style={[props.styleContainer, styles.mainContainer]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          styles.btnContainer,
          {opacity: props.disabled ? 0.5 : 1},
          {width: props.btnFull ? '100%' : 'auto'},
          {backgroundColor: props.clear ? 'transparent' : colors.red},
          {borderColor: props.clear ? 'transparent' : colors.red},
          props.styleButton,
        ]}
        disabled={props.disabled}>
        <Text style={[styles.btnText, {color: props.clear ? 'rgba(131, 121, 108, 0.55)' : 'white'}]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
