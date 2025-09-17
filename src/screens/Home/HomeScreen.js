import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import HotDealsCard from "../../components/HotDealsCard";
import Categories from "../../components/Categories";
import ProductList from "./ProductList";
import TopHome from './TopHome';
import ProductDetails from "./ProductDetails";

const { width } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gradient Header */}
        <View style={styles.header}>
          <TopHome/>
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
                  pressed && { transform: [{ scale: 0.95 }] },
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

        {/* Categories */}
        {/* <View style={styles.section}>
          <Text style={[styles.heading, { color: "#1565C0" }]}>🛍️ Categories</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            data={products.slice(0, 6)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Categories
                item={item}
                navigation={navigation}
                onPress={() =>
                  navigation.navigate("CategoryView", { products: [item] })
                }
              />
            )}
          />
        </View> */}

        {/* Deals of the Day */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color: "#E64A19" }]}>
            🔥 Deals of the Day
          </Text>
          <FlatList
            data={products.slice(0, 8)}
            horizontal
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            renderItem={({ item }) => (
              <HotDealsCard item={item}  navigation={navigation} />
            )}
          />
        </View>

        {/* Popular */}
        <View style={[styles.section, { marginVertical: -5 }]}>
          <Text style={[styles.heading, { color: "#6A1B9A" }]}>⭐ Popular</Text>

          <View style={styles.grid}>
            {products.slice(0, 6).map((item) => (
              <View key={item.id} style={styles.popularCard}>
                <TouchableOpacity
                  style={{ width: "100%" }}
                  onPress={() => navigation.navigate("ProductDetails", { item:item })}
                >
                  {/* Image */}
                  <Image source={{ uri: item.image }} style={styles.popularImage} />

                  {/* Name */}
                  <Text style={styles.popularName} numberOfLines={1}>
                    {item.title}
                  </Text>

                  {/* Rating */}
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: 2,
                      justifyContent: "center",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Ionicons
                        key={i}
                        name="star"
                        size={14}
                        color={
                          i <= Math.round(item.rating?.rate || 4)
                            ? "#f1c40f"
                            : "#ccc"
                        }
                        style={{ marginRight: 2 }}
                      />
                    ))}
                  </View>

                  {/* Price */}
                  <Text style={styles.popularPrice}>
                    ${item.price.toFixed(2)}/KG
                  </Text>
                </TouchableOpacity>

                {/* Floating Add Button */}
                <TouchableOpacity style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 18 }}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>



        {/* Snacks */}
        <View style={styles.sectionCat1}>
          <Text style={styles.heading}>🍪 Snacks</Text>
          <FlatList
            data={products.slice(0, 12)}
            numColumns={4}
            scrollEnabled={false}   // ✅ disables FlatList’s own scroll
            nestedScrollEnabled     // ✅ allows nesting inside ScrollView
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Categories item={item} products={products} navigation={navigation} />
            )}
          />
        </View>

        {/* Beverages */}
        <View style={[styles.sectionCat2, {}]}>
          <Text style={[styles.heading, { color: "#00796B" }]}>🥤 Beverages</Text>
          <View style={styles.grid}>
            {products.slice(12, 18).map((item) => (
              <Categories key={item.id} item={item} navigation={navigation} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF8E1" },

  header: {
    padding: 0,
    height: width * 0.58,
    width:width,
    backgroundColor: "rgba(255, 157, 0, 1)",
    borderRadius:10,
  },
  locationText: { color: "white", fontSize: 14, marginBottom: 8 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3E0",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 2,
  },
  searchBar: { flex: 1, fontSize: 14, color: "#333" },

  carousel: { marginTop: 15 },
  banner: {
    width: width - 40,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  bannerImg: { width: "100%", height: 160, resizeMode: "cover" },

  shopNowBtn: {
    position: "absolute",
    bottom: 12,
    right: 12,
    borderRadius: 25,
    overflow: "hidden",
  },
  shopNowGradient: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 25 },
  shopNowText: { color: "white", fontWeight: "bold", fontSize: 14 },

  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  sectionCat1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  sectionCat2: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  popularCard: {
    backgroundColor: "#fff",
    width: "48%",        // 2 cards per row
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",   // ✅ keeps button inside
    minHeight: 220,       // ✅ consistent card height
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  popularImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
    resizeMode: "contain",
  },
  popularName: { fontSize: 14, fontWeight: "600", marginBottom: 4, textAlign: "center" },
  popularPrice: { fontSize: 14, fontWeight: "bold", color: "#27ae60" },
  addButton: {
    backgroundColor: "#27ae60",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },

});
