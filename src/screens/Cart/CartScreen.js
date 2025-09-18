import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../../store/slice/CartSlice";

export default function CartScreen({ navigation }) {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₹ {(item.price * item.quantity).toFixed(2)}</Text>

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
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty 🛒</Text>
      ) : (
        <>
          <FlatList data={cartItems} keyExtractor={(i) => i.id.toString()} renderItem={renderItem} />

          <View style={styles.footer}>
            <Text style={styles.total}>Total: ₹ {totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkout} onPress={() => navigation.navigate("Checkout")}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  empty: { textAlign: "center", marginTop: 40, fontSize: 16, color: "#666" },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: 70, height: 70, resizeMode: "contain" },
  info: { flex: 1, marginLeft: 10 },
  title: { fontSize: 14, fontWeight: "600" },
  price: { fontSize: 14, color: "#2f855a", marginTop: 4 },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  qtyBtn: { fontSize: 20, paddingHorizontal: 12, color: "#2f855a" },
  qtyText: { fontSize: 16, marginHorizontal: 8 },
  remove: { fontSize: 18, color: "red" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  total: { fontSize: 18, fontWeight: "700" },
  checkout: { backgroundColor: "#2f855a", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  checkoutText: { color: "#fff", fontWeight: "600" },
});
