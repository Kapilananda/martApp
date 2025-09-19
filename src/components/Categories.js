import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import ProductList from '../screens/Home/ProductList';

const { width } = Dimensions.get("window");

export default function Categories({ item,products, navigation,favorites,dispatch }) {

  
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate("ProductList",{products,favorites,dispatch})}>

        <Image
          source={{ uri: item.image }}
          style={styles.img}
        />
        <Text numberOfLines={1} style={styles.label}>
          {String(item.title)}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.18,   // 🔹 each item ~22% of screen width (fits 4 per row with spacing)
    height: width * 0.3,   // 🔹 each item ~22% of screen width (fits 4 per row with spacing)
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: width * 0.18,   // 🔹 image ~18% of screen width
    height: width * 0.18,  // 🔹 square image
    // borderRadius: (width * 0.18) / 2, // 🔹 circular style
    borderRadius: 20,
    elevation: 2,
    resizeMode: "contain",
    backgroundColor: "#f5f5f5",
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    textAlign: "center",
  }
});