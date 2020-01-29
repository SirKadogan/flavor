/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {getBundleId} from 'react-native-device-info';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Flavor1 from './src/Flavor1/Flavor1';
import Flavor2 from './src/Flavor2/Flavor2';

const bundleId = getBundleId();
let AppNavigator = null;

if (bundleId == 'com.flavor.flavor1') {
  AppNavigator = createStackNavigator({
    Home: {
      screen: Flavor1,
      navigationOptions: {title: 'Flavor1'},
    },
  });
} else {
  AppNavigator = createStackNavigator({
    Home: {
      screen: Flavor2,
      navigationOptions: {title: 'Flavor2'},
    },
  });
}

export default createAppContainer(AppNavigator);
