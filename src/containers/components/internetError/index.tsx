import {RootState} from '@src/boot/rootReducers';
import {colors} from '@src/styles';
import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import csStyles from './styles';

export default function InternetErrorComponent() {
  const {isConnected} = useSelector((state: RootState) => ({
    isConnected: state.network.isConnected,
  }));

  return (
    <Modal visible={!isConnected} animationType="slide" transparent={true}>
      <View style={csStyles.view_disconnect}>
        <View>
          <ActivityIndicator size="large" color={colors.blue} />
          <Text style={csStyles.txt_disconnect}>Connecting...</Text>
        </View>
      </View>
    </Modal>
  );
}
