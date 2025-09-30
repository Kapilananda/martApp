import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import Toast from 'react-native-simple-toast';
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../store/slice/CartSlice"; // adjust import

const { width } = Dimensions.get("window");

export default function SwipeCards({ item, navigation }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItem = cartItems.find((i) => i.id === item.id);

  const navigateToProductDetails = () => {
    navigation.navigate("ProductDetails", { item });
  };

  return (
    <View style={styles.card}>
      {/* --- Product Image --- */}
      <TouchableOpacity onPress={navigateToProductDetails} activeOpacity={0.9}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </TouchableOpacity>

      {/* --- Title --- */}
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      {/* --- Price Section --- */}
      <View style={styles.priceRow}>
        {item.discountPercent ? (
          <>
            <Text style={styles.discountPrice}>₹{item.discountedPrice}</Text>
            <Text style={styles.originalPrice}>₹ {item.price.toFixed(2)}</Text>
            <Text style={styles.discountTag}>-{item.discountPercent}%</Text>
          </>
        ) : (
          <Text style={styles.discountPrice}>₹{item.price.toFixed(2)}</Text>
        )}
      </View>

      {/* --- Cart Actions --- */}
      <View style={styles.footer}>
        {!cartItem ? (
          <LinearGradient
            colors={["#0095cbff", "#007ac0ff"]}
            style={styles.cartBtnGradient}
          >
            <TouchableOpacity
              style={styles.cartBtn}
              // onPress={() => dispatch(addToCart(item),Toast.showWithGravity("Added to Cart..!", Toast.SHORT, Toast.CENTER))}
              onPress={() => {
                   dispatch(addToCart(item)); // update cart
                  Toast.showWithGravity("Added to Cart..!", Toast.SHORT, Toast.CENTER); // show toast
              }}

              activeOpacity={0.8}
            >
              <Text style={styles.cartBtnText}>Add</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => dispatch(decreaseQty(item.id))}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>{cartItem.quantity}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => dispatch(increaseQty(item.id))}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: (width - 40) / 1.8,
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 8,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  imageWrapper: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    minHeight: 35,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  discountPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2E7D32",
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 13,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 6,
  },
  discountTag: {
    fontSize: 12,
    color: "#E53935",
    fontWeight: "700",
    backgroundColor: "#FFE5E5",
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartBtnGradient: {
    borderRadius: 20,
    padding: 2,
    // top:-20
    // width:"100%",
  },
  cartBtn: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBtnText: {
    fontSize: 15,
    fontWeight:700,
    fontWeight: "bold",
    color: "#004268ff",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"center",
    backgroundColor: "#def5ffff",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    // width:"100%",
  },
  qtyBtn: {
    backgroundColor: "#0069a5ff",
    borderRadius: 15,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  qtyNumber: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
