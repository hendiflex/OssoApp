import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Image } from 'react-native';
import images from '../util/images';
import RegisterForm from '../components/RegisterForm';

export default class SignUp extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  render() {
      return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={images.randomPicca} />
          </View>

          <View style={styles.formContainer}>
            <RegisterForm navigation={this.props.navigation}/>
          </View>
        </KeyboardAvoidingView>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  }
});
