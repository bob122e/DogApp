import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 300, height: 300}} source={{uri: "https://dog.ceo/api/img/lhasa/n02098413_5638.jpg"}} />
        <Text>
          Hello Dog!
        </Text>
        <Button title="Next Dog" onPress={() => console.log('next dog pressed')}/>
      </View>
    );
  }
}

export default App;

