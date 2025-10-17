import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, decreaseQty } from '../store/slice/CartSlice';
import { ToastAndroid } from 'react-native';
import dayDeals from '../assets/dayDeals';
import FastImage from 'react-native-fast-image';

export default function ItemCard({
  item,
  navigation,
  isFavorite,
  onToggleFavorite,

}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const inCart = cartItems.find(i => i.id === item.id);

  const imageSource =
    typeof item.image === 'string'
      ? { uri: item.image } // remote image
      : item.image; // local require image
  // console.log(`hello: ${item}`);

  return (
    <View style={[styles.card]}>
      {/* Favorite */}
      <TouchableOpacity style={styles.favButton} onPress={onToggleFavorite}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={25}
          color={isFavorite ? '#E53935' : '#fea3a3ff'}
        />
      </TouchableOpacity>

      {/* Image */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', { item:item})}
        style={styles.imageBox}
      >
        {/* <Image source={{ uri: item.image }} style={styles.image} /> */}

        <FastImage
          source={imageSource}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>

      {/* Rating */}
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

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.discountPrice}>
          
             ₹ {Math.round(item.actual_price - item.discount_percentage)}
            {/* ` ₹ {item.discount_price}` */}
        </Text>
        <Text style={styles.originalPrice}>₹ {item.actual_price} </Text>
      </View>
      {/* <Text>
        <Text style={{color:'black',fontWeight:700,}}>M.R.P : </Text>
      </Text> */}
      {/* <Text style={styles.discountTag}>- {item.discount_percentage}% Off</Text> */}

      {/* Cart Buttons */}
      {!inCart ? (
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() =>
            dispatch(
              addToCart({
                ...item,
                price: Math.round(item.actual_price - item.discount_percentage),
              }),
              ToastAndroid.showWithGravity(
                'Added to Cart..!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              ),
            )
          }
        >
          <Ionicons name="cart-outline" size={18} color="#fff" />
          <Text style={styles.cartButtonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.qtyContainer}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => dispatch(decreaseQty(item.id))}
          >
            <Ionicons name="remove" size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{inCart.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => dispatch(increaseQty(item.id))}
          >
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '48%',
    // height : "20%",
    borderRadius: 16,
    padding: 12,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    position: 'relative',
    justifyContent: 'space-between',
  },
  favButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  imageBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
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
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#777',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 5,
  },
  discountPrice: {
    fontSize: 19,
    fontWeight: '700',
    color: '#00b64cff',
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 13,
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 6,
  },
  discountTag: {
    fontSize: 15,
    fontWeight: '700',
    color: '#E53935',
    // backgroundColor: "#fdecea",
    paddingHorizontal: 0,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 7,
    marginTop: 7,
    minHeight: 5,
  },

  /* ✅ Unified button styles */
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00719dff',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 4,
    elevation: 2,
    height: 45,
    fontSize: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 6,
    fontSize: 14,
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0080b3ff',
    borderRadius: 25,
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginTop: 4,
    elevation: 2,
  },
  qtyBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0092ccff',
  },
  qtyText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    marginHorizontal: 8,
  },
});
