import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Ionicons";
import OrderStatusScreen from "./OrderStatusScreen";

const { width } = Dimensions.get("window");

export default function MyOrdersScreen({ navigation }) {
  const currentOrders = useSelector((state) => state.orders?.currentOrders || []);
  const recentOrders = useSelector((state) => state.orders?.recentOrders || []);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "orders", title: "Orders" },
    { key: "recent", title: "Recent Orders" },
  ]);

  // 🔹 Render Recent Order
  const renderRecentOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() =>
        navigation.navigate("OrderDetails", { orderId: item.id })
      }
    >
      {/* Delivered Date */}
      <Text
        style={[
          styles.orderStatus,
          item.status === "Delivered" ? styles.delivered : styles.shipped,
          { position: "absolute", top: 7, left: 15, fontSize: 12, }
        ]}
      >
        {item.status || "Pending"},  <Text style={{color:"#4c4c4cff"}}>{item.date}</Text>
      </Text>
      {/* Images */}
      <View style={styles.imageGroup}>
        {item?.items && item.items.length > 0 ? (
          item.items.slice(0, 3).map((i, idx) => (
            <Image
              key={idx}
              source={{ uri: i.image || "https://via.placeholder.com/50" }}
              style={styles.orderImage}
            />
          ))
        ) : (
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.orderImage}
          />
        )}
      </View>

      {/* Info */}
      <View style={styles.infoWrapper}>
        <Text style={styles.orderTitle}>{item.category || "No Category"}</Text>
        <Text style={styles.orderSubtitle}>
          {item?.items?.length || 0} item(s)
        </Text>
        {item.status === "Shipped" && item.deliveryOtp && (
          <Text style={styles.orderOtp}>Delivery OTP: {item.deliveryOtp}</Text>
        )}
      </View>

      {/* Status + Arrow */}
      <View style={styles.statusWrapper}>

        <Icon name="chevron-forward" size={20} color="#333" style={{ marginTop: 6 }} />
      </View>
    </TouchableOpacity>
  );

  // 🔹 Render Current Order
  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.currentOrderCard}
      onPress={() => navigation.navigate("OrderStatusScreen", { orderId: item.id })}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.statusText}>
          {item.status}{" "}
          <Text style={styles.arrivalText}>Arriving at {item.date}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderDetails", { orderId: item.id })}
        >
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Product Preview */}
      <View style={styles.productRow}>
        <View style={styles.productImageWrapper}>
          {item?.items && item.items.length > 0 ? (
            <Image
              source={{ uri: item.items[0].image }}
              style={styles.productImage}
            />
          ) : (
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.productImage}
            />
          )}
        </View>
        <View style={{ marginLeft: 15, justifyContent: "center" }}>
          <Text style={styles.productTitle}>{item.category || "No Category"}</Text>
          <Text style={styles.productSubtitle}>
            {item?.items?.length || 0} item(s)
          </Text>
        </View>
      </View>

      {/* OTP */}
      <View style={styles.otpWrapper}>
        <Text style={styles.otpText}>
          Delivery OTP: {item.deliveryOtp || "N/A"}
        </Text>
      </View>

      {/* Track Order */}
      <TouchableOpacity
        style={styles.trackButton}
        onPress={() => navigation.navigate("OrderStatusScreen", { orderId: item.id })}
      >
        <Text style={styles.trackText}>Track this Order</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const OrdersRoute = () => (
    <FlatList
      data={currentOrders}
      keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
      renderItem={renderOrderItem}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={<Text style={styles.emptyText}>No current orders</Text>}
    />
  );

  const RecentRoute = () => (
    <FlatList
      data={recentOrders}
      keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
      renderItem={renderRecentOrderItem}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={<Text style={styles.emptyText}>No recent orders</Text>}
    />
  );

  const renderScene = SceneMap({
    orders: OrdersRoute,
    recent: RecentRoute,
  });

  return (
    <View style={styles.container} >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BottomTabNavigation", { screen: "Cart" })
          }
        >
          <Icon name="chevron-back" size={27} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 24 }} /> {/* placeholder */}
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#0095cbff", height: 3 }}
            style={{ backgroundColor: "#fff" }}
            labelStyle={{ color: "#333", fontWeight: "600" }}
            activeColor="#0095cbff"
            inactiveColor="#888"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef9ff",
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007ba8",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  // Recent Orders
  orderCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
  },
  // deliveredText: {
  //   position: "absolute",
  //   top: 7,
  //   left: 15,
  //   fontSize: 12,
  //   color: "#555",
  // },
  imageGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 4,
  },
  infoWrapper: {
    flex: 1,
    marginLeft: 20,
  },
  orderTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  orderSubtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  orderOtp: {
    fontSize: 12,
    color: "#2f855a",
    marginTop: 4,
  },
  statusWrapper: {
    alignItems: "flex-end",
  },
  orderStatus: {
    fontSize: 13,
    fontWeight: "700",
  },
  delivered: {
    color: "green",
  },
  shipped: {
    color: "#ff9800",
  },

  // Current Orders
  currentOrderCard: {
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#fff",
    elevation: 4,
    padding: 15,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "600",
    color: "green",
  },
  arrivalText: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
  },
  arrow: {
    fontSize: 22,
    color: "#444",
  },
  productRow: {
    flexDirection: "row",
    marginTop: 15,
  },
  productImageWrapper: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  productImage: {
    height: 50,
    width: 50,
    borderRadius: 8,
    resizeMode: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  productSubtitle: {
    fontSize: 14,
    color: "#555",
  },
  otpWrapper: {
    alignItems: "center",
    margin: 5,
  },
  otpText: {
    backgroundColor: "#E3F2FD",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#1565C0",
  },
  trackButton: {
    marginTop: 8,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#1565C0",
    paddingVertical: 10,
  },
  trackText: {
    color: "#1565C0",
    fontSize: 15,
    fontWeight: "600",
  },

  // Empty
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
    color: "#777",
  },
});
