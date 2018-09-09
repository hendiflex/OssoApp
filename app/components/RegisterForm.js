import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import * as api from '../util/api.js';

export default class RegisterForm extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleSignUp = (email, password) => {
    api.register(email, password)
      .then(() => this.props.navigation.navigate('Tabs'))
      .catch(error => this.setState({ errorMessage: error }))
  }

  handleLogin = () => {
    this.props.navigation.navigate('Login');
  }

  render() {

    return (
      <View style={styles.container}>

        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <TextInput style = {styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)'
          onChangeText={email => this.setState({ email })}
          value={this.state.email} />

        <TextInput style = {styles.input}
          returnKeyType="go"
          ref={(input)=> this.passwordInput = input}
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password} />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleSignUp(this.state.email, this.state.password)}>
          <Text  style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpContainer} onPress={() => this.handleLogin()}>
          <Text style={styles.buttonText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height: 60,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 15,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  signUpContainer:{
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
})
