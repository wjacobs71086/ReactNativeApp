import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    fontSize: 10,
    margin: 20,
  },
});

const fetchLocation = props => {
  return (
    <View style={buttonStyles.button}>
      <Button
        style={buttonStyles.button}
        color={'grey'}
        fontSize={'80'}
        title="Get Locations"
        onPress={props.onGetLocation}
      />
    </View>
  );
};

export default fetchLocation;
