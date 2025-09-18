import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient'; // ✅ make sure you installed react-native-linear-gradient
import data from '../../assets/CategoryData.json';
import categories from '../../components/Categories';
import ProductList from './ProductList';

export default function CategoryScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);

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

  const RenderSubCategory = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardWrapper}
        onPress={() => navigation.navigate('ProductList', { products })}
      >
        <LinearGradient
          colors={['#fbc2eb', '#a6c1ee']} // 🌈 gradient
          style={styles.card}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.subTitle} numberOfLines={2}>
            {item.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const RenderCategory = ({ item }) => {
    return (
      <>
        <View style={{ marginBottom: 25 }}>

          {/* Category Title */}
          <Text style={styles.categoryTitle}>{item.title}</Text>

          {/* Subcategories Grid */}
          <FlatList
            data={item.subcategories}
            keyExtractor={(subItem, index) => index.toString()}
            renderItem={RenderSubCategory}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: 'left' }}
            scrollEnabled={false}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity onPress={navigation.navigate("SearchScreen" , {navigation})}>

          <Ionicons name="search" size={22} color="#2f855a" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderCategory}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    color: '#333',
  },
  cardWrapper: {
    flex: 1 / 3,
    margin: 6,
  },
  card: {
    height: 140,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between", // text left, icon right
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",

  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
});