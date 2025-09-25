import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

const SignInScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (/^[6-9]\d{9}$/.test(phone)) {
      navigation.navigate("OtpScreen", { phone });
      // OtpScreen(phone);
    } else {
      Alert.alert("Please enter a valid 10-digit phone number");
      setPhone("")
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
      <Text style={styles.title}>Enjoy your Day</Text>
      <Text style={styles.subtitle}>Log Up</Text>

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
        disabled={phone.length !== 10}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={{fontSize:25,alignItems:"center"}}>
        <Text style={{fontSize:20}}>Skip for  <TouchableOpacity onPress={() => {navigation.navigate("BottomTabNavigaiton", {
          screen : "Home"
        })}}>
          <Text style={{color:"#00f",top:7,fontSize:19}}>
            now
          </Text>
        </TouchableOpacity> </Text>
      </View>
      {/* Divider */}
      {/* <Text style={styles.orText}>OR</Text> */}

      {/* Google Button */}
      {/*<TouchableOpacity style={styles.googleButton}>
         <Image
           source={{
             uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
           }}
           style={styles.googleIcon}
         />
         <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity> */}
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
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
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
  orText: {
    textAlign: "center",
    marginBottom: 15,
    color: "#999",
  },
  googleButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
