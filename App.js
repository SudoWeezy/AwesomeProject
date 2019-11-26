/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Login }from './app/views/Login.js'
import { Main }from './app/views/Main.js'
import { SignUp }from './app/views/SignUp.js'

import { createStackNavigator, createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  Main: {
    screen: Main,
  },
}, {
    initialRouteName: 'Login',
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
