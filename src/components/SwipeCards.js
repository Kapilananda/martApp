import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { addToCart, increaseQty, decreaseQty } from '../store/slice/CartSlice'; // adjust import
import { dayDeals } from '../assets/dayDeals';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

export default function SwipeCards({ item, navigation }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const cartItem = cartItems.find(i => i.id === item.id);

  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetails', { item });
  };

  return (
    <View style={styles.card}>
      {/* --- Product Image --- */}
      <TouchableOpacity onPress={navigateToProductDetails} activeOpacity={0.9}>
        <View style={styles.imageWrapper}>
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
        </View>
      </TouchableOpacity>

      {/* --- Title --- */}
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>

      {/* --- Rating --- */}
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

      {/* --- Category --- */}
      <Text style={styles.category}>
        <Text style={styles.categoryLabel}>Category :</Text>
        <Text style={styles.categoryValue} numberOfLines={1} ellipsizeMode="tail">
          {' '}
          { item.category}
        </Text>
      </Text>
      {/* --- Price Section --- */}
      <View style={styles.priceRow}>
        <Text style={styles.discountPrice}>₹ {item.discount_price}</Text>
        <Text style={styles.originalPrice}>₹{item.actual_price}</Text>
      <Text style={styles.discountTag}>
           {item.discount_percentage.toFixed()}% OFF
      </Text>
      </View>

      {/* --- Cart Actions --- */}
      <View style={styles.footer}>
        {!cartItem ? (
          <LinearGradient
            colors={['#0095cbff', '#007ac0ff']}
            style={styles.cartBtnGradient}
          >
            <TouchableOpacity
              style={styles.cartBtn}
              onPress={() => {
                dispatch(addToCart({ ...item, price: item.discount_price })); // update cart
                Toast.showWithGravity(
                  'Added to Cart..!',
                  Toast.SHORT,
                  Toast.CENTER,
                );
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.cartBtnText}>Add</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => dispatch(decreaseQty(item.id))}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>{cartItem.quantity}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => dispatch(increaseQty(item.id))}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: (width - 40) / 1.7,
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 8,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  imageWrapper: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
    marginBottom: 0,
    textAlign: 'left',
    minHeight: 20,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 4,
  },
  category: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  categoryValue: {
    // flex:1,
    
    fontSize: 13,
    fontWeight: '500',
    color: '#7e7d7dff',
    textTransform: 'capitalize',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  discountPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2E7D32',
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 13,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discountTag: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E53935',
    // alignSelf: 'flex-start',
    // marginBottom: 7,
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  cartBtnGradient: {
    borderRadius: 20,
    padding: 2,
    width: '90%',
    alignSelf: 'right',
  },
  cartBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#004268ff',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#def5ffff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
  qtyBtn: {
    backgroundColor: '#0069a5ff',
    borderRadius: 15,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  qtyNumber: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});
