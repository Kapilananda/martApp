import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/slice/FavoritesSlice";
import ItemCard from "../../components/ItemCard";

const { width } = Dimensions.get("window");

const ProductList = ({ route, navigation }) => {
  const products = route?.params?.products || [];

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);

  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // ✅ Filter states
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [minRating, setMinRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // ✅ Unique categories
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  // ✅ Apply Filters
  const applyFilters = () => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (minRating) {
      filtered = filtered.filter((item) => item.rating?.rate >= minRating);
    }

    if (priceRange) {
      filtered = filtered.filter(
        (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
      );
    }

    if (sortBy === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
    setFilterVisible(false);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSortBy(null);
    setMinRating(null);
    setPriceRange([0, 1000]);
    setFilteredProducts(products);
    setFilterVisible(false);
  };

  const renderProduct = ({ item }) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    return (
      <ItemCard
        item={item}
        navigation={navigation}
        isFavorite={isFavorite}
        onToggleFavorite={() => dispatch(toggleFavorite(item))}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Floating Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.topBtn}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={20} color="#0073c0ff" />
          <Text style={styles.topBtnText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topBtn}
          onPress={() => setFilterVisible(true)}
        >
          <Icon name="options-outline" size={18} color="#0073c0ff" />
          <Text style={styles.topBtnText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Show No Products Found */}
      {filteredProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found</Text>
          <TouchableOpacity
            style={styles.tryAgainBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.tryAgainText}>🔙 Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* 🔹 Filter Modal */}
      <Modal visible={filterVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalTitle}>Filter Products</Text>

              {/* Category */}
              <Text style={styles.modalOption}>Category</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {categories.map((cat) => (
                  <Pressable
                    key={cat}
                    style={[
                      styles.chip,
                      selectedCategory === cat && styles.chipActive,
                    ]}
                    onPress={() =>
                      setSelectedCategory(
                        selectedCategory === cat ? null : cat
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selectedCategory === cat && styles.chipTextActive,
                      ]}
                    >
                      {cat}
                    </Text>
                  </Pressable>
                ))}
              </View>

              {/* Sort by */}
              <Text style={styles.modalOption}>Sort by</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Pressable
                  style={[
                    styles.chip,
                    sortBy === "lowToHigh" && styles.chipActive,
                  ]}
                  onPress={() => setSortBy("lowToHigh")}
                >
                  <Text
                    style={[
                      styles.chipText,
                      sortBy === "lowToHigh" && styles.chipTextActive,
                    ]}
                  >
                    Price: Low → High
                  </Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.chip,
                    sortBy === "highToLow" && styles.chipActive,
                  ]}
                  onPress={() => setSortBy("highToLow")}
                >
                  <Text
                    style={[
                      styles.chipText,
                      sortBy === "highToLow" && styles.chipTextActive,
                    ]}
                  >
                    Price: High → Low
                  </Text>
                </Pressable>
              </View>

              {/* Rating */}
              <Text style={styles.modalOption}>Minimum Rating</Text>
              <View style={{ flexDirection: "row" }}>
                {[3, 4, 5].map((r) => (
                  <Pressable
                    key={r}
                    style={[styles.chip, minRating === r && styles.chipActive]}
                    onPress={() => setMinRating(minRating === r ? null : r)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        minRating === r && styles.chipTextActive,
                      ]}
                    >
                      ⭐ {r}+
                    </Text>
                  </Pressable>
                ))}
              </View>

              {/* Modal Actions */}
              <View style={styles.modalActions}>
                <Pressable
                  style={[styles.modalBtn, { backgroundColor: "#ccc" }]}
                  onPress={resetFilters}
                >
                  <Text style={styles.modalBtnText}>Reset</Text>
                </Pressable>

                <Pressable
                  style={[styles.modalBtn, { backgroundColor: "#0072beff" }]}
                  onPress={applyFilters}
                >
                  <Text style={styles.modalBtnText}>Apply</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    // top:40
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 5,
  },
  topBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 2,
  },
  topBtnText: {
    color: "#0073c0ff",
    fontWeight: "600",
    marginLeft: 6,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
    marginBottom: 10,
  },
  tryAgainBtn: {
    backgroundColor: "#b1e0ffff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  tryAgainText: {
    color: "#00336cff",
    fontWeight: "600",
    fontSize: 16,
  },
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
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  modalOption: {
    fontSize: 16,
    marginVertical: 10,
    color: "#444",
  },
  chip: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 10,
  },
  chipActive: {
    backgroundColor: "#0073c0ff",
    borderColor: "#96d4feff",
  },
  chipText: {
    color: "#333",
    fontSize: 14,
  },
  chipTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
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
