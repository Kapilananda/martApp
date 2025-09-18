import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/HomeScreen';
import ProductDetails from '../screens/Home/ProductDetails';
// import CategoryView from "../components/CategoryView";
import ProductList from '../screens/Home/ProductList';
import BottomTabNavigation from './BottomTabNavigation';
import SearchResult from '../components/SearchResult';
import SearchScreen from "../screens/Home/SearchScreen";
import CartScreen from '../screens/Cart/CartScreen';
import CheckOut from '../screens/Cart/CheckOut';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails}/>
        <Stack.Screen name='ProductList' component={ProductList}/>
        <Stack.Screen name='SearchResult' component={SearchResult}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        <Stack.Screen name='CheckOut' component={CheckOut}/>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})