/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';

import allReducers from './redux/reducers/index';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Nav from './navigation/nav';

const store = createStore(allReducers);


export default class App  extends Component{
  render() {
    return(
      <Provider store = { store }> 
          <Nav />
      </Provider>
    )
  }
}