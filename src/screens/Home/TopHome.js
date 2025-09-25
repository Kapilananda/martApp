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
  { name: "All", icon: "grid-outline", colors: ["#0090c5ff", "#006b92ff"] },
  { name: "Fresh", icon: "leaf-outline", colors: ["#0095cbff", "#006b92ff"] },
  { name: "Snacks", icon: "fast-food-outline", colors: ["#0095cbff", "#006b92ff"] },
  { name: "Beverages", icon: "wine-outline", colors: ["#0095cbff", "#006b92ff"] },
  { name: "Household", icon: "home-outline", colors: ["#0095cbff", "#006b92ff"] },
  { name: "Tech", icon: "phone-portrait-outline", colors: ["#0095cbff", "#006b92ff"] },
];

export default function TopHome({ navigation, onCategorySelect }) {

  const defaultAddress = useSelector((state) => state.address.defaultAddress)
  const cartItems = useSelector((state) => state.cart.cartItems.length);

  console.log(`hello ${defaultAddress}`);

  return (
    <SafeAreaView style={{ backgroundColor: "#F3F4F6" }}>
      <LinearGradient
        colors={["#0097c9ff", "#0097c9ff"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerContainer}
      >
        {/* Top row */}
        <View style={styles.topRow}>

          <View style={{ flexShrink: 1 }}>
            <Text style={styles.deliveryTime}>⏱ 8 mins</Text>
            {defaultAddress && defaultAddress.length > 0 ? (
              <Text style={styles.address} numberOfLines={1}>
                {[
                  // defaultAddress[0].house,
                  defaultAddress[0].street,
                  defaultAddress[0].city,
                  // defaultAddress[0].state,
                  // defaultAddress[0].pincode,
                ]
                  .filter(Boolean) // remove empty or undefined fields
                  .join(", ")}
              </Text>
            ) : (
              <Text style={styles.address} numberOfLines={1}>
                Address is not yet added
              </Text>
            )}

          </View>


          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("ProfileScreen")}>
            <Icon name="person-circle-outline" size={width * 0.12} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search + Cart */}
        <View style={styles.searchRow}>
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => navigation.navigate("SearchScreen", { navigation })}
            activeOpacity={0.7}
          >
            <Icon name="search-outline" size={width * 0.06} color="#6B7280" />
            <Text style={styles.searchText}> Search for Products... </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cartBtn}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("BottomTabNavigation", {
                screen: "Cart",
              })
            }
          >
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
              onPress={() => onCategorySelect(cat.name)}
            >
              <LinearGradient
                colors={cat.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.8, y: 1 }}
                style={styles.catGradient}
              >
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
    marginBottom: 10,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
      android: { elevation: 5 },
    }),
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  deliveryTime: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#fff",
  },
  address: {
    fontSize: width * 0.035,
    color: "#e6f0ff",
    maxWidth: width * 0.65,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.035,
    height: height * 0.055,
  },
  searchText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.036,
    color: "#6B7280",
  },
  cartBtn: {
    marginLeft: width * 0.03,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#fff",
    borderRadius: 12,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    top: -2,
    color: "#007ad0ff",
    fontSize: 15,
    fontWeight: "bold",
  },
  categoryRow: { marginTop: height * 0.01 },
  catBtn: { marginRight: width * 0.025 },
  catGradient: {
    flexDirection: "row",
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.037,
    alignItems: "center",
    paddingVertical: height * 0.015,
    elevation: 7,
    shadowColor: "#fff"
    // borderWidth:0.5,
    // borderColor:"#fff",


  },
  catText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.036,
    fontWeight: "600",
    color: "#fff",
  },
});
