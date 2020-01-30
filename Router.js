import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Bookcase from './App/screens/Bookcase';
import Explore from './App/screens/Explore';
import AddBook from './App/screens/AddBook';
import Lists from './App/screens/Lists';
import Profile from './App/screens/Profile';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: {
      tabBarLabel: 'Bookcase',
      tabBarIcon: ({tintColor}) => (
        <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      ),
    },
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="ios-map-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      ),
    },
  },
  'Add Book': {
    screen: AddBook,
    navigationOptions: {
      tabBarLabel: 'Add Book',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="ios-add-circle-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      ),
    },
  },
  Lists: {
    screen: ReadingListStack,
    navigationOptions: {
      tabBarLabel: 'Lists',
      tabBarIcon: ({tintColor}) => (
        <Icon name="list" type="entypo" size={28} color={tintColor} />
      ),
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="ios-person-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      ),
    },
  },
});

export const createRootNavigator = () => {
  return StackNavigator({
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  });
};
