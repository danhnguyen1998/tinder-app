import {common} from '@src/styles';
import React, {Fragment, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {IProps, IState} from '../propState';
import ModalIOSComponent from './modal';

export default function SelectIOSComponent(props: IProps) {
  const [state, setState] = useState<IState>({
    modalStatus: false,
    value: -1,
  });

  useEffect(() => {
    if (state.value !== props.value) {
      setState((state) => ({
        ...state,
        value: props.value,
      }));
    }
  }, [props.value]);

  const _showHideModal = () =>
    setState((state) => ({
      ...state,
      modalStatus: !state.modalStatus,
    }));

  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={1}
        style={[common.inputContainer, props.styleContainer]}
        onPress={_showHideModal}>
        <Text allowFontScaling={false} style={[common.input, {lineHeight: 35}]}>
          {props.data.length > 0 && props.value && props.value !== -1
            ? props.data.find((item) => item.id === props.value).text
            : props.placeholder}
        </Text>
        <Icon name="angle-down" style={common.icon} />
      </TouchableOpacity>

      <ModalIOSComponent
        modalStatus={state.modalStatus}
        value={state.value}
        data={props.data}
        placeholder={props.placeholder}
        hideModal={_showHideModal}
        selectedValue={props.onValueChange}
      />
    </Fragment>
  );
}
