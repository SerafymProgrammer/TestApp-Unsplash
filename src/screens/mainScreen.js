import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/actions';
import styles from '../styles/mainScreenStyles';
import ListItem from '../components/listItem';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showToTopBtn: false,
    };
  }

  handleScroll = event => {
    if (event.nativeEvent.contentOffset.y >= 100) {
      this.setState({showToTopBtn: true});
      return;
    }
    this.setState({showToTopBtn: false});
  };

  async componentDidMount() {
    await this.props.getAllPhotos();
  }

  render() {
    const {showToTopBtn} = this.state;

    return this.props.allPhotos && this.props.allPhotos.length > 0 ? (
      <View>
        <FlatList
          style={styles.listStyle}
          keyboardShouldPersistTaps="always"
          onScroll={event => this.handleScroll(event)}
          data={this.props.allPhotos}
          extraData={this.props}
          initialNumToRender={10}
          maxToRenderPerBatch={4}
          updateCellsBatchingPeriod={10}
          renderItem={({item}) => (
            <ListItem {...item} navigation={this.props.navigation} />
          )}
        />

        {showToTopBtn && !this.props.isShowMap ? (
          <TouchableOpacity onPress={this.toTop}>
            <Text>To top</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    allPhotos: state.mainReducer.allPhotos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPhotos: () => dispatch(actions.getAllPhotos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
