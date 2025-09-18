import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../store/slice/CartSlice";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

export default function CartScreen({ navigation }) {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>
          ₹ {(item.price * item.quantity).toFixed(2)}
        </Text>

        <View style={styles.qtyRow}>
          <TouchableOpacity onPress={() => dispatch(decreaseQty(item.id))}>
            <Text style={styles.qtyBtn}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(increaseQty(item.id))}>
            <Text style={styles.qtyBtn}>＋</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
        <Text style={styles.remove}>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>🛒 My Cart</Text>

      {cartItems.length === 0 ? (
        <View style={{ flex: 1,justifyContent: "center",alignItems: "center",paddingHorizontal: 20,}}>
          <Ionicons name="cart-outline" size={64} color="#ccc" />
          <Text style={{fontSize: 18,fontWeight: "600",marginTop: 12,color: "#555",}}>Nothing in Cart yet</Text>
          <Text style={ {fontSize: 14,color: "#888",marginTop: 4,textAlign: "center",}}>
            Browse products and tap the 🛒 to add them here.
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(i) => i.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 160 }}
          />

          {/* Checkout Panel */}
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalPrice}>₹ {totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginVertical: 15,
  },
  empty: { textAlign: "center", marginTop: 40, fontSize: 16, color: "#666" },

  // cart item card
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  image: { width: 70, height: 70, resizeMode: "contain" },
  info: { flex: 1, marginLeft: 10 },
  title: { fontSize: 14, fontWeight: "600" },
  price: { fontSize: 14, color: "#2f855a", marginTop: 4 },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  qtyBtn: { fontSize: 20, paddingHorizontal: 12, color: "#2f855a" },
  qtyText: { fontSize: 16, marginHorizontal: 8 },
  remove: { fontSize: 18, color: "red" },

  // checkout panel
  footer: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 82, // adjust for Bottom Tabs if needed
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 16,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  footerLeft: {
    flexDirection: "column",
  },
  totalLabel: { fontSize: 14, color: "#888" },
  totalPrice: { fontSize: 20, fontWeight: "700", color: "#2f855a" },
  checkoutBtn: {
    backgroundColor: "#2f855a",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
