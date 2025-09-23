import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function OrderSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="checkmark-circle" size={100} color="#2f855a" />
      <Text style={styles.title}>Order Placed Successfully!</Text>
      <Text style={styles.subtitle}>Thank you for your purchase 🎉</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("BottomTabNavigation", {
                screen: "Home",
              })}
      >
        <Text style={styles.btnText}>Continue Shopping</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#444" }]}
        onPress={() => navigation.replace("OrderScreen")}
      >
        <Text style={styles.btnText}>View My Orders</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginTop: 20, color: "#111" },
  subtitle: { fontSize: 15, color: "#555", marginVertical: 8, textAlign: "center" },
  btn: {
    backgroundColor: "#2f855a",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 16,
  },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
