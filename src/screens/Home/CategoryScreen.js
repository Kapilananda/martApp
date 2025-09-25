import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';
import data from '../../assets/CategoryData.json';

export default function CategoryScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  /** 🔹 Each Subcategory Card */
  const RenderSubCategory = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardWrapper}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('ProductList', { products })}
      >
        <LinearGradient
          colors={['#e6f7ffff', '#bce9ffff']} // soft gradient
          style={styles.card}
        >
          <View style={styles.imageBox}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <Text style={styles.subTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  /** 🔹 Category Block */
  const RenderCategory = ({ item }) => {
    return (
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <FlatList
          data={item.subcategories}
          keyExtractor={(subItem, index) => index.toString()}
          renderItem={RenderSubCategory}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'flex-start' }}
          scrollEnabled={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>🛒 Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Ionicons name="search" size={24} color="#004a7eff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderCategory}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginBottom:20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    elevation: 2,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 12,
    color: '#333',
  },
  cardWrapper: {
    flex: 1 / 3,
    margin: 6,
  },
  card: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 8,
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    // Android elevation
    elevation: 2,
  },
  imageBox: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // subtle shadow inside gradient
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  subTitle: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});
