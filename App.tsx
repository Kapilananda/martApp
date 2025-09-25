import { StyleSheet, Text, View, } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import "./src/firebaseConfig";

import Navigation from './src/navigation/Navigation';
import { store } from './src/store/store';

export default function App() {
  return (

    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView 
           style={{
          flex: 1,
        }}
        >
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({})