import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {
  getUserLocationHandler = () => {
    console.log('you son of a bitch, Im in');
  };
  render() {
    return (
      <View>
        <Text>My Text</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}
