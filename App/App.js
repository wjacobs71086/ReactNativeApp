import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import bernie from './assets/FullSizeRender.jpeg';
import FetchLocation from './components/FetchLocation';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 75,
    alignSelf: 'center',
  },
  red: {
    display: 'flex',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default class App extends React.Component {
  state = {
    dog: false,
    imgUrl: '',
  };

  componentDidMount() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          imgUrl: responseJson.message,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  getNewDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          imgUrl: responseJson.message,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getUserLocationHandler = () => {
    this.setState({
      dog: true,
    });
    this.getNewDog();
  };
  //require('./assets/FullSizeRender.jpeg')
  renderDogImg = () => {
    if (this.state.dog) {
      console.log(this.state.dog);
      return (
        <Image
          source={{uri: `${this.state.imgUrl}`}}
          style={{width: 400, height: 400}}
        />
      );
    }
  };

  render() {
    return (
      <View style={styles.red}>
        <Text style={styles.bigBlue}>My Text</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        {this.renderDogImg()}
      </View>
    );
  }
}
