import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from "react-native";

import HotDealsCard from "../../components/HotDealsCard";
import Categories from "../../components/Categories";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("Fetched Data:", data);
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
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]} // nothing here, all content is in ListHeaderComponent
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.appTitle}>MartApp 🛒</Text>
            </View>

            {/* Deals of the Day */}
            <View style={[styles.section, { width: width, paddingVertical: 0 }]}>
              <Text style={styles.heading}>🔥 Deals of the Day</Text>
              <FlatList
                data={products.slice(0, 10)}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item }) => (
                  <HotDealsCard item={item} navigation={navigation} />
                )}
              />
            </View>

            {/* Fresh Items */}
            <View style={styles.section}>
              <Text style={styles.heading}>🍎 Fresh Fruits & Veggies</Text>
              <FlatList
                data={products.slice(0, 12)}
                numColumns={4}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Categories item={item} navigation={navigation} />
                )}
              />
            </View>

            {/* Grocery */}
            <View style={styles.section}>
              <Text style={styles.heading}>🥦 Grocery</Text>
              <FlatList
                data={products.slice(0, 12)}
                numColumns={4}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Categories item={item} navigation={navigation} />
                )}
              />
            </View>

            {/* Snacks */}
            <View style={styles.section}>
              <Text style={styles.heading}>🍪 Snacks</Text>
              <FlatList
                data={products.slice(0, 12)}
                numColumns={4}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Categories item={item} navigation={navigation} />
                )}
              />
            </View>

            {/* Beverages */}
            <View style={styles.section}>
              <Text style={styles.heading}>🥤 Beverages</Text>
              <FlatList
                data={products.slice(0, 12)}
                numColumns={4}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Categories item={item} navigation={navigation} />
                )}
              />
            </View>
          </View>
        }
        renderItem={null} // no row rendering needed
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // soft gray-white background
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },
  header: {
    height: height * 0.28,
    width: width,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
    color: "#333",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 15,
    marginVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
});
