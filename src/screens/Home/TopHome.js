import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const categories = [
  { name: "All", icon: "grid-outline", colors: ["#ff9a9e", "#fad0c4"] },
  { name: "Fresh", icon: "leaf-outline", colors: ["#a8e063", "#56ab2f"] },
  { name: "Snacks", icon: "fast-food-outline", colors: ["#ff9966", "#ff5e62"] },
  { name: "Beverages", icon: "wine-outline", colors: ["#36d1dc", "#5b86e5"] },
  { name: "Household", icon: "home-outline", colors: ["#f7971e", "#ffd200"] },
  { name: "Tech", icon: "phone-portrait-outline", colors: ["#7f00ff", "#e100ff"] },
];

export default function TopHome({ navigation, onCategorySelect }) {
  const cartItems = useSelector((state) => state.cart.cartItems.length);

  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#00b09b", "#96c93d"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerContainer}
      >
        {/* Top row */}
        <View style={styles.topRow}>
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.deliveryTime}>⏱ 8 mins</Text>
            <Text style={styles.address} numberOfLines={1}>
              Padmavathi Nagar, Tirupati
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("ProfileScreen")}>
            <Icon name="person-circle-outline" size={width * 0.12} color="#d7eaffff" />
          </TouchableOpacity>
        </View>

        {/* Search + Cart */}
        <View style={styles.searchRow}>
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => navigation.navigate("SearchScreen", { navigation })}
            activeOpacity={0.7}
          >
            <Icon name="search-outline" size={width * 0.06} color="#888" />
            <Text style={styles.searchText}> Search for Products... </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartBtn} activeOpacity={0.8}>
            <Icon name="cart-outline" size={width * 0.1} color="#fff" />
            {cartItems > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItems}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Categories scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
          contentContainerStyle={{ paddingBottom: 6 }}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              activeOpacity={0.8}
              style={styles.catBtn}
              onPress={() => onCategorySelect(cat.name)}   // 🔹 pass clicked category
            >
              <LinearGradient colors={cat.colors} style={styles.catGradient}>
                <Icon name={cat.icon} size={width * 0.05} color="#fff" />
                <Text style={styles.catText}>{cat.name}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: height * 0.03,
    paddingHorizontal: width * 0.035,
    paddingBottom: height * 0.02,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
      android: { elevation: 5 },
    }),
  },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: height * 0.02 },
  deliveryTime: { fontSize: width * 0.045, fontWeight: "bold", color: "#fff" },
  address: { fontSize: width * 0.035, color: "#e6f0ff", maxWidth: width * 0.65 },
  searchRow: { flexDirection: "row", alignItems: "center", marginBottom: height * 0.02 },
  searchBox: {
    flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "#fff",
    borderRadius: width * 0.06, paddingHorizontal: width * 0.035, height: height * 0.055,
  },
  searchText: { marginLeft: width * 0.02, fontSize: width * 0.036, color: "#888" },
  cartBtn: { marginLeft: width * 0.03, position: "relative", justifyContent: "center", alignItems: "center" },
  badge: { position: "absolute", top: -5, right: -5, backgroundColor: "#E53935", borderRadius: 12, minWidth: 18, height: 18, alignItems: "center", justifyContent: "center", paddingHorizontal: 3 },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
  categoryRow: { marginTop: height * 0.01 },
  catBtn: { marginRight: width * 0.025 },
  catGradient: { flexDirection: "row", alignItems: "center", borderRadius: width * 0.06, paddingHorizontal: width * 0.035, paddingVertical: height * 0.012 },
  catText: { marginLeft: width * 0.02, fontSize: width * 0.036, fontWeight: "600", color: "#fff" },
});
