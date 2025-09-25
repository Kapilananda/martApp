import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { markOrderDelivered, cancelOrder } from "../../store/slice/OrdersSlice";
import { ToastAndroid } from "react-native";

export default function OrderStatusScreen({ route, navigation }) {
  const { orderId } = route.params;
  console.log(orderId);

  const dispatch = useDispatch();

  // ✅ Get both current & recent orders
  const currentOrders = useSelector((state) => state.orders.currentOrders);
  const recentOrders = useSelector((state) => state.orders.recentOrders);

  // ✅ Try to find order in currentOrders first, else fallback to recentOrders
  const order =
    currentOrders.find((o) => o.id === orderId) ||
    recentOrders.find((o) => o.id === orderId);

  // console.log(order);
  if (!order) {
    // Prevent rendering anything until the order is ready
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading order details...</Text>
      </SafeAreaView>
    );
  }


  // if (!order) {
  //   return (
  //     <>
  //       <View style={styles.header}>
  //         <TouchableOpacity onPress={() => navigation.goBack()}>
  //           <Icon name="chevron-back" size={24} color="#fff" />
  //         </TouchableOpacity>
  //         <Text style={styles.headerTitle}>Order #{order.id.toString().slice(0, 4)}</Text>
  //         <View style={{ width: 24 }} />
  //       </View>
  //       <SafeAreaView style={[styles.centered, { justifyContent: "center" }]}>
  //         <Text>No order found</Text>
  //       </SafeAreaView>
  //     </>
  //   );
  // }

  //______________________________________________________
  const Row = ({ label, value, rightContent }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueWrapper}>
        <Text style={styles.value}>{value}</Text>
        {rightContent}
      </View>
    </View>
  );
  //______________________________________________________

  // ✅ Steps definition
  const steps = [
    { key: "processed", label: "Order Processed", icon: "clipboard-outline" },
    { key: "shipped", label: "Order Shipped", icon: "cube-outline" },
    { key: "enroute", label: "Order En Route", icon: "car-outline" },
    { key: "delivered", label: "Order Delivered", icon: "home-outline" },
  ];

  // ✅ derive activeIndex
  console.log(`hello this is ${order.status}`);

  const statusKey = order.status?.toLowerCase();

  const activeIndex = steps.findIndex((s) => s.key === statusKey);

  // ✅ total price
  const totalPrice = order.items.reduce((sum, i) => sum + i.price, 0);

  // ✅ render product row
  const renderProduct = ({ item }) => (
    <View style={styles.productRow}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef9ffff" }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Order Status Card */}
      <View style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <Text style={styles.orderId}>ORDER #{order.id.toString().slice(0, 4)}</Text>
          <View>
            <Text style={styles.arrival}>
              Expected Arrival {order.expectedDate || "— Ex:21 Sep"}
            </Text>
            <Text style={styles.tracking}>
              USPS {order.trackingId || "—TrackId"}
            </Text>
          </View>
        </View>

        {/* Progress Line */}
        <View style={styles.progressContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={step.key}>
              <View
                style={[
                  styles.circle,
                  index <= activeIndex && styles.circleActive,
                ]}
              >
                <Icon
                  name={index <= activeIndex ? "checkmark" : step.icon}
                  size={16}
                  color="#fff"
                />
              </View>
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    index < activeIndex && styles.lineActive,
                  ]}
                />
              )}
            </React.Fragment>
          ))}
        </View>

        {/* Labels */}
        <View style={styles.labelsContainer}>
          {steps.map((step, index) => (
            <View
              style={{
                flex: 1,
                alignItems:
                  index === 0
                    ? "flex-start"
                    : index === steps.length - 1
                      ? "flex-end"
                      : "center",
              }}
              key={step.key}
            >
              <Text style={styles.label}>{step.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Products */}
      <FlatList
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Order Items</Text>
        }
        data={order.items}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={renderProduct}
        ListFooterComponent={
          <View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#222", marginBottom: 16, }}>Order Details</Text>
              <Row label="Name" value={order.address.fullName} />
              <Row label="Order Number" value={order.id} />
              <Row label="Shipment Number" value={order.shipmentNo} />
              <Row label="Order Date" value={order.date} />
              <Row label="Product Total" value={totalPrice} />

              {/* Delivery Fee with Free + Strikethrough */}
              <View style={styles.row}>
                <Text style={styles.label}>Delivery Fee</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.free}>FREE</Text>
                  <Text style={styles.strike}>{order.deliveryFeeOriginal}</Text>
                </View>
              </View>

              <Row label="Order Amount" value={totalPrice} />

              {/* Invoice Row with download icon */}
              <Row
                label="Invoice Number"
                value={order.invoiceNumber}
                rightContent={
                  <TouchableOpacity>
                    <Icon name="download-outline" size={20} color="#333" style={{ marginLeft: 8 }} />
                  </TouchableOpacity>
                }
              />

              <Row label="Invoice Amount" value={order.invoiceAmount} />
              <Row label="Payment Mode" value={order.paymentMethod} />
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalPrice}>₹{totalPrice}</Text>
            </View>

            {/* Action Buttons */}
            {currentOrders.some((o) => o.id === order.id) && (
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  onPress={() => dispatch(markOrderDelivered(order.id))}
                  style={styles.deliverBtn}
                >
                  <Text style={styles.btnText}>Mark as Delivered</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(cancelOrder(order.id));
                    navigation.navigate("OrderScreen");
                    ToastAndroid.showWithGravity(
                      "Order has been Cancelled",
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER
                    );
                  }}
                  style={styles.cancelBtn}
                >
                  <Text style={styles.btnText}>Cancel Order</Text>
                </TouchableOpacity>

              </View>
            )}
          </View>
        }
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007ba8ff",
    padding: 16,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "700" },

  statusCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 5,
  },
  statusHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  orderId: { fontWeight: "700", fontSize: 15, color: "#333" },
  arrival: { fontSize: 12, color: "#666" },
  tracking: { fontSize: 12, fontWeight: "600", color: "#333" },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  circleActive: { backgroundColor: "#0079c0ff" },
  line: { flex: 1, height: 4, backgroundColor: "#ccc" },
  lineActive: { backgroundColor: "#0078bdff" },

  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  label: {
    fontSize: 11,
    textAlign: "center",
    color: "#444",
    maxWidth: 70,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 8,
    color: "#333",
    paddingHorizontal: 8,
  },
  productRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    resizeMode: "center",
  },
  productName: { fontSize: 15, fontWeight: "600", color: "#333" },
  productPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "green",
    marginTop: 4,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  totalLabel: { fontSize: 18, fontWeight: "700", color: "#333" },
  totalPrice: { fontSize: 18, fontWeight: "700", color: "green" },

  centered: { flex: 1, justifyContent: "center", alignItems: "center" },

  deliverBtn: {
    backgroundColor: "#2f855a",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelBtn: {
    backgroundColor: "red",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "600" },
  // -------------------------------------------
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  valueWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  free: {
    color: "green",
    fontWeight: "700",
    marginRight: 6,
  },
  strike: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
  },
});
