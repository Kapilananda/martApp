import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ProductCard({ item, navigation }) {
  return (
    <View style={styles.card}>
      {/* Product Image + Add Button */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log("Add to cart:", item.title)}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Weight */}
      <Text style={styles.weight}>{item.weight || "500 g"}</Text>

      {/* Delivery time + Rating */}
      <View style={styles.row}>
        <Text style={styles.delivery}>8 MINS</Text>
        <Text style={styles.rating}>
          ⭐ {item.rating?.rate?.toFixed(1) || 4.5} ({item.rating?.count || 200})
        </Text>
      </View>

      {/* Title */}
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>

      {/* Subtitle */}
      <Text numberOfLines={1} style={styles.subtitle}>No Added Sugar</Text>

      {/* Discount + Price */}
      <View style={styles.row}>
        <Text style={styles.discount}>{item.discount || "14% OFF"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.price}>₹{item.price || 336}</Text>
        <Text style={styles.mrp}>₹{item.mrp || 395}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    padding: 10,
    width: (width - 48) / 2, // Adjust for 2-column grid with margin
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  addButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  addText: {
    fontSize: 20,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  weight: { fontSize: 12, color: "gray", marginTop: 5 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 2,
  },
  delivery: { fontSize: 12, color: "gray" },
  rating: { fontSize: 12, color: "green", fontWeight: "bold" },
  title: { fontSize: 13, fontWeight: "bold", marginTop: 4 },
  subtitle: { fontSize: 11, color: "gray" },
  discount: { fontSize: 12, color: "green", fontWeight: "bold", marginTop: 4 },
  price: { fontSize: 14, fontWeight: "bold" },
  mrp: { fontSize: 12, color: "gray", textDecorationLine: "line-through", marginLeft: 5 },
});
