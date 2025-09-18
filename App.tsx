import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Navigation from './src/navigation/Navigation';
import {store} from './src/store/Store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})