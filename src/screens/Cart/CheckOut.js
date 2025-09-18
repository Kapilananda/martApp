import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/slice/CartSlice";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    Alert.alert("✅ Order Confirmed", "Your order has been placed successfully!");
    dispatch(clearCart());
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.itemRow}>
          <Text style={styles.itemText}>
            {item.title} × {item.quantity}
          </Text>
          <Text style={styles.itemText}>₹ {(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      ))}

      <View style={styles.totalRow}>
        <Text style={styles.total}>Total: ₹ {totalPrice.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.placeBtn} onPress={handlePlaceOrder}>
        <Text style={styles.placeText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  itemRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  itemText: { fontSize: 16 },
  totalRow: { marginVertical: 20, borderTopWidth: 1, paddingTop: 10, borderColor: "#ddd" },
  total: { fontSize: 18, fontWeight: "700" },
  placeBtn: { backgroundColor: "#2f855a", paddingVertical: 14, borderRadius: 8, alignItems: "center" },
  placeText: { fontSize: 16, fontWeight: "600", color: "#fff" },
});
