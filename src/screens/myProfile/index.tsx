import BottomTabNavigation from '@src/containers/components/bottomNavigation';
import {common, colors} from '@src/styles';
import React, {Fragment} from 'react';
import {Text, Image, View, TouchableOpacity, Animated} from 'react-native';
import {connect} from 'react-redux';
import {APP_PROFILE_SCREEN} from './navigation';
import {IProps, IState} from './propState';
import {bindActionCreators, Dispatch} from 'redux';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {getRandomUserAction, swipeUserAction} from './redux/actions';
import {RootState} from '@src/boot/rootReducers';

class MyProfileComponent extends React.Component<IProps> {
  state: IState = {
    key: 1,
  };

  componentDidMount() {
    this.props.getRandomUserAction();
  }

  _forward = () => {
    this.props.getRandomUserAction();
  };

  _next = () => {
    this.props.swipeUserAction(this.props.user);
  };

  _handleChangeInfo = (key: number) => () => {
    this.setState({key});
  };

  render() {
    const {key} = this.state;
    return (
      <Fragment>
        <GestureRecognizer
          style={{
            flex: 1,
          }}
          onSwipeLeft={this._forward}
          onSwipeRight={this._next}>
          <View style={common.container}>
            <Animated.View style={styles.cardContainer}>
              <Image
                source={{
                  uri: `${
                    this.props.user.user ? this.props.user.user.picture : 'https://i.postimg.cc/k5rVgYjZ/Group-290.png'
                  }`,
                }}
                style={styles.headerImage}
              />
              <View style={common.flexColumn}>
                <Text style={[styles.titleCard]}>
                  {key === 1
                    ? 'My cell is'
                    : key === 2
                    ? 'My email is'
                    : key === 3
                    ? 'My address is'
                    : key === 4
                    ? 'My phone is'
                    : 'My username is'}
                </Text>
                <Text style={styles.text}>
                  {key === 1
                    ? `${this.props.user.user ? this.props.user.user.cell : ''}`
                    : key === 2
                    ? `${this.props.user.user ? this.props.user.user.email : ''}`
                    : key === 3
                    ? `${this.props.user.user ? this.props.user.user.location.street : ''} ${
                        this.props.user.user ? this.props.user.user.location.city : ''
                      } ${this.props.user.user ? this.props.user.user.location.state : ''}`
                    : key === 4
                    ? `${this.props.user.user ? this.props.user.user.phone : ''}`
                    : `${this.props.user.user ? this.props.user.user.username : ''}`}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this._handleChangeInfo(1)}>
                  <Icon type="ionicon" name="ios-globe" size={50} color={colors.greenLight} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._handleChangeInfo(2)}>
                  <Icon type="ionicon" name="ios-calendar" size={50} color={colors.greenLight} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._handleChangeInfo(3)}>
                  <Icon type="ionicon" name="ios-map" size={50} color={colors.greenLight} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._handleChangeInfo(4)}>
                  <Icon type="ionicon" name="ios-call" size={50} color={colors.greenLight} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._handleChangeInfo(5)}>
                  <Icon type="ionicon" name="ios-lock" size={50} color={colors.greenLight} />
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </GestureRecognizer>
        <BottomTabNavigation componentId={this.props.componentId} activeTab={APP_PROFILE_SCREEN} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.screens.randomUserReducer.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({getRandomUserAction, swipeUserAction}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileComponent);
