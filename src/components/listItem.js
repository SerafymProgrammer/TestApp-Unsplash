import React, from 'react';
import {connect} from 'react-redux';
import styles from '../styles/listItemStyles';
import {View, Text, TouchableOpacity, Image} from 'react-native';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActivityIndcator: false,
    };
  }

  selectPhoto = async () => {
    await this.props.navigation.navigate('FullPhotoScreen', {
      image: this.props.urls.full,
    });
  };
  render() {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => this.selectPhoto()}>
          <Image
            style={styles.imageStyle}
            source={{uri: this.props.urls.small}}
          />
        </TouchableOpacity>
        <View>
          <Text>
            Title:{' '}
            {!this.props.description
              ? this.props.alt_description
              : this.props.description}
          </Text>
          <Text>Author: {this.props.user.name}</Text>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
