import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/slice/FavoritesSlice";
import HotDealsCard from "../../components/SwipeCards";
import Categories from "../../components/Categories";
import TopHome from "./TopHome";
import Beverages from "../../assets/Beverages.json";
import ItemCard from "../../components/ItemCard";
import AdsCarousel from "../../components/AdsCarousel";

import Snacks from "../../assets/Snacks.json";
import Fresh from "../../assets/Fresh.json";
import Household from "../../assets/Household.json";
import Tech from "../../assets/Tech.json";

const { width } = Dimensions.get("window");

export default function HomeScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");   // 🔹 track selected category

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);

  const setIsFloating = route.params?.setIsFloating;

  const handleScroll = (event) => {
    // const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    // const paddingToBottom = 20;
    setIsFloating(
      // layoutMeasurement.height + contentOffset.y < contentSize.height - paddingToBottom
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const updated = data.map((item) => {
          const discountPercent = Math.floor(Math.random() * 30) + 10;
          const discountedPrice = (item.price - (item.price * discountPercent) / 100).toFixed(2);
          return { ...item, discountPercent, discountedPrice };
        });

        setProducts(updated);
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
        <Text style={{ marginTop: 10, fontSize: 16, color: "#555" }}>
          Loading products...
        </Text>
      </View>
    );
  }

// 🔹 Function to render content based on category
const renderCategoryContent = () => {
  switch (selectedCategory) {
    case "All":
      return (
        <>
          {/* Deals of the Day */}
          <View style={styles.sectionDeals}>
            <Text style={[styles.heading, { color: "#E64A19" }]}>🔥 Deals of the Day</Text>
            <FlatList
              data={products.slice(0, 8)}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.dealsList}
              renderItem={({ item }) => <HotDealsCard item={item} navigation={navigation} />}
            />
          </View>

          {/* Popular */}
          <View style={styles.sectionPopular}>
            <Text style={[styles.heading, { color: "#6A1B9A" }]}>⭐ Popular</Text>
            <View style={styles.grid}>
              {products.slice(0, 6).map((item) => {
                const isFavorite = favorites.some((fav) => fav.id === item.id);
                return (
                  <ItemCard
                    key={item.id}
                    item={item}
                    navigation={navigation}
                    isFavorite={isFavorite}
                    onToggleFavorite={() => dispatch(toggleFavorite(item))}
                  />
                );
              })}
            </View>
          </View>

          {/* Snacks */}
          <View style={styles.section}>
            <Text style={styles.heading}>🍪 Snacks</Text>
            <View style={styles.grid}>
              {Snacks.map((item) => (
                <Categories key={item.id} item={item} products={products} navigation={navigation} />
              ))}
            </View>
          </View>

          {/* Beverages */}
          <View style={styles.section}>
            <Text style={styles.heading}>🥤 Beverages</Text>
            <View style={styles.grid}>
              {Beverages.map((item) => (
                <Categories key={item.id} item={item} products={products} navigation={navigation} />
              ))}
            </View>
          </View>

          {/* Fresh */}
          <View style={styles.section}>
            <Text style={styles.heading}>🥦 Fresh</Text>
            <View style={styles.grid}>
              {Fresh.map((item) => (
                <Categories key={item.id} item={item} products={products} navigation={navigation} />
              ))}
            </View>
          </View>

          {/* Household */}
          <View style={styles.section}>
            <Text style={styles.heading}>🏠 Household</Text>
            <View style={styles.grid}>
              {Household.map((item) => (
                <Categories key={item.id} item={item} products={products} navigation={navigation} />
              ))}
            </View>
          </View>

          {/* Tech */}
          <View style={styles.section}>
            <Text style={styles.heading}>💻 Tech</Text>
            <View style={styles.grid}>
              {Tech.map((item) => (
                <Categories key={item.id} item={item} products={products} navigation={navigation} />
              ))}
            </View>
          </View>
        </>
      );

    case "Snacks":
      return (
        <View style={styles.section}>
          <Text style={styles.heading}>🍪 Snacks</Text>
          <View style={styles.grid}>
            {Snacks.map((item) => (
              <Categories key={item.id} item={item} products={products} navigation={navigation} favorites={favorites} dispatch={dispatch} />
            ))}
          </View>
        </View>
      );

    case "Beverages":
      return (
        <View style={styles.section}>
          <Text style={styles.heading}>🥤 Beverages</Text>
          <View style={styles.grid}>
            {Beverages.map((item) => (
              <Categories key={item.id} item={item} products={products} navigation={navigation} />
            ))}
          </View>
        </View>
      );

    case "Fresh":
      return (
        <View style={styles.section}>
          <Text style={styles.heading}>🥦 Fresh</Text>
          <View style={styles.grid}>
            {Fresh.map((item) => (
              <Categories key={item.id} item={item} products={products} navigation={navigation} />
            ))}
          </View>
        </View>
      );

    case "Household":
      return (
        <View style={styles.section}>
          <Text style={styles.heading}>🏠 Household</Text>
          <View style={styles.grid}>
            {Household.map((item) => (
              <Categories key={item.id} item={item} products={products} navigation={navigation} />
            ))}
          </View>
        </View>
      );

    case "Tech":
      return (
        <View style={[styles.section,{marginBottom : 70}]}>
          <Text style={styles.heading}>💻 Tech</Text>
          <View style={styles.grid}>
            {Tech.map((item) => (
              <Categories key={item.id} item={item} products={products} navigation={navigation} />
            ))}
          </View>
        </View>
      );

    default:
      return null;
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
        {/* Header */}
        <TopHome navigation={navigation} onCategorySelect={setSelectedCategory} /> {/* 🔹 Pass function */}
        
        {/* Promo Banner */}
        {/* <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {[
            "https://img.freepik.com/free-vector/shopping-discount-banner-sale_1017-34875.jpg",
            "https://img.freepik.com/free-vector/flat-supermarket-sale-background_23-2149322106.jpg",
            "https://img.freepik.com/free-vector/flat-sale-banner-template_23-2149310793.jpg",
          ].map((banner, index) => (
            <View key={index} style={styles.banner}>
              <Image source={{ uri: banner }} style={styles.bannerImg} />
              <Pressable android_ripple={{ color: "rgba(255,255,255,0.3)" }} style={styles.shopNowBtn}>
                <LinearGradient colors={["#FFAB40", "#FF6D00"]} style={styles.shopNowGradient}>
                  <Text style={styles.shopNowText}>Shop Now</Text>
                </LinearGradient>
              </Pressable>
            </View>
          ))}
        </ScrollView> */}
        <AdsCarousel autoPlayInterval={3000} itemHeight={200}  />

        {/* 🔹 Dynamic content */}
        {renderCategoryContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF8E1" },
  carousel: { marginVertical: 10 },
  banner: { width: width - 32, marginHorizontal: 16, borderRadius: 15, overflow: "hidden", elevation: 3, backgroundColor: "#000000ff", alignItems: "center" },
  bannerImg: { width: "100%", height: 160, resizeMode: "contain" },
  shopNowBtn: { position: "absolute", bottom: 12, right: 12, borderRadius: 25, overflow: "hidden" },
  shopNowGradient: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 25 },
  shopNowText: { color: "white", fontWeight: "bold", fontSize: 15 },
  section: { backgroundColor: "#fff", borderRadius: 12, padding: 14, marginVertical: 10, marginHorizontal: 16, elevation: 2 },
  sectionDeals: { backgroundColor: "#fff", borderRadius: 12, padding: 14, marginVertical: 10, marginHorizontal: 16, elevation: 2 },
  sectionPopular: { backgroundColor: "#fff", borderRadius: 12, padding: 14, marginVertical: 10, marginHorizontal: 16, elevation: 2 },
  heading: { fontSize: 18, fontWeight: "700", marginBottom: 12, color: "#333" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", rowGap: 10 },
  dealsList: { paddingHorizontal: 6 },
});
