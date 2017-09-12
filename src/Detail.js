import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Button
} from 'react-native';

var styles = StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        backgroundColor: '#e9ecef',
        padding: 30
    }
});


class Detail extends Component {


  constructor(props) {
      super(props);
      this.state = { img: require('./dog-icon.png') }
      this.more = this.more.bind(this);
  }

  componentDidMount() {
      var self = this;
    var breed = this.props.navigation.state.params.breed;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(function(res) {
        return res.json();
    }).then(function(data){
        self.setState({img: {uri:  data.message }})
    });
  }

  more() {
    var self = this;
    var breed = this.props.navigation.state.params.breed;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(function(res) {
        return res.json();
    }).then(function(data){
        self.setState({ img: {uri:  data.message }})
    });
  }

  render() {
    var state = this.state;
    var breed = this.props.navigation.state.params.breed;
    return (
      <View style={styles.container}>
          <Text>{breed}</Text>
          <Image style={{height: 300, width: 300}} source={state.img} /> 
          <Button style={styles.button} title="More!" onPress={this.more}/>
      </View>
    );
  }
}

export default Detail;

