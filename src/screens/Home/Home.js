import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";


import HotDealsCard from '../../components/HotDealsCard'

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log("Fetched Data:", data);
        setProducts(data); // ✅ directly use data
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       

      </View>
      <ScrollView style={{ height: "75%", width: "100%" }}>
        <View style={styles.deals}>
          <Text style={styles.heading}>
            Deals of the Day
          </Text>
          <FlatList
            data={products.slice(0, 10)}
            // numColumns={2}
            horizontal
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 10 }}
            renderItem={({ item }) => (
              <HotDealsCard item={item} navigation={navigation} />
            )}
            style={{ height: "100%", }}
          />
        </View>
        <View style={styles.dummy}>
          <Text style={styles.heading}>Fresh things(Fruits & veggies)....</Text>
        </View>
        <View style={styles.dummy}>
          <Text style={styles.heading}>Grocery....</Text>
        </View>
        <View style={styles.dummy}>
          <Text style={styles.heading}>Snacks....</Text>
        </View>
        <View style={styles.dummy}>
          <Text style={styles.heading}>Grocery....</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbc12d30",
  },
  header: {
    height: "25%",
    width: "100%",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 15,
    paddingLeft: 17,
  },
  deals: {
    height: "27%",
    width: "100%"
  },
  dummy: {
    height: "200",
    width: "100%",
  },
   
});
