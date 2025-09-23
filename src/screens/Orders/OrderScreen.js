import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Ionicons";
import OrderStatusScreen from "./OrderStatusScreen";

const { width } = Dimensions.get("window");

export default function MyOrdersScreen({ navigation }) {
    const currentOrders = useSelector((state) => state.orders?.currentOrders || []);
    const recentOrders = useSelector((state) => state.recentOrders?.recentOrders || []);

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "orders", title: "Orders" },
        { key: "recent", title: "Recent Orders" },
    ]);

    const renderRecentOrderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.orderCard}
            onPress={() => {console.log(`${item.id} in screen `),navigation.navigate("OrderDetails", { orderId: item.id })}}
        >
            
            <Text style={{ position: "absolute", top: 7, left: 15 }}>Delivered,{item.date}</Text>
            {/* Images */}
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
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

            {/* Order Info */}
            <View style={{ flex: 1, marginLeft: 20 }}>
                <Text style={styles.orderTitle}>{item.category || "No Category"}</Text>
                <Text style={styles.orderSubtitle}>
                    {item?.items?.length || 0} item(s)
                </Text>
                {item.status === "Shipped" && item.deliveryOtp && (
                    <Text style={styles.orderOtp}>Delivery OTP: {item.deliveryOtp}</Text>
                )}
            </View>

            {/* Status + Arrow */}
            <View style={{ alignItems: "flex-end" }}>
                <Text
                    style={[
                        styles.orderStatus,
                        item.status === "Delivered" ? styles.delivered : styles.shipped,
                    ]}
                >
                    {item.status || "Pending"}
                </Text>
                <Icon
                    name="chevron-forward"
                    size={20}
                    color="#333"
                    style={{ marginTop: 6 }}
                />
            </View>
        </TouchableOpacity>
    );

    // 🔹 Render Order Item
    const renderOrderItem = ({ item }) => (
        <View style={{ height: "100%", elevation: 10, backgroundColor: "#fff", margin: 5, marginHorizontal: 8, borderRadius: 20 }}>
            <View style={{ padding: 20, paddingBottom: -10,flexDirection:"row" }}>
                <Text style={{ fontSize: 19, fontWeight: 600, color: "rgba(11, 136, 0, 1)" }}>
                    {item.status}
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "normal", }}>  Arriving at {item.date}</Text>
                </Text>
                <TouchableOpacity  onPress={() => navigation.navigate("OrderDetails", { orderId: item.id })}>
                    <Text style={{ left: 140, fontSize: 25 }}>
                        &gt;
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: 20, elevation: 5 }}>
                    {item?.items && item.items.length > 0 ? (
                        item.items.slice(0, 1).map((i, idx) => (
                            <Image
                                key={idx}
                                source={{ uri: i.image || "https://via.placeholder.com/50" }}
                                style={{ resizeMode: "center", borderWidth: 0, borderColor: "black", height: 50, width: 50, }}
                            />
                        ))
                    ) : (
                        <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={{ backgroundColor: "black", borderWidth: 2 }}
                        />
                    )}
                </View >
                <View style={{ margin: 20 }}>
                    <Text style={styles.orderTitle}>{item.category || "No Category"}</Text>
                    <Text style={styles.orderSubtitle}>
                        {item?.items?.length || 0} item(s)
                    </Text>
                    {item.status === "Shipped" && item.deliveryOtp && (
                        <Text style={styles.orderOtp}>Delivery OTP: {item.deliveryOtp}</Text>
                    )}
                </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", margin: 7 }}>
                <Text style={{ backgroundColor: "#89daffff", borderRadius: 20, padding: 10, width: "80%", alignItems:"center"}}>Delivery OTP:
                    <Text style={{alignItems:"center",paddingRight:10}}>
                        {item.deliveryOtp}
                    </Text>
                </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", }}>
                <TouchableOpacity
                    onPress={ () => {navigation.navigate("OrderStatusScreen")}}
                     style={{ width: "90%", alignItems: "center", borderWidth: 1, borderRadius: 20, borderColor: "#89daffff", padding: 10, }}>
                    <Text style={{color:"#3477ffff"}}>
                        Track this Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );




    const OrdersRoute = () => (
        <FlatList
            data={currentOrders}
            keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
            renderItem={renderOrderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={
                <Text style={styles.emptyText}>No current orders</Text>
            }
        />
    );

    const RecentRoute = () => (
        <FlatList
            data={recentOrders}
            keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
            renderItem={renderRecentOrderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={
                <Text style={styles.emptyText}>No recent orders</Text>
            }
        />
    );

    const renderScene = SceneMap({
        orders: OrdersRoute,
        recent: RecentRoute,
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Orders</Text>
                <View style={{ width: 24 }} /> {/* placeholder for alignment */}
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width }}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: "#2f855a", height: 3 }}
                        style={{ backgroundColor: "#fff" }}
                        labelStyle={{ color: "#333", fontWeight: "600" }}
                        activeColor="#2f855a"
                        inactiveColor="#888"
                    />
                )}
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

    orderCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        margin: 8,
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
    },
    orderImage: { width: 50, height: 50, borderRadius: 8, marginRight: 4 },
    orderTitle: { fontSize: 14, fontWeight: "600", color: "#333" },
    orderSubtitle: { fontSize: 12, color: "#555", marginTop: 2 },
    orderOtp: { fontSize: 12, color: "#2f855a", marginTop: 2 },
    orderStatus: {
        fontSize: 12,
        fontWeight: "600",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginLeft: 6,
    },
    shipped: { backgroundColor: "#d1fae5", color: "#065f46" },
    delivered: { backgroundColor: "#e0e0e0", color: "#333" },
    emptyText: {
        textAlign: "center",
        marginTop: 40,
        fontSize: 14,
        color: "#777",
    },
    orderCard: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 12,
        marginHorizontal: 16,
        marginVertical: 6,
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        alignItems: "center",
    },
    imageGroup: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    orderImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: -10, // overlap look
        backgroundColor: "#f2f2f2",
        borderWidth: 1,
        borderColor: "#fff",
    },
    moreBadge: {
        backgroundColor: "#2f855a",
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -8,
    },
    moreText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
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
});
