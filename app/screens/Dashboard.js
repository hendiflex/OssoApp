import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Dashboard extends React.Component {

  static navigationOptions = {
    title: 'Dashboard',
  };

  sayHello() {
    return "Gekke dashboard!!";
  }

  render() {

    var myText = this.sayHello();

    return (
      <View style={styles.container}>
        <Text>{myText}</Text>

        <Button
          title="Go to other screen!"
          onPress={() => this.props.navigation.navigate('Testscreen')}
        />
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
