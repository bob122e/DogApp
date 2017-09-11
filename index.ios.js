import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DogApp extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Hello Camden!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('DogApp', () => DogApp);
