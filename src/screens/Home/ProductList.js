import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const ProductList = ({ route, navigation }) => {
  const products = route?.params?.products || [];

  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // ✅ Cart state

  // ✅ Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // ✅ Add to Cart
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((cartItem) => cartItem.id === item.id);
      if (exists) {
        // increase quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // add new item
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    Alert.alert("🛒 Added to Cart", `${item.title} has been added to your cart.`);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      {/* Clickable Product Card */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetails", {
            item,
            isFavorite: favorites.includes(item.id),
            toggleFavorite: () => toggleFavorite(item.id),
            addToCart: () => addToCart(item), // ✅ Pass cart handler to details screen
          })
        }
      >
        {/* Image */}
        <Image source={{ uri: item.image }} style={styles.image} />

        {/* Name */}
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>

        {/* Rating */}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 2,
            justifyContent: "center",
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <Icon
              key={i}
              name="star"
              size={14}
              color={i <= Math.round(item.rating?.rate || 4) ? "#f1c40f" : "#ccc"}
              style={{ marginRight: 2 }}
            />
          ))}
        </View>

        {/* Price */}
        <Text style={styles.popularPrice}>₹ {item.price.toFixed(2)}/KG</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actions}>
        {/* Favorite button */}
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <Icon
            name={favorites.includes(item.id) ? "heart" : "heart-outline"}
            size={22}
            color={favorites.includes(item.id) ? "#e63946" : "#2f855a"}
          />
        </TouchableOpacity>

        {/* Add to cart button */}
        <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(item)}>
          <Icon name="cart" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top bar with back + filter */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.goBack()}
        >

          <AntDesign name="arrowleft" size={20} color="#333" />

        </TouchableOpacity>

        {/* Filter button */}
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setFilterVisible(true)}
        >
          <Icon name="options-outline" size={18} color="#fff" />
          <Text style={styles.filterText}> Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Filter Modal */}
      <Modal visible={filterVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter Products</Text>

            {/* Dummy filter options */}
            <Text style={styles.modalOption}>Category</Text>
            <Text style={styles.modalOption}>Sort by</Text>
            <Text style={styles.modalOption}>Rating</Text>
            <Text style={styles.modalOption}>Price Range</Text>

            {/* Modal Actions */}
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.modalBtn, { backgroundColor: "#ccc" }]}
                onPress={() => {
                  setFilteredProducts(products);
                  setFilterVisible(false);
                }}
              >
                <Text style={styles.modalBtnText}>Reset</Text>
              </Pressable>

              <Pressable
                style={[styles.modalBtn, { backgroundColor: "#2f855a" }]}
                onPress={() => setFilterVisible(false)}
              >
                <Text style={styles.modalBtnText}>Apply</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    top: 40,
  },
  filterBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#2f855a",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 12,
    elevation: 3,
    color: "white",
  },
  filterText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 0,
  },
  card: {
    width: "48%",
    backgroundColor: "#f8f9fa",
    borderRadius: 14,
    padding: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: width * 0.35,
    resizeMode: "contain",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 6,
    color: "#333",
  },
  popularPrice: {
    fontSize: 14,
    color: "#2f855a",
    marginVertical: 4,
    fontWeight: "500",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  addBtn: {
    backgroundColor: "#2f855a",
    padding: 8,
    borderRadius: 50,
    elevation: 2,
  },

  // ✅ Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  modalOption: {
    fontSize: 16,
    marginBottom: 12,
    color: "#444",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 10,
    alignItems: "center",
  },
  modalBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default ProductList;
