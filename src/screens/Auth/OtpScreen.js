import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../store/slice/AuthSlice";

const OtpScreen = ({ route, navigation }) => {
  const { phone } = route?.params || {};
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  const isSignIn = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next box
    if (text && index < 3) {
      const nextInput = `otp${index + 1}`;
      refs[nextInput]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length === 4) {
      alert("OTP Verified Successfully ✅");
      dispatch(signIn())
      navigation.navigate("BottomTabNavigation", { screen: "Home", })
    } else {
      alert("Enter valid 4-digit OTP");
    }
  };

  const refs = {};

  return (
    <KeyboardAvoidingView
      style={styles1.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles1.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles1.title}>OTP verification</Text>
      <Text style={styles1.subtitle}>
        We’ve sent a verification code to {"\n"}+91 {phone || "XXXXXXXXXX"}
      </Text>

      {/* OTP Inputs */}
      <View style={styles1.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (refs[`otp${index}`] = input)}
            style={styles1.otpBox}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={[
          styles1.button,
          { backgroundColor: otp.join("").length === 4 ? "#FF6600" : "#ccc" },
        ]}
        disabled={otp.join("").length !== 4}
        onPress={handleVerify}
      >
        <Text style={styles1.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <TouchableOpacity
        disabled={timer > 0}
        onPress={() => {
          setTimer(30);
          alert("New OTP Sent");
        }}
      >
        <Text style={styles1.resendText}>
          {timer > 0 ? (`Resend OTP in ${timer}s`) : "Resend OTP"}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: 60,
    height: 60,
    fontSize: 20,
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
  resendText: {
    textAlign: "center",
    color: "#FF6600",
    fontSize: 15,
    fontWeight: "500",
  },
});