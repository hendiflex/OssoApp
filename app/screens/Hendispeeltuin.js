import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Testscreen extends React.Component {

  static navigationOptions = {
    title: 'Hendi speeltuin',
  };

  hendiFunc() {
      var hendi = "Hendi is een baas";
      var jeweet = "Jeweet ( ͡° ͜ʖ ͡°)";

      for(i=1; i=10; i++)
        {
            hendiText = hendi;
            hendiText = jeweet;
        }
  }

  render() {

    this.hendiFunc()
    
    return (
      <View style={styles.container}>
        <Text>{hendiText}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b6623',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
