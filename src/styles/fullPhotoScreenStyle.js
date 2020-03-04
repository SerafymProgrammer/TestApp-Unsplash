import {StyleSheet, Dimensions} from 'react-native';

let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  photoSize: {
    width: windowWidth,
    height: windowHeight,
  },
});

export default styles;
