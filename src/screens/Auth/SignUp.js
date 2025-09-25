import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";

import auth from "@react-native-firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Send OTP
  const handleContinue = async () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      Alert.alert("Error", "Enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      // Firebase OTP
      const confirmation = await auth().signInWithPhoneNumber("+91" + phone);

      setLoading(false);

      // Navigate to OTP screen
      navigation.navigate("OtpScreen", { confirmation, phone });
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", error.message);
      console.log("Firebase OTP error:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>Mart App</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Enter your phone number to continue</Text>

      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: phone.length === 10 ? "#FF6600" : "#ccc" },
        ]}
        disabled={phone.length !== 10 || loading}
        onPress={handleContinue}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send OTP</Text>
        )}
      </TouchableOpacity>

      {/* Login redirect */}
      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoCircle: {
    backgroundColor: "#FF6600",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  logoText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  prefix: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#555",
  },
  loginLink: {
    fontSize: 16,
    color: "#FF6600",
    fontWeight: "700",
  },
});
