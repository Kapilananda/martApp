import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import { toggleFavorite } from "../../store/slice/FavoritesSlice";
import { addToCart } from "../../store/slice/CartSlice";

export default function FavoriteScreen({ navigation }) {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (item) => dispatch(toggleFavorite(item));
  const handleAddToCart = (item) => dispatch(addToCart(item));

  if (favorites.length === 0) {
    return (
      <View style={{flex:1,backgroundColor:"#eef9ffff"}}>
        <Text style={{ justifyContent: "flex-start", alignItems: "flex-start", fontSize: 22, fontWeight: "700", color: "#333", marginVertical: 15, marginLeft: 10, }}>❤️ My Favorites</Text>
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubText}>
            Browse products and tap the ❤️ to add them here.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={{ fontSize: 22, fontWeight: "700", color: "#333", marginVertical: 15, marginLeft: 10 }}>❤️ My Favorites</Text>

      {/* Favorites List */}
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}            // Full-width layout
        key="one-column"          // Force re-render to avoid numColumns error
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Image */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductDetails", { item })}
              style={styles.imageContainer}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>

            {/* Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.price}>₹ {item.price.toFixed(2)}</Text>

              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={[styles.iconBtn, { backgroundColor: "#fdecea" }]}
                  onPress={() => handleRemoveFavorite(item)}
                >
                  <Ionicons name="heart-dislike" size={20} color="#E53935" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.iconBtn, { backgroundColor: "#27ae60" }]}
                  onPress={() => handleAddToCart(item)}
                >
                  <Ionicons name="cart" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef9ffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor:"#eef9ffff",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    color: "#555",
  },
  emptySubText: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    width: "100%",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27ae60",
    marginTop: 4,
  },
  actionRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconBtn: {
    flex: 1,
    marginRight: 8,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
