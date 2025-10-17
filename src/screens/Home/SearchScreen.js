import React, { useEffect, useState } from 'react';
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
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dayDeals} from '../../assets/dayDeals';
import FastImage from 'react-native-fast-image';
import { popular } from '../../assets/popular';


const { width } = Dimensions.get('window');

export default function ProductCarousel({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const favorites = useSelector(state => state.favorite.favorites);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();

  //       // Add random discounts
  //       const updated = data.map((item) => {
  //         const discountPercent = Math.floor(Math.random() * 30) + 10;
  //         const discountedPrice = (
  //           item.price -
  //           (item.price * discountPercent) / 100
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

  useEffect(() => {
    try {
      // 🔹 Use local JSON directly
      const updated = dayDeals.map(item => {
        const discountPercent = Math.floor(Math.random() * 30) + 10;
        const discountedPrice = (
          item.actual_price -
          (item.actual_price * discountPercent) / 100
        ).toFixed(2);

        return {
          ...item,
          discountPercent,
          discountedPrice,
          price: item.actual_price, // keep compatibility with existing code
          rating: item.rating || { rate: 4.5, count: 100 }, // fallback if missing
        };
      });

      setProducts(updated);
    } catch (error) {
      console.error('Error loading local products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, products]);

  // ✅ Navigate to SearchResult on Enter
  const handleSearchSubmit = () => {
    if (searchQuery.length > 0) {
      navigation.navigate('SearchResult', { query: searchQuery });
      setSuggestions([]); // hide suggestions after navigation
    }
  };

  // 🛒 Add to cart
  const addToCart = item => {
    setCart(prev => [...prev, item]);
    console.log('Cart updated:', [...cart, item]);
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', { item })}
    >
      {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
      <FastImage
            source={
              typeof item.image === 'number'
              ? item.image 
              : {uri : item.image}
            }
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />

      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>

      {/* ⭐ Rating */}
      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5].map(i => (
          <Ionicons
            key={i}
            name="star"
            size={14}
            color={i <= Math.round(item.rating?.rate || 0) ? '#f1c40f' : '#ccc'}
            style={{ marginRight: 2 }}
          />
        ))}
        <Text style={styles.ratingText}>({item.rating?.count})</Text>
      </View>

      {/* 💰 Price */}
      <View style={styles.priceRow}>
        <Text style={styles.discountPrice}>₹{item.discountedPrice}</Text>
        <Text style={styles.originalPrice}>₹{item.price}</Text>
        <Text style={styles.discountTag}>-{item.discountPercent}%</Text>
      </View>

      {/* 🛒 Add to Cart */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => addToCart(item)}
      >
        <Ionicons name="cart-outline" size={18} color="#fff" />
        <Text style={styles.cartButtonText}>Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
      {/* 🔍 Search Row */}
      <View style={styles.searchRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={22} color="#ffffffff" />
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
            onSubmitEditing={handleSearchSubmit} // 🚀 Enter pressed
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <AntDesign
                name="closecircle"
                size={18}
                color="#888"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* 🔽 Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <View style={styles.suggestionBox}>
          {suggestions.slice(0, 6).map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.suggestionItem}
              onPress={() => {
                setSearchQuery(item.title);
                setSuggestions([]);
                navigation.navigate('SearchResult', { query: item.title });
              }}
            >
              {/* <Image
                source={{ uri: item.image }}
                style={styles.suggestionImage}
              /> */}
              <FastImage
            source={
              typeof item.image === 'number'
              ? item.image 
              : {uri : item.image}
            }
            style={styles.suggestionImage}
            resizeMode={FastImage.resizeMode.contain}
          />
              <Text numberOfLines={1} style={styles.suggestionText}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Recommendations */}
      <Text style={styles.sectionTitle}>Recommended</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#2f855a" />
        ) : (
          popular.slice(0, 8).map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.popularCard}
              onPress={() => navigation.navigate('ProductDetails', { item })}
            >
              {/* <Image source={{ uri: item.image }} style={styles.popularImage} /> */}
              <FastImage
            source={
              typeof item.image === 'number'
              ? item.image 
              : {uri : item.image}
            }
            style={styles.popularImage}
            resizeMode={FastImage.resizeMode.contain}
          />
              <Text style={styles.popularText} numberOfLines={1}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      {/* Top Deals */}
      <View style={styles.dealHeader}>
        <Text style={styles.sectionTitle}>Top Deals</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductList', {
              products,
              favorites,
              dispatch,
            })
          }
        >
          <Text style={styles.seeAll}>See All &gt;</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ marginVertical: 10 }}
        data={products.slice(0,10)}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  backButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: '#008bd0ff',
    borderRadius: 25,
    marginLeft: 8,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 45,
    marginHorizontal: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  suggestionBox: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    paddingVertical: 5,
    marginBottom: 10,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  suggestionImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
  },
  suggestionText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  card: {
    width: width * 0.45,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: width * 0.35,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  discountPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2f855a',
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 13,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discountTag: {
    fontSize: 12,
    fontWeight: '700',
    color: '#e63946',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginVertical: 8,
    marginLeft: 12,
  },
  dealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  seeAll: {
    fontSize: 14,
    color: 'blue',
  },
  popularCard: {
    width: width * 0.3,
    marginRight: 12,
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  popularImage: {
    width: '100%',
    height: width * 0.25,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 7,
  },
  popularText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: 3,
  },
  cartButton: {
    marginTop: 10,
    backgroundColor: '#2f7185ff',
    paddingVertical: 6,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});
