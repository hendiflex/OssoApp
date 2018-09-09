import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, KeyboardAvoidingView } from 'react-native';

import LoginForm from '../components/LoginForm';
import * as api from '../util/api.js';
import images from '../util/images';

export default class Login extends React.Component {

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
          <LoginForm navigation={this.props.navigation}/>
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
})

// <Text>Login</Text>
// {this.state.errorMessage &&
//   <Text style={{ color: 'red' }}>
//     {this.state.errorMessage}
//   </Text>}
// <TextInput
//   style={styles.textInput}
//   autoCapitalize="none"
//   placeholder="Email"
//   onChangeText={email => this.setState({ email })}
//   value={this.state.email}
// />
// <TextInput
//   secureTextEntry
//   style={styles.textInput}
//   autoCapitalize="none"
//   placeholder="Password"
//   onChangeText={password => this.setState({ password })}
//   value={this.state.password}
// />
// <Button title="Login" onPress={this.handleLogin} />
// <Button
//   title="Don't have an account? Sign Up"
//   onPress={() => this.props.navigation.navigate('SignUp')}
// />
