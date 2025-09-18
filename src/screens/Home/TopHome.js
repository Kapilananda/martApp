import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

const categories = [
  { name: "All", icon: "grid-outline", colors: ["#ff9a9e", "#fad0c4"] },
  { name: "Fresh", icon: "leaf-outline", colors: ["#a8e063", "#56ab2f"] },
  { name: "Snacks", icon: "fast-food-outline", colors: ["#ff9966", "#ff5e62"] },
  { name: "Beverages", icon: "wine-outline", colors: ["#36d1dc", "#5b86e5"] },
  { name: "Household", icon: "home-outline", colors: ["#f7971e", "#ffd200"] },
  { name: "Tech", icon: "phone-portrait-outline", colors: ["#7f00ff", "#e100ff"] },
];

export default function TopHome({navigation}) {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#00b09b", "#96c93d"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerContainer}
      >
        {/* Top row - delivery info + profile */}
        <View style={styles.topRow}>
          <View>
            <Text style={styles.deliveryTime}>⏱ 8 mins</Text>
            <Text style={styles.address} numberOfLines={1}>
              Padmavathi Nagar, Tirupati
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="person-circle-outline" size={width * 0.1} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search + Cart */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Icon name="search-outline" size={width * 0.05} color="#888" />
            <View> 
              <TouchableOpacity onPress={() => navigation.navigate("SearchScreen",{navigation})}>
                <Text>  Search for Products... </Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={{alignContent:"flex-end"}}>
              <Icon name="mic-outline" size={width * 0.05} color="#888" />
            </TouchableOpacity> */}
          </View>

          {/* Cart with badge */}
          <TouchableOpacity style={styles.cartBtn} activeOpacity={0.8}>
            <LinearGradient
              colors={["#ff6a00", "#ee0979"]}
              style={styles.cartGradient}
            >
              <Icon name="cart-outline" size={width * 0.07} color="#fff" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </LinearGradient>
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
            <TouchableOpacity key={cat.name} activeOpacity={0.8} style={styles.catBtn}>
              <LinearGradient colors={cat.colors} style={styles.catGradient}>
                <Icon name={cat.icon} size={width * 0.045} color="#fff" />
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
    paddingTop: 40,
    paddingHorizontal: 14,
    paddingBottom: 14,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
      android: { elevation: 5 },
    }),
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  deliveryTime: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#fff",
  },
  address: {
    fontSize: width * 0.032,
    color: "#e6f0ff",
    maxWidth: "75%",
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
    paddingHorizontal: 12,
    height: width * 0.11,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } },
      android: { elevation: 3 },
    }),
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: width * 0.035,
    color: "#000",
  },
  cartBtn: {
    marginLeft: 12,
    position: "relative",
  },
  cartGradient: {
    padding: 8,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "#e53935",
    borderRadius: 12,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#fff",
    fontSize: width * 0.028,
    fontWeight: "bold",
  },
  categoryRow: {
    marginTop: 6,
  },
  catBtn: {
    marginRight: 10,
  },
  catGradient: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 7,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } },
      android: { elevation: 2 },
    }),
  },
  catText: {
    marginLeft: 6,
    fontSize: width * 0.034,
    fontWeight: "600",
    color: "#fff",
  },
});
