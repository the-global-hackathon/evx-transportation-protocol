import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Map from './src/components/Map';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from './src/context/Context';

import HomeScreen from './src/screens/HomeScreen';
import DirectionsScreen from './src/screens/DirectionsScreen';
import SecondScreen from './src/screens/SecondScreen';
import ReserveScreen from './src/screens/ReserveScreen';
import TripsScreen from './src/screens/TripsScreen';


const directionsFlow = createStackNavigator({
  Home: HomeScreen,
  Directions: DirectionsScreen
});

const reserveFlow = createStackNavigator({
  List: SecondScreen,
  Reserve: ReserveScreen
});

const mainFlow = createBottomTabNavigator({
  Map: directionsFlow,
  Reserve: reserveFlow,

});

mainFlow.navigationOptions = () => {
  return {
    header: null,
  };
};
reserveFlow.navigationOptions = () => {
  return {
    tabBarIcon: <FontAwesome name="th-list" size={18} />
  };
};

directionsFlow.navigationOptions = () => {
  return {
    tabBarIcon: <MaterialCommunityIcons name="home-map-marker" size={25} />
  };
};

const stackNavigator = createStackNavigator({
  mainFlow
});

const App = createAppContainer(stackNavigator);


export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
