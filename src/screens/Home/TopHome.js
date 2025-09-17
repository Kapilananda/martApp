import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const categories = [
  { name: "All", icon: "grid-outline", colors: ["#ff9a9e", "#fad0c4"] },
  { name: "Fresh", icon: "leaf-outline", colors: ["#a8e063", "#56ab2f"] },
  { name: "Snacks", icon: "fast-food-outline", colors: ["#ff9966", "#ff5e62"] },
  { name: "Beverages", icon: "wine-outline", colors: ["#36d1dc", "#5b86e5"] },
  { name: "Household", icon: "home-outline", colors: ["#f7971e", "#ffd200"] },
  { name: "Tech", icon: "phone-portrait-outline", colors: ["#7f00ff", "#e100ff"] },
];

export default function EcommerceHeader() {
  return (
    <LinearGradient
      colors={["#00b09b", "#96c93dff","#96c93d"]} // teal-blue gradient
      style={styles.headerContainer}
    >
      {/* Top row - delivery info + profile */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.deliveryTime}>8 mins</Text>
          <Text style={styles.address} numberOfLines={1}>
            Padmavathi Nagar, Tirupati
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search + Cart */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search-outline" size={20} color="#888" />
          <TextInput
            placeholder="Search for products"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TouchableOpacity>
            <Icon name="mic-outline" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Cart with badge */}
        <TouchableOpacity style={styles.cartBtn}>
          <Icon name="cart-outline" size={30} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Categories scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryRow}
      >
        {categories.map((cat) => (
          <TouchableOpacity key={cat.name} style={styles.catBtn}>
            <LinearGradient
              colors={cat.colors}
              style={styles.catGradient}
            >
              <Icon name={cat.icon} size={18} color="#fff" />
              <Text style={styles.catText}>{cat.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: width * 0.58,
    paddingTop: 40,
    paddingHorizontal: 12,
    paddingBottom: 10,
    elevation: 5,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  address: {
    fontSize: 13,
    color: "#e6f0ff",
    maxWidth: width * 0.65,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 14,
    height: 44,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    color: "#000",
  },
  cartBtn: {
    marginLeft: 12,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#e53935",
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  categoryRow: {
    marginTop: 6,
  },
  catBtn: {
    marginRight: 12,
  },
  catGradient: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  catText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
});
