import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/fullPhotoScreenStyle';
import {View, Image} from 'react-native';

class FullPhotoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      showToTopBtn: false,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Image
          style={styles.photoSize}
          source={{uri: navigation.getParam('image')}}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPhotoScreen);
