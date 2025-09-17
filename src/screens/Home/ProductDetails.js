import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

export default function itemDetails({ route, navigation }) {
  const { item } = route.params;
  // console.log(`hello ${item}`);
  
  const [quantity, setQuantity] = useState(1);

  // ⭐ Dynamic Rating Renderer
  const renderStars = (rating) => {
    if (!rating) return <Text style={styles.noRating}>No rating</Text>;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <AntDesign key={`full-${i}`} name="star" size={18} color="#FF9800" />
          ))}
        {halfStar && <AntDesign name="staro" size={18} color="#FF9800" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <AntDesign key={`empty-${i}`} name="staro" size={18} color="#ccc" />
          ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Buttons */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Text>&lt; Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="hearto" size={20} color="#E91E63" />
          </TouchableOpacity>
        </View>

        {/* item Image */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>

        {/* item Info */}
        <View style={styles.infoCard}>
          <Text style={styles.title}>{item.title}</Text>

          {/* Rating */}
          <View style={styles.ratingRow}>
            {renderStars(item.rating?.rate)}
            <Text style={styles.ratingValue}>
              ({item.rating?.count ?? 0} reviews)
            </Text>
          </View>

          {/* Price & Quantity */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹ {item.price}</Text>

            <View style={styles.qtyBox}>
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Text style={styles.qtyBtn}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{quantity} KG</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Text style={styles.qtyBtn}>＋</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>item Details</Text>
          <Text style={styles.description}>{item.description}</Text>

          {/* Related items */}
          <Text style={styles.sectionTitle}>Related items</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[...Array(3)].map((_, i) => (
              <View key={i} style={styles.relatedCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.relatedImg}
                />
                <Text style={styles.relatedPrice}>₹ {item.price}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.totalPrice}>
            ₹ {(item.price * quantity).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={["#4CAF50", "#2E7D32"]}
            style={styles.addButton}
          >
            <MaterialIcons name="shopping-cart" size={20} color="#fff" />
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },

  headerRow: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent:'center',
  },

  imageWrapper: {
    alignItems: "center",
    backgroundColor: "#E8FCE8",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 50,
    marginBottom: 10,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: "contain",
  },

  infoCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    elevation: 5,
  },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 6, color: "#222" },

  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  ratingValue: { marginLeft: 6, fontSize: 14, color: "#666" },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  price: { fontSize: 28, fontWeight: "bold", color: "#4CAF50" },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  qtyBtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginHorizontal: 8,
  },
  qtyText: { fontSize: 14, fontWeight: "600" },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
    marginBottom: 20,
  },

  relatedCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    marginRight: 12,
    elevation: 4,
    alignItems: "center",
    width: 120,
    marginBottom:10
  },
  relatedImg: { width: 80, height: 80, resizeMode: "contain" },
  relatedPrice: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 15,
  },
  totalText: { fontSize: 14, color: "#777" },
  totalPrice: { fontSize: 20, fontWeight: "bold", color: "#333" },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 8,
  },
});