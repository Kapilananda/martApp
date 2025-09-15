import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import ProductDetails from '../screens/Home/ProductDetails';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})