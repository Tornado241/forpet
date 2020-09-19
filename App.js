/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Login_SignUp/SignIn';
import ForgotPassword from './Login_SignUp/ForgotPassword';
import SignUp from './Login_SignUp/SignUp';

import allReducers from './redux/reducers/index';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LogInContainer from './redux/containers/LoginContainer';
const store = createStore(allReducers);

const Stack = createStackNavigator();

export default class App  extends Component{
  render() {
    return(
      <Provider store = { store }> 
          <LogInContainer />
      </Provider>
    )
  }
}