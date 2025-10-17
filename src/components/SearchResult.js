import { ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import {dayDeals} from '../assets/dayDeals';

export default function ResultScreen({ route, navigation }) {
  const { query } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = dayDeals;

        // Add random discounts
        const updated = data.map(item => {
          const discountPercent = Math.floor(Math.random() * 30) + 10;
          const discountedPrice = (
            item.price -
            (item.price * discountPercent) / 100
          ).toFixed(2);
          return { ...item, discountPercent, discountedPrice };
        });

        // Filter by query
        const filtered = updated.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        );

        setProducts(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  // ⬇ navigate only after products are set and not loading
  useEffect(() => {
    if (!loading && products.length >= 0) {
      navigation.replace('ProductList', { products }); // ✅ replaces instead of stacking
    }
  }, [loading, products, navigation]);

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return null; // nothing to show, we just redirect
}
