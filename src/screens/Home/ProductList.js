import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ProductList = ({route,navigation}) => {
  const products = route?.params?.products || [];
  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}/{item.unit}</Text>
      
      {/* Ratings */}
      <View style={styles.ratingRow}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name={i < item.rating ? 'star' : 'star-outline'}
            size={16}
            color="#f5a623"
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="heart-outline" size={22} color="#2f855a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn}>
          <Icon name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Filter button */}
      <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{width:width}}
      />

      {/* Filter Modal */}
      <Modal visible={filterVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Filter</Text>

          {/* Category, Sort, Rating, Price range... add components here */}
          <Text>Category</Text>
          <Text>Sort by</Text>
          <Text>Rating</Text>
          <Text>Price Range</Text>

          <View style={styles.modalActions}>
            <Button title="Reset" onPress={() => setFilteredProducts(products)} />
            <Button title="Apply" onPress={() => setFilterVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  filterBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#2f855a',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  filterText: { color: '#fff', fontWeight: '600' },
  card: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
  },
  image: { width: '100%', height: 80, resizeMode: 'contain' },
  name: { fontSize: 16, fontWeight: '600', marginTop: 8 },
  price: { fontSize: 14, color: '#2f855a', marginVertical: 4 },
  ratingRow: { flexDirection: 'row', marginVertical: 4 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  addBtn: {
    backgroundColor: '#2f855a',
    padding: 6,
    borderRadius: 50,
  },
  modalContainer: { flex: 1, padding: 20 },
  modalTitle: { fontSize: 20, fontWeight: '700', marginBottom: 20 },
  modalActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
});

export default ProductList;
