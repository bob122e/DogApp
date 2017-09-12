import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

var styles = StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundColor: '#e9ecef',
        paddingBottom: 20
    },

    image: {
        width: '100%',
        height: '70%'
    },

    label: {
        fontSize: 50,
        marginTop: 20,
        flexGrow: 1
    }
})

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
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: state.img}} />
        <Text style={styles.label}>
          Hello Dog!
        </Text>
        <Button style={styles.button} title="Next Dog" onPress={this.nextDog}/>
      </View>
    );
  }
}

export default App;

