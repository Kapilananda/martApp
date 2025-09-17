import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

export default function HotDealsCard({ item, navigation }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { item: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>

      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <LinearGradient
          colors={['#FF6D00', '#FFAB40']}
          style={styles.plusBorder}
        >
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => console.log("Add to cart", item.title)}
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: (width - 40) / 2.2,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  plusBorder: {
    borderRadius: 25,
    padding: 2,
  },
  plusButton: {
    backgroundColor: "#fff",
    borderRadius: 22,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF6D00",
  },
});
