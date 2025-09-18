import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/slice/FavoritesSlice";

import HotDealsCard from "../../components/HotDealsCard";
import Categories from "../../components/Categories";
import TopHome from "./TopHome";
import Beverages from "../../assets/Beverages.json";

const { width } = Dimensions.get("window");

export default function HomeScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);

  const setIsFloating = route.params?.setIsFloating;

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;

    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      setIsFloating(false);
    } else {
      setIsFloating(true);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#FF6F00" />
        <Text style={{ marginTop: 10, fontSize: 16, color: "#555" }}>Loading products...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Gradient Header */}
        <View style={styles.header}>
          <TopHome navigation={navigation} />
        </View>

        {/* Promo Banner */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        >
          {[
            "https://img.freepik.com/free-vector/shopping-discount-banner-sale_1017-34875.jpg",
            "https://img.freepik.com/free-vector/flat-supermarket-sale-background_23-2149322106.jpg",
            "https://img.freepik.com/free-vector/flat-sale-banner-template_23-2149310793.jpg",
          ].map((banner, index) => (
            <View key={index} style={styles.banner}>
              <Image source={{ uri: banner }} style={styles.bannerImg} />
              <Pressable
                android_ripple={{ color: "rgba(255,255,255,0.3)" }}
                style={({ pressed }) => [
                  styles.shopNowBtn,
                  pressed && { transform: [{ scale: 0.96 }] },
                ]}
              >
                <LinearGradient
                  colors={["#FFAB40", "#FF6D00"]}
                  style={styles.shopNowGradient}
                >
                  <Text style={styles.shopNowText}>Shop Now</Text>
                </LinearGradient>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        {/* Deals of the Day */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color: "#E64A19" }]}>🔥 Deals of the Day</Text>
          <FlatList
            data={products.slice(0, 8)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            renderItem={({ item }) => (
              <HotDealsCard item={item} navigation={navigation} />
            )}
          />
        </View>

        {/* Popular */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color: "#6A1B9A" }]}>⭐ Popular</Text>
          <View style={styles.grid}>
            {products.slice(0, 6).map((item) => {
              const isFavorite = favorites.some((fav) => fav.id === item.id);

              return (
                <View key={item.id} style={styles.popularCard}>
                  <TouchableOpacity
                    style={{ width: "100%" }}
                    onPress={() => navigation.navigate("ProductDetails", { item })}
                  >
                    <Image source={{ uri: item.image }} style={styles.popularImage} />
                    <Text style={styles.popularName} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <View style={styles.ratingRow}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Ionicons
                          key={i}
                          name="star"
                          size={14}
                          color={i <= Math.round(item.rating?.rate || 4) ? "#f1c40f" : "#ccc"}
                          style={{ marginRight: 2 }}
                        />
                      ))}
                    </View>
                    <Text style={styles.popularPrice}>${item.price.toFixed(2)}/KG</Text>
                  </TouchableOpacity>

                  {/* Add to Cart */}
                  <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={20} color="#fff" />
                  </TouchableOpacity>

                  {/* Favorite Button */}
                  <TouchableOpacity
                    style={styles.favButton}
                    onPress={() => dispatch(toggleFavorite(item))}
                  >
                    <Ionicons
                      name={isFavorite ? "heart" : "heart-outline"}
                      size={20}
                      color={isFavorite ? "#E53935" : "#888"}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        {/* Snacks */}
        <View style={styles.section}>
          <Text style={styles.heading}>🍪 Snacks</Text>
          <FlatList
            data={products.slice(0, 12)}
            numColumns={4}
            scrollEnabled={false}
            nestedScrollEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Categories item={item} products={products} navigation={navigation} />
            )}
          />
        </View>

        {/* Beverages */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color: "#00796B" }]}>🥤 Beverages</Text>
          <View style={styles.grid}>
            {Beverages.map((item) => (
              <Categories
                key={item.id}
                item={item}
                products={products}
                navigation={navigation}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#c4c4c4ff" },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8E1",
  },

  header: {
    height: width * 0.5,
    width: "100%",
    borderRadius: 12,
  },

  carousel: { marginTop: 15 },
  banner: {
    width: width - 40,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  bannerImg: { width: "100%", height: 160, resizeMode: "cover" },

  shopNowBtn: {
    position: "absolute",
    bottom: 12,
    right: 12,
    borderRadius: 25,
    overflow: "hidden",
    elevation: 4,
  },
  shopNowGradient: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 25 },
  shopNowText: { color: "white", fontWeight: "bold", fontSize: 15, letterSpacing: 0.5 },

  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    marginVertical: 12,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  heading: { fontSize: 18, fontWeight: "700", marginBottom: 12, color: "#333" },

  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },

  popularCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 14,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    position: "relative",
    minHeight: 220,
    elevation: 4,
  },

  popularImage: { width: "100%", height: 120, resizeMode: "contain" },
  popularName: { fontSize: 14, fontWeight: "600", marginBottom: 4, textAlign: "center", color: "#444" },
  popularPrice: { fontSize: 15, fontWeight: "bold", color: "#27ae60", marginTop: 2 },
  ratingRow: { flexDirection: "row", justifyContent: "center", marginVertical: 4 },

  addButton: {
    backgroundColor: "#27ae60",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    elevation: 3,
  },

  favButton: {
    backgroundColor: "#fff",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    elevation: 3,
  },
});
