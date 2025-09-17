import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import screens
import Home from "../screens/Home/HomeScreen";
import Categories from "../screens/Home/CategoryScreen";
import Favourite from "../screens/Home/FavouriteScreen";
import Search from "../screens/Home/SearchScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Favourite") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return (
            // <Ionicons
            //   name={iconName}
            //   size={focused ? size + 5 : size} // bigger when active
            //   color={focused ? "#ff6347" : "gray"} // highlight active
            // />
   <View
      style={{
        transform: [{ translateY: focused ? -10 : 0 }], // 👈 float up when focused
      }}
    >
      <Ionicons
        name={iconName}
        size={focused ? size + 5 : size} // slightly bigger when active
        color={focused ? "#ff6347" : "gray"}
      />
    </View>
          );
        },

        tabBarActiveTintColor: "#ff6347",

        // ✅ spacing between icon and label
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 4, // moves label closer/farther from icon
        },

        // ✅ style tab bar
        tabBarStyle: {
          backgroundColor: "#e9e4e4ff",
          position: "absolute", // removes background container behind it
          borderTopWidth: 0, // removes default border line
          elevation: 7, // soft shadow on Android
          margin: 25,
          padding:10,
          borderRadius: 20,
          height: 65,
        },

        // optional: shrink clickable area a bit
        tabBarItemStyle: {
          paddingVertical: 7,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}