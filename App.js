import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from './configureStore';
import MainScreen from './src/screens/mainScreen';
import FullPhotoScreen from './src/screens/fullPhotoScreen';


const RootStack = createStackNavigator(
  {
    MainScreen,
    FullPhotoScreen,
  },
  {
    initialRouteName: 'MainScreen',
  },
);


const AppContainer = createAppContainer(RootStack);

const mainStore = store;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={mainStore}>
        <AppContainer />
      </Provider>
    );
  }
}
