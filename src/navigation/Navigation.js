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
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import OtpScreen from '../screens/Auth/OtpScreen';
import SignUp from '../screens/Auth/SignUp';
import OrderSuccessScreen from '../screens/Orders/OrdersSuccessScreen';
import OrderDetails from '../screens/Orders/OrderDetails';
import OrderScreen from '../screens/Orders/OrderScreen';
import OrderStatusScreen from "../screens/Orders/OrderStatusScreen";
import LocationScreen from "../screens/Orders/LocationScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      
        <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails}/>
        <Stack.Screen name='ProductList' component={ProductList}/>
        <Stack.Screen name='SearchResult' component={SearchResult}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        <Stack.Screen name='CheckOut' component={CheckOut}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name='OtpScreen' component={OtpScreen} />
        <Stack.Screen name='OrderSuccessScreen' component={OrderSuccessScreen} />
        <Stack.Screen name='OrderScreen' component={OrderScreen} />
        <Stack.Screen name='OrderDetails' component={OrderDetails} />
        <Stack.Screen name='OrderStatusScreen' component={OrderStatusScreen} />
        <Stack.Screen name='LocationScreen' component={LocationScreen} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})