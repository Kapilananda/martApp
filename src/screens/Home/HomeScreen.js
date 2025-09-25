import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

// --- Custom Components ---
import { toggleFavorite } from "../../store/slice/FavoritesSlice";
import HotDealsCard from "../../components/SwipeCards";
import Categories from "../../components/Categories";
import TopHome from "./TopHome";
import ItemCard from "../../components/ItemCard";
import AdsCarousel from "../../components/AdsCarousel";

// --- Static Data Imports ---
import Snacks from "../../assets/Snacks.json";
import Beverages from "../../assets/Beverages.json";
import Fresh from "../../assets/Fresh.json";
import Household from "../../assets/Household.json";
import Tech from "../../assets/Tech.json";

export default function HomeScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  const setIsFloating = route.params?.setIsFloating;

  const [refreshing, setRefreshing] = React.useState(false);


  // --- Data Fetching Effect ---
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();

  //       const updated = data.map((item) => {
  //         const discountPercent = Math.floor(Math.random() * 30) + 10;
  //         const discountedPrice = (
  //           item.price - (item.price * discountPercent) / 100
  //         ).toFixed(2);

  //         return { ...item, discountPercent, discountedPrice };
  //       });

  //       setProducts(updated);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getProducts();
  // }, []);
  // --- Data Fetching Function ---
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const updated = data.map((item) => {
        const discountPercent = Math.floor(Math.random() * 30) + 10;
        const discountedPrice = (
          item.price - (item.price * discountPercent) / 100
        ).toFixed(2);

        return { ...item, discountPercent, discountedPrice };
      });

      setProducts(updated);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
      setRefreshing(false); // ✅ stop loader after data comes
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  // --- Refresh Handler ---
  const onRefresh = () => {
    setRefreshing(true);
    setSelectedCategory("All"); // ✅ reset category if needed
    getProducts();              // ✅ re-fetch products
  };


  // --- Loading State UI ---
  // if (loading) {
  //   return (
  //     <View style={styles.loaderContainer}>
  //       <ActivityIndicator size="large" color="#2ECC71" />
  //       <Text style={styles.loaderText}>Loading products...</Text>
  //     </View>
  //   );
  // }

  // --- Category Content Renderer ---
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "All":
        return (
          <>
            {/* Deals of the Day */}
            <View style={styles.sectionContainer}>
              <Text style={styles.heading}>🔥 Deals of the Day</Text>
              <FlatList
                data={products.slice(0, 8)}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.dealsListContainer}
                renderItem={({ item }) => (
                  <HotDealsCard item={item} navigation={navigation} />
                )}
              />
            </View>

            {/* Popular */}
            <View style={styles.sectionContainer}>
              <Text style={styles.heading}>⭐ Popular</Text>
              <View style={styles.gridContainer}>
                {products.slice(0, 6).map((item) => {
                  const isFavorite = favorites.some(
                    (fav) => fav.id === item.id
                  );

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

            {/* Other Categories */}
            {[
              { title: "🍪 Snacks", data: Snacks },
              { title: "🥤 Beverages", data: Beverages },
              { title: "🥦 Fresh", data: Fresh },
              { title: "🏠 Household", data: Household },
              { title: "💻 Tech", data: Tech },
            ].map((category) => (
              <View key={category.title} style={styles.sectionContainer}>
                <Text style={styles.heading}>{category.title}</Text>
                <View style={styles.gridContainer}>
                  {category.data.map((item) => (
                    <Categories
                      key={item.id}
                      item={item}
                      products={products}
                      navigation={navigation}
                    />
                  ))}
                </View>
              </View>
            ))}
          </>
        );

      case "Snacks":
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>🍪 Snacks</Text>
            <View style={styles.gridContainer}>
              {Snacks.map((item) => (
                <Categories
                  key={item.id}
                  item={item}
                  products={products}
                  navigation={navigation}
                />
              ))}
              <View style={{ marginBottom: 70 }} />
            </View>
          </View>
        );

      case "Fresh":
        return (
          <View style={[styles.sectionContainer, { marginBottom: 0 }]}>
            <Text style={styles.heading}>🥦 Fresh</Text>
            <View style={styles.gridContainer}>
              {Fresh.map((item) => (
                <Categories
                  key={item.id}
                  item={item}
                  products={products}
                  navigation={navigation}
                />
              ))}
              <View style={{ marginBottom: 70 }} />
            </View>
          </View>
        );

      case "Beverages":
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>🥤 Beverages</Text>
            <View style={styles.gridContainer}>
              {Beverages.map((item) => (
                <Categories
                  key={item.id}
                  item={item}
                  products={products}
                  navigation={navigation}
                />
              ))}
              <View style={{ marginBottom: 70 }} />
            </View>
          </View>
        );

      case "Household":
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>🏠 Household</Text>
            <View style={styles.gridContainer}>
              {Household.map((item) => (
                <Categories
                  key={item.id}
                  item={item}
                  products={products}
                  navigation={navigation}
                />
              ))}
              <View style={{ marginBottom: 70 }} />
            </View>
          </View>
        );

      case "Tech":
        return (
          <View style={[styles.sectionContainerTech, { marginBottom: 70 }]}>
            <Text style={styles.heading}>💻 Tech</Text>
            <View style={styles.gridContainer}>
              {Tech.map((item) => (
                <Categories
                  key={item.id}
                  item={item}
                  products={products}
                  navigation={navigation}
                />
              ))}
              <View style={{ marginBottom: 70 }} />
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  // --- Main Component Render ---
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header */}
        < TopHome navigation={navigation} onCategorySelect={setSelectedCategory} />
        {loading ?
          <>
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#2ECC71" />
              <Text style={styles.loaderText}>Loading products...</Text>
            </View>
          </> :
          <>

            {/* Ads Carousel */}
            <AdsCarousel autoPlayInterval={3000} itemHeight={200} />

            {/* Dynamic Content */}
            {renderCategoryContent()}
          </>}
      </ScrollView>
      <View style={{ marginBottom: 70 }}></View>
    </SafeAreaView>
  );
}

// --- STYLESHEET ---
const styles = StyleSheet.create({
  // --- Main Container ---
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },

  // --- Loading State ---
  loaderContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#34495E",
  },

  // --- Section Styles ---
  sectionContainer: {
    backgroundColor: "#eef9ffff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    shadowColor: "#34495E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionContainerTech: {
    backgroundColor: "#eef9ffff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    marginBottom: 70,
    shadowColor: "#34495E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // --- Typography ---
  heading: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#34495E",
    marginBottom: 16,
  },

  // --- Layouts ---
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },

  // --- Horizontal Lists ---
  dealsListContainer: {
    paddingHorizontal: 0,
  },
});
