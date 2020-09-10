import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class SideMenuComponent extends React.Component {
  render() {
    return <Text>Side menu</Text>;
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SideMenuComponent);
