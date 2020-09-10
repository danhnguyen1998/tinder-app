import {RootState} from '@src/boot/rootReducers';
import {colors} from '@src/styles';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';
import csStyles from './styles';

export default function LoadingComponent() {
  const {isLoading} = useSelector((state: RootState) => ({
    isLoading: state.common.isLoading,
  }));

  return isLoading ? (
    <View style={csStyles.view_loading}>
      <ActivityIndicator size="large" color={colors.red} />
    </View>
  ) : null;
}
