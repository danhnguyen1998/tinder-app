import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {RootState} from '@src/boot/rootReducers';
import {FlatList, View, Image, Text} from 'react-native';
import styles from './styles';
import BottomTabNavigation from '@src/containers/components/bottomNavigation';
import {APP_MY_FRIEND_SCREEN} from './navigation';

interface IProps {
  componentId: string;
  favoriteList: [];
}

class MyFriendComponent extends React.Component<IProps> {
  componentDidMount() {
    console.log(this.props.favoriteList);
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `${item.data.user.picture}`,
          }}
          style={styles.headerImage}
        />
        <Text>
          {item.data.user.name.first} {item.data.user.name.last}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <Fragment>
        <FlatList
          data={this.props.favoriteList}
          renderItem={this._renderItem}
          keyExtractor={(item) => `${item.data.seed}`}
          style={styles.list}
        />
        <BottomTabNavigation componentId={this.props.componentId} activeTab={APP_MY_FRIEND_SCREEN} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.screens.randomUserReducer.data,
});

export default connect(mapStateToProps)(MyFriendComponent);
