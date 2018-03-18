import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  sayHello() {
    return "Hello";
  }

  render() {

    var myText = this.sayHello();

    return (
      <View style={styles.container}>
        <Text>{myText} hendi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
