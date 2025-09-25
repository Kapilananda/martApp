import React, { useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { addToCart } from "../../store/slice/CartSlice"; // for reorder
import { ToastAndroid } from "react-native";

export default function OrderDetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { orderId } = route.params;
  // console.log(`${orderId} hello`);

  // Get the order from recentOrdersSlice
  const recentOrders = useSelector(
    (state) => state.orders?.recentOrders || []
  );

  const order = recentOrders.find((o) => o.id === orderId);
  // const order = recentOrders.find((o) => o.id === "d1");

  // Calculate total price
  const totalPrice = useMemo(() => {
    if (!order) return 0;
    return order.items
      .reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0)
      .toFixed(2);
  }, [order]);

  // Handle reorder → adds all items to cart
  const handleReorder = () => {
    if (!order) return;
    order.items.forEach((item) => {
      dispatch(addToCart({ ...item, quantity: item.quantity ?? 1 }));
    });
    navigation.navigate("BottomTabNavigation" , {
      screen : "Cart"
    });
  };

  // Add single item to cart
  const handleAddItem = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    ToastAndroid.showWithGravity("Added to Cart..!", ToastAndroid.SHORT, ToastAndroid.CENTER)
  };

  // Render single product row
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImg} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productQuantity}>Qty: {item.quantity ?? 1}</Text>
        <Text style={styles.productPrice}>
          ₹{(item.price * (item.quantity ?? 1)).toFixed(2)}
        </Text>
      </View>
      {/* Add to cart button */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => handleAddItem(item)}
      >
        <Icon name="cart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  if (!order) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order Details</Text>
          <View style={{ width: 24 }} />
        </View>
        <Text style={styles.emptyText}>Order not found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <TouchableOpacity onPress={() => navigation.navigate("BottomTabNavigation" , {
          screen:"Cart"
        })}>
          <Icon name="cart-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Order Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>{order.category}</Text>
          <Text style={styles.summaryText}>Date: {order.date}</Text>
          <Text style={styles.summaryText}>Status: {order.status}</Text>
          {order.deliveryOtp && (
            <Text style={styles.summaryOtp}>Delivery OTP: {order.deliveryOtp}</Text>
          )}
        </View>

        {/* Product list */}
        <FlatList
          data={order.items}
          renderItem={renderItem}
          keyExtractor={(item, idx) => item.id + idx}
          style={styles.list}
          scrollEnabled={false}
        />

        {/* Total price */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>₹{totalPrice}</Text>
        </View>

        {/* Reorder button */}
        <TouchableOpacity style={styles.reorderBtn} onPress={handleReorder}>
          <Text style={styles.reorderText}>Reorder All Items</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007ba8ff",
    padding: 16,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "700" },

  summaryCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  summaryTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  summaryText: { fontSize: 14, color: "#555", marginBottom: 4 },
  summaryOtp: {
    fontSize: 14,
    color: "#FF6D00",
    fontWeight: "600",
    marginTop: 6,
  },

  list: { marginHorizontal: 16, marginBottom: 20 },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  productImg: { width: 60, height: 60, borderRadius: 8, marginRight: 12,resizeMode:"center" },
  productDetails: { flex: 1 },
  productTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
  productQuantity: { fontSize: 14, color: "#777", marginTop: 4 },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 6,
  },

  addBtn: {
    backgroundColor: "#007ba8ff",
    padding: 8,
    borderRadius: 8,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 20,
  },
  totalText: { fontSize: 18, fontWeight: "600", color: "#333" },
  totalAmount: { fontSize: 18, fontWeight: "bold", color: "#4CAF50" },

  reorderBtn: {
    backgroundColor: "#f17800ff",
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },
  reorderText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  emptyText: { fontSize: 16, color: "#777", textAlign: "center", marginTop: 40 },
});
