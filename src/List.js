import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native';

var styles = StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        backgroundColor: '#e9ecef',
        padding: 30
    }
});

class BreedButton extends Component {

  render() {
    var props = this.props;
    return (
      <View style={{padding: 10}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {breed: props.breed})}>
          <Text>{props.breed}</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

}

class App extends Component {

  constructor(props) {
      super(props)

      this.state = {
        loading: true,
        dogs: []
      }
  }

  componentDidMount() {
    var self = this;
    console.log(this);
    fetch("https://dog.ceo/api/breeds/list").then(function(res) {
      return res.json();
    }).then(function(data) {
      var dogs = data.message.map(function(x) {
        return {key: x}
      });
      self.setState({
        loading: false,
        dogs: dogs
      });
    })
  }

  render() {
    var state = this.state;
    var props = this.props;
    return (
      <View style={styles.container}>
        {state.loading ? 
          <ActivityIndicator /> :
          <FlatList
            data={state.dogs}
            renderItem={({item}) => <BreedButton breed={item.key} navigation={props.navigation}></BreedButton>}
          />
        }
      </View>
    );
  }
}

export default App;

