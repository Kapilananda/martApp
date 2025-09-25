import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import Home from "../screens/Home/HomeScreen";
import Categories from "../screens/Home/CategoryScreen";
import Favourite from "../screens/Home/FavouriteScreen";
import Cart from "../screens/Cart/CartScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  const [isFloating, setIsFloating] = useState(true);

  // ✅ Count of cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems.length);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Categories")
            iconName = focused ? "list" : "list-outline";
          else if (route.name === "Cart")
            iconName = focused ? "cart" : "cart-outline";
          else if (route.name === "Favourite")
            iconName = focused ? "heart" : "heart-outline";

          return (
            <View style={{ alignItems: "center",height:size+10 }}>
              <Ionicons
                name={iconName}
                size={focused ? size + 8 : size}
                color={focused ? "#006d98ff" : "gray"}
                style={{ transform: [{ translateY: focused ? -7 : 0 }] }}
              />

              {/* ✅ Show badge only for Cart */}
              {route.name === "Cart" && cartItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartItems}</Text>
                </View>
              )}
            </View>
          );
        },

        tabBarActiveTintColor: "#006d98ff",
        tabBarLabelStyle: { fontSize: 11, marginTop: 1 },

        // ✅ Floating / Fixed style
        tabBarStyle: isFloating
          ? {
              backgroundColor: "#ffffffff",
              position: "absolute",
              borderTopWidth: 0,
              elevation: 7,
              margin: 0,
              padding: 12,
              borderRadius: 0,
              height: 65,
            }
          : {
              backgroundColor: "#e9e4e4ff",
              borderTopWidth: 0,
              elevation: 7,
              height: 65,
            },

        tabBarItemStyle: { paddingVertical: 8 },
      })}
    >
      {/* 👇 Pass setter to Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ setIsFloating }}
      />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -5,
    right: -7,
    backgroundColor: "#006d98ff",
    borderRadius: 10,
    minWidth: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: { 
    color: "#fff", 
    fontSize: 10, 
    fontWeight: "bold" 
  },
});