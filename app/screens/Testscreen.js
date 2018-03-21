import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import images from '../util/images';

export default class Testscreen extends React.Component {

  static navigationOptions = {
    title: 'Random scherm',
  };

  sayHello() {
    return "Andere pagina wow!!";
  }

  render() {

    var myText = this.sayHello();

    return (
      <View style={styles.container}>
        <Text>{myText}</Text>

        <Image
          source={images.randomPicca}
          style={styles.picca}>
        </Image>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
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
  picca: {
    width: 400,
    height: 200,
    marginBottom: 50
  },
});
