import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import fb from './fb';
import in from './in';

export default class App extends React.Component() {
  render (){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomNavigator({
  fb: {screen:fbscreen},
  in:{screen:inscreen},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
