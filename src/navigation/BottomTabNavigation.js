

import React, { useState } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home/HomeScreen";
import Categories from "../screens/Home/CategoryScreen";
import Favourite from "../screens/Home/FavouriteScreen";
import Search from "../screens/Home/SearchScreen";
import Cart from "../screens/Cart/CartScreen"

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const [isFloating, setIsFloating] = useState(true);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "Categories") iconName = focused ? "list" : "list-outline";
          else if (route.name === "Cart") iconName = focused ? "cart" : "cart-outline";
          else if (route.name === "Favourite") iconName = focused ? "heart" : "heart-outline";

          return (
            <View style={{ transform: [{ translateY: focused ? -10 : 0 }] }}>
              <Ionicons
                name={iconName}
                size={focused ? size + 5 : size}
                color={focused ? "#ff6347" : "gray"}
              />
            </View>
          );
        },

        tabBarActiveTintColor: "#ff6347",
        tabBarLabelStyle: { fontSize: 11, marginTop: 4 },

        // ✅ switch between floating and fixed
        tabBarStyle: isFloating
          ? {
              backgroundColor: "#e9e4e4ff",
              position: "absolute",
              borderTopWidth: 0,
              elevation: 7,
              margin: 15,
              padding: 10,
              borderRadius: 20,
              height: 65,
            }
          : {
              backgroundColor: "#e9e4e4ff",
              borderTopWidth: 0,
              elevation: 7,
              height: 65,
            },

        tabBarItemStyle: { paddingVertical: 7 },
      })}
    >
      {/* 👇 Pass setter to Home */}
      <Tab.Screen name="Home" component={Home} initialParams={{ setIsFloating }} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}