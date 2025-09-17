import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/HomeScreen';
import ProductDetails from '../screens/Home/ProductDetails';
// import CategoryView from "../components/CategoryView";
import ProductList from '../screens/Home/ProductList';
import BottomTabNavigation from './BottomTabNavigation';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails}/>
        <Stack.Screen name='ProductList' component={ProductList}/>
        {/* <Stack.Screen name='CategoryView' component={CategoryView}/> */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})