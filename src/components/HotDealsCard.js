import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function HotDealsCard({ item, navigation }) {
  return (
    <View style={styles.product}>
      {/* Product Image */}
      <View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { product: item })}
      >

        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>

      {/* Product Title */}
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      </View>

      {/* Footer with Price & Button */}
      <View style={styles.footer}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { }}
        >
          <Text style={styles.viewButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15,
    padding: 12,
    alignItems: "center",
    elevation: 6,  // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    width: width * 0.44,  // ~2 cards per row
    minHeight: height * 0.28,
  },
  image: {
    width: "85%",
    height: height * 0.14,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    color: "#333",
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: "100%",
    marginTop: "auto",  // pushes footer to bottom
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32", // dark green
  },
  viewButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  btn: {
    backgroundColor: '#4CAF50', // primary green
    borderRadius: 25,
    width: 40,
    height: 40,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  }
});
