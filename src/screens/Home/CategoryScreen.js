import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../assets/CategoryData.json';
import Categories from '../../components/Categories';
import ProductList from './ProductList';

import Snacks from '../../assets/Snacks.json';
import Beverages from '../../assets/Beverages.json';
import Fresh from '../../assets/Fresh.json';
import Household from '../../assets/Household.json';
import Tech from '../../assets/Tech.json';

export default function CategoryScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getProducts();
  // }, []);

  /** 🔹 Each Subcategory Card */
  // const RenderSubCategory = ({ item }) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.cardWrapper}
  //       activeOpacity={0.85}
  //       onPress={() => navigation.navigate('ProductList', { products })}
  //     >
  //       <LinearGradient
  //         colors={['#e6f7ffff', '#bce9ffff']} // soft gradient
  //         style={styles.card}
  //       >
  //         <View style={styles.imageBox}>
  //           <Image source={{ uri: item.image }} style={styles.image} />
  //         </View>
  //         <Text style={styles.subTitle} numberOfLines={1}>
  //           {item.title}
  //         </Text>
  //       </LinearGradient>
  //     </TouchableOpacity>
  //   );
  // };

  /** 🔹 Category Block */
  const RenderCategory = () => {
    return (
      <View style= {{}}>
        {/* <Text style={styles.categoryTitle}>{item.title}</Text> */}

        {[
          { title: '🍪 Snacks', data: Snacks },
          { title: '🥤 Beverages', data: Beverages },
          { title: '🥦 Fresh', data: Fresh },
          { title: '🏠 Household', data: Household },
          { title: '💻 Tech', data: Tech },
        ].map(category => (
          <View key={category.title} style={styles.sectionContainer}>
            <Text style={styles.heading}>{category.title}</Text>
            <View style={styles.gridContainer}>
              {category.data.map(item => (
                <Categories
                  key={item.id}
                  item={item}
                  products={item.products}
                  navigation={navigation}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>🛒 Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search" size={24} color="#004a7eff" />
        </TouchableOpacity>
      </View>
      <ScrollView>{RenderCategory()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#34495E',
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
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
    backgroundColor: '#fff',
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
  sectionContainer: {
    backgroundColor: '#eef9ffff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    shadowColor: '#34495E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
