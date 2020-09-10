import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const typography = () => {
  const oldTextRender = (Text as any).render;
  (Text as any).render = (...args: any) => {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },
});
