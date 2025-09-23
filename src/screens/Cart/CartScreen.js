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
  addToCart,
} from "../../store/slice/CartSlice";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

export default function CartScreen({ navigation }) {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const { recentOrders } = useSelector((state) => state.recentOrders); // ✅ From slice
  const dispatch = useDispatch();

  // 🔹 Render Cart Item
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
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

  // 🔹 Render Recent Order Item
  const renderRecentItem = ({ item }) => (
    <View style={styles.recentCard}>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }} />
      <Image source={{ uri: item.image }} style={styles.recentImage} />
      <Text style={styles.recentTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.recentPrice}>₹ {item.price}</Text>
      <TouchableOpacity
        style={styles.reorderBtn}
        onPress={() => dispatch(addToCart(item))}
      >
        <Text style={styles.reorderText}>Reorder</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{borderBottomColor:"grey",borderBottomWidth:1,justifyContent:"space-between",flexDirection:"row"}}>
      <Text style={styles.heading}>🛒 My Cart</Text>
      <TouchableOpacity
          style={{margin:20,padding:10,backgroundColor:"#f0fdf4",borderRadius:50}} 
          onPress={ () => {navigation.navigate("OrderScreen")}}
        >
        <Text style={{color:"#2f855a",fontWeight:600,}}>Orders</Text>
      </TouchableOpacity>
      </View>

      {/* 🔹 Recent Orders Section */}
      {/* {recentOrders.length > 0 && (
        <View style={styles.recentSection}>
          <Text style={styles.recentHeading}>🛍 Recent Orders</Text>
          <FlatList
            horizontal
            data={recentOrders}
            renderItem={renderRecentItem}
            keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )} */}


      {/* 🔹 Cart Section */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyBox}>
          <Ionicons name="cart-outline" size={64} color="#ccc" />
          <Text style={styles.emptyTitle}>Nothing in Cart yet</Text>
          <Text style={styles.emptyText}>
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
            contentContainerStyle={{ paddingBottom: 200 }}
          />

          {/* Checkout Panel */}
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalPrice}>₹ {totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => navigation.navigate("CheckOut",navigation)}
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
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  heading: { fontSize: 22, fontWeight: "700", padding:7,color: "#333", marginVertical: 15 },

  // Empty Cart
  emptyBox: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  emptyTitle: { fontSize: 18, fontWeight: "600", marginTop: 12, color: "#555" },
  emptyText: { fontSize: 14, color: "#888", marginTop: 4, textAlign: "center" },

  // Cart item
  card: {
    flexDirection: "row", alignItems: "center", marginBottom: 12,
    padding: 12, backgroundColor: "#fafafa", borderRadius: 12, elevation: 2,
  },
  image: { width: 70, height: 70, resizeMode: "contain" },
  info: { flex: 1, marginLeft: 10 },
  title: { fontSize: 14, fontWeight: "600" },
  price: { fontSize: 14, color: "#2f855a", marginTop: 4 },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  qtyBtn: { fontSize: 20, paddingHorizontal: 12, color: "#2f855a" },
  qtyText: { fontSize: 16, marginHorizontal: 8 },
  remove: { fontSize: 18, color: "red" },

  // Checkout
  footer: {
    position: "absolute", left: 16, right: 16, bottom: 10, height: 80,
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    backgroundColor: "#fff", paddingHorizontal: 16, borderRadius: 16, elevation: 10,
  },
  footerLeft: { flexDirection: "column" },
  totalLabel: { fontSize: 14, color: "#888" },
  totalPrice: { fontSize: 20, fontWeight: "700", color: "#2f855a" },
  checkoutBtn: { backgroundColor: "#2f855a", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12 },
  checkoutText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  // Recent Orders
  recentSection: { marginTop: 10, marginBottom: 15 },
  recentHeading: { fontSize: 18, fontWeight: "700", color: "#333", marginBottom: 12 },
  recentCard: {
    width: 140, marginRight: 12, backgroundColor: "#f9f9f9", borderRadius: 12,
    padding: 10, alignItems: "center", elevation: 3,
  },
  recentImage: { width: 90, height: 90, resizeMode: "contain" },
  recentTitle: { fontSize: 13, fontWeight: "600", marginTop: 6, textAlign: "center" },
  recentPrice: { fontSize: 13, color: "#2f855a", marginVertical: 4 },
  reorderBtn: { backgroundColor: "#2f855a", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  reorderText: { color: "#fff", fontSize: 12, fontWeight: "600" },
});

