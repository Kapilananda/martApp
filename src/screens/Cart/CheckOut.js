import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import { addRecentOrder } from "../../store/slice/RecentOrderSlice";

const { width } = Dimensions.get("window");

export default function CheckoutScreen({ navigation }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const [discount, setDiscount] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const taxes = 50; // dummy taxes (replace with logic if needed)
  const others = 0;
  const subtotal = totalPrice;
  const grandTotal = (subtotal + taxes + others).toFixed(2);

  const applyDiscount = () => {
    if (discount.trim() !== "") {
      setDiscountApplied(true);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        {/* <Text style={styles.subText}>Weight: 1</Text> */}
        <Text style={styles.subText}>Qty: {item.quantity}</Text>
      </View>
      <Text style={styles.price}>
        ₹{Number(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔙 Header with back */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Check out</Text>
        <View style={{ width: 32 }} /> {/* Empty for alignment */}
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 🛒 Cart Items */}
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
          style={{ marginTop: 10 }}
        />

        {/* 💸 Discount */}
        <View style={styles.discountRow}>
          <TextInput
            placeholder="Discount code"
            value={discount}
            onChangeText={setDiscount}
            style={styles.input}
          />
          <TouchableOpacity style={styles.applyBtn} onPress={applyDiscount}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
        {discountApplied && (
          <Text style={styles.discountMsg}>✔ Discount Applied</Text>
        )}

        {/* 📊 Summary */}
        <View style={styles.summary}>
          <Row label="Subtotal" value={`₹${subtotal.toFixed(2)}`} />
          <Row label="Delevery Charges" value={`₹${taxes.toFixed(2)}`} />
          <Row label="Others Fees" value={`₹${others.toFixed(2)}`} />
          <Row
            label="Total"
            value={`IND ₹${grandTotal}`}
            bold
            totalStyle={true}
          />
        </View>

        {/* 📌 Policies */}
        <View style={styles.policies}>
          <Text style={styles.policyText}>• Free shipping to UK, US, BD, Canada</Text>
          <Text style={styles.policyText}>
            • Simple and convenient return and exchange process
          </Text>
          <Text style={styles.policyText}>• 30 days return policy</Text>
        </View>


        {/* 💳 Payment Options */}
        <View style={styles.paymentRow}>
          <TouchableOpacity
            style={[styles.payBtn, { backgroundColor: "#6C47FF" }]}
          >
            <Text style={styles.payText}>shopPay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.payBtn, { backgroundColor: "#FFCC00" }]}
          >
            <Text style={[styles.payText, { color: "#000" }]}>PayPal</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.othersBtn]} onPress={ ()=> { dispatch(addRecentOrder(cartItems)),navigation.navigate("OrderSuccessScreen" ,navigation)}}>
          <Text style={styles.othersText}>Cash On Delivery</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Row = ({ label, value, bold, totalStyle }) => (
  <View style={styles.row}>
    <Text style={[styles.label, bold && { fontWeight: "700", fontSize: 16 }]}>
      {label}
    </Text>
    <Text
      style={[
        styles.value,
        bold && { fontWeight: "700", fontSize: 16 },
        totalStyle && { color: "#E64A19" },
      ]}
    >
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // 🔹 Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: { fontSize: 18, fontWeight: "700", color: "#111" },

  // 🔹 Cart Item
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  image: { width: 70, height: 70, borderRadius: 8, resizeMode: "center", backgroundColor: "#eee" },
  details: { flex: 1, marginLeft: 10 },
  title: { fontSize: 14, fontWeight: "600", color: "#333" },
  subText: { fontSize: 12, color: "#777", marginTop: 2 },
  price: { fontSize: 14, fontWeight: "700", color: "#000" },

  // 🔹 Discount
  discountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
  applyBtn: {
    backgroundColor: "#111",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  applyText: { color: "#fff", fontWeight: "600" },
  discountMsg: { marginLeft: 16, color: "green", fontSize: 12 },

  // 🔹 Summary
  summary: { marginHorizontal: 16, marginTop: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  label: { fontSize: 14, color: "#444" },
  value: { fontSize: 14, color: "#333" },

  // 🔹 Policies
  policies: { margin: 16 },
  policyText: { fontSize: 13, color: "#555", marginVertical: 4 },

  // 🔹 Payment Buttons
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 20,
  },
  payBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  payText: { fontWeight: "700", fontSize: 14, color: "#fff" },

  othersBtn: {
    backgroundColor: "#000",
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  othersText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});
