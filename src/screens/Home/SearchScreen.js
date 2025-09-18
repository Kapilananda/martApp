import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width } = Dimensions.get("window");

export default function ProductCarousel({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]); // 🛒 Local cart state

  const handleSearchSubmit = () => {
    if (searchQuery.length >= 3) {
      navigation.navigate("SearchResult", { query: searchQuery });
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        // Add random discounts
        const updated = data.map((item) => {
          const discountPercent = Math.floor(Math.random() * 30) + 10; // 10–40%
          const discountedPrice = (
            item.price -
            (item.price * discountPercent) / 100
          ).toFixed(2);

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

  // ✅ Filter products by search
  const filteredProducts =
    searchQuery.length >= 3
      ? products.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products;

  // 🛒 Add to cart function
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    console.log("Cart updated:", [...cart, item]); // debug
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>

      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Ionicons
            key={i}
            name="star"
            size={14}
            color={i <= Math.round(item.rating?.rate || 0) ? "#f1c40f" : "#ccc"}
            style={{ marginRight: 2 }}
          />
        ))}
        <Text style={styles.ratingText}>({item.rating?.count})</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.discountPrice}>${item.discountedPrice}</Text>
        <Text style={styles.originalPrice}>${item.price}</Text>
        <Text style={styles.discountTag}>-{item.discountPercent}%</Text>
      </View>

      {/* 🛒 Add to Cart Button */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => addToCart(item)}
      >
        <Ionicons name="cart-outline" size={18} color="#fff" />
        <Text style={styles.cartButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  // if (loading) {
  //   return (
  //     <View style={styles.center}>
  //       <ActivityIndicator size="large" color="#2f855a" />
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* 🔍 Search Bar */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={[,{width:45,height:45,justifyContent: "center",alignItems:'center',elevation:2,backgroundColor: "#dbdbdbff",borderRadius: 25,}]}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={22} color="#333" />
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            onSubmitEditing={handleSearchSubmit}
          />
        </View>
      </View>

      {/* Recommandations */}
      <Text style={styles.sectionTitle}>Recommands</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {/* {loading : <ActivityIndicator size="large" color="#2f855a" /> ? } */}
        {products.slice(0, 8).map((item) => (
          <TouchableOpacity key={item.id} style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text style={styles.popularText} numberOfLines={1}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Deals */}
      <Text style={styles.sectionTitle}>Top Deals</Text>
      <FlatList
        style={{ marginTop: 10, marginBottom: 10 }}
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, marginBottom: 5 }}
      />

      {/* Popular Searches */}
      <Text style={styles.sectionTitle}>Popular Searches</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {products.slice(0, 8).map((item) => (
          <TouchableOpacity key={item.id} style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text style={styles.popularText} numberOfLines={1}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f6",
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 45,
    marginHorizontal: 12,
    marginVertical: 12,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  card: {
    width: width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: width * 0.35,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  discountPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2f855a",
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 6,
  },
  discountTag: {
    fontSize: 12,
    fontWeight: "700",
    color: "#e63946",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginVertical: 0,
    marginLeft: 12,
    marginTop: 0,
  },
  popularCard: {
    width: width * 0.3,
    marginRight: 12,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  popularImage: {
    width: "100%",
    height: width * 0.25,
    resizeMode: "contain",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 7,
  },
  popularText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginTop: 3,
  },
  cartButton: {
    marginTop: 10,
    backgroundColor: "#2f855a",
    paddingVertical: 6,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
});
