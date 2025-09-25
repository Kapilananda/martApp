import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../../store/slice/CartSlice";
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
        <Text style={styles.price}>₹ {(item.price * item.quantity).toFixed(2)}</Text>

        <View style={styles.qtyRow}>
          <TouchableOpacity onPress={() => dispatch(decreaseQty(item.id))} style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(increaseQty(item.id))} style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>＋</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
        <Ionicons name="trash-outline" size={22} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => {
    if (!cartItems.length) return null;
    return (
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>₹ {totalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate("CheckOut")}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>🛒 My Cart</Text>
        <TouchableOpacity
          style={styles.ordersBtn}
          onPress={() => navigation.navigate("OrderScreen")}
        >
          <Text style={styles.ordersBtnText}>Orders</Text>
        </TouchableOpacity>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyBox}>
          <Ionicons name="cart-outline" size={80} color="#d1d5db" />
          <Text style={styles.emptyTitle}>Your Cart is Empty</Text>
          <Text style={styles.emptyText}>Browse products and tap 🛒 to add them here.</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef9ffff", paddingHorizontal: 16 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eaf1ffff",
  },
  heading: { fontSize: 24, fontWeight: "700", color: "#111827" },
  ordersBtn: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#0082b1ff", borderRadius: 50 },
  ordersBtnText: { color: "#ffffffff", fontWeight: "900",fontSize:16 },

  emptyBox: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 },
  emptyTitle: { fontSize: 18, fontWeight: "600", color: "#6B7280", marginTop: 12 },
  emptyText: { fontSize: 14, color: "#9CA3AF", marginTop: 6, textAlign: "center" },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: { width: 80, height: 80, resizeMode: "contain", borderRadius: 10, backgroundColor: "#f9fafb" },
  info: { flex: 1, marginLeft: 12 },
  title: { fontSize: 17, fontWeight: "600", color: "#111827" },
  price: { fontSize: 16, fontWeight: "600", color: "#2f855a", marginTop: 4 },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  qtyBtn: {
    width: width * 0.070,
    height:width * 0.073,
    borderRadius: 16,
    backgroundColor: "#14adffff",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyBtnText: { fontSize: 17, fontWeight: "900", color: "#ffffffff" },
  qtyText: { fontSize: 16, fontWeight: "600", marginHorizontal: 10, color: "#111827" },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 12,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  totalLabel: { fontSize: 14, color: "#6B7280" },
  totalPrice: { fontSize: 20, fontWeight: "700", color: "#111827", marginTop: 4 },
  checkoutBtn: { backgroundColor: "#ffe449ff", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12 },
  checkoutText: { fontSize: 16, fontWeight: "700", color: "#001239ff" },
});
