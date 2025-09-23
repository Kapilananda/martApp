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
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

export default function OrderStatusScreen({ navigation }) {
  // ✅ Get first order automatically
  const order = useSelector((state) =>
    state.orders.currentOrders.length > 0
      ? state.orders.currentOrders[0]
      : null
  );

  if (!order) {
    return (
      <SafeAreaView style={[styles.centered, { justifyContent: "center" }]}>
        <Text>No order found</Text>
      </SafeAreaView>
    );
  }

  // ✅ Steps definition
  const steps = [
    { key: "processed", label: "Order Processed", icon: "clipboard-outline" },
    { key: "shipped", label: "Order Shipped", icon: "cube-outline" },
    { key: "enroute", label: "Order En Route", icon: "car-outline" },
    { key: "arrived", label: "Order Arrived", icon: "home-outline" },
  ];

  // ✅ derive activeIndex
  const statusKey = order.status?.toLowerCase();
  const activeIndex = steps.findIndex((s) => s.key === statusKey);

  // ✅ total price
  const totalPrice = order.items.reduce((sum, i) => sum + i.price, 0);

  // ✅ render product row
  const renderProduct = ({ item }) => (
    <View style={styles.productRow}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f4f0" }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order #{order.id}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Order Status Card */}
      <View style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <Text style={styles.orderId}>ORDER #{order.id}</Text>
          <View>
            <Text style={styles.arrival}>
              Expected Arrival {order.expectedDate || "—"}
            </Text>
            <Text style={styles.tracking}>
              USPS {order.trackingId || "—"}
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
              style={{ flex: 1, alignItems: index === 0 ? "flex-start" : index === steps.length - 1 ? "flex-end" : "center" }}
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
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>₹{totalPrice}</Text>
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
    backgroundColor: "#2f855a",
    padding: 16,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "700" },

  statusCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
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
  circleActive: { backgroundColor: "#2f855a" },
  line: {
    flex: 1,
    height: 4,
    backgroundColor: "#ccc",
  },
  lineActive: { backgroundColor: "#2f855a" },

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
  productImage: { width: 60, height: 60, borderRadius: 8, marginRight: 10,resizeMode:"center" },
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
});
