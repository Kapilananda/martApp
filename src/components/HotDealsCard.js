import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

/**
 * A reusable card component for displaying "hot deal" products.
 * @param {object} props - The component props.
 * @param {object} props.item - The product item data.
 * @param {object} props.navigation - The navigation object from React Navigation.
 */
export default function HotDealsCard({ item, navigation }) {
  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetails', { item });
  };

  const handleAddToCart = () => {
    console.log('Add to cart', item.title);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={navigateToProductDetails} activeOpacity={0.8}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>

      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <LinearGradient
          colors={['#FF6D00', '#FFAB40']}
          style={styles.plusButtonGradient}
        >
          <TouchableOpacity
            style={styles.plusButton}
            onPress={handleAddToCart}
            activeOpacity={0.7}
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: (width - 40) / 2.4,
    height: width * 0.65,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 7,
    marginBottom: 15,
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Android elevation
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', // Pushes the footer to the bottom
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  plusButtonGradient: {
    borderRadius: 25,
    padding: 2,
  },
  plusButton: {
    backgroundColor: '#fff',
    borderRadius: 22,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6D00',
  },
});