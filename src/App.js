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

  constructor(props) {
      super(props)
      this.state = { img: 'https://dog.ceo/api/img/lhasa/n02098413_5638.jpg' }
      this.nextDog = this.nextDog.bind(this);
  }

  nextDog() {
      var self = this;
      fetch('https://dog.ceo/api/breeds/image/random').then(function(res) {
          return res.json();
      }).then(function(data){
          self.setState({img: data.message})
      });
  }

  render() {
    var state = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 300, height: 300}} source={{uri: state.img}} />
        <Text>
          Hello Dog!
        </Text>
        <Button title="Next Dog" onPress={this.nextDog}/>
      </View>
    );
  }
}

export default App;

