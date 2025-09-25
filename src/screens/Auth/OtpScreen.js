// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";

// import { useSelector, useDispatch } from "react-redux";
// import { signIn } from "../../store/slice/AuthSlice";

// const OtpScreen = ({ route, navigation }) => {
//   const { phone } = route?.params || {};
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [timer, setTimer] = useState(30);

//   const isSignIn = useSelector((state) => state.auth.isSignIn);
//   const dispatch = useDispatch();

//   // Countdown timer
//   useEffect(() => {
//     if (timer > 0) {
//       const countdown = setTimeout(() => setTimer(timer - 1), 1000);
//       return () => clearTimeout(countdown);
//     }
//   }, [timer]);

//   const handleChange = (text, index) => {
//     let newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     // Auto-focus next box
//     if (text && index < 3) {
//       const nextInput = `otp${index + 1}`;
//       refs[nextInput]?.focus();
//     }
//   };

//   const handleVerify = () => {
//     const code = otp.join("");
//     if ( /^\d{4}$/.test(code)) {
//       alert("OTP Verified Successfully ✅");
//       dispatch(signIn())
//       navigation.navigate("BottomTabNavigation", { screen: "Home", })
//     } else {
//       alert("Enter valid 4-digit OTP");
//       setOtp(["", "", "", ""]);
//     }
//   };

//   const refs = {};

//   return (
//     <KeyboardAvoidingView
//       style={styles1.container}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text style={styles1.backArrow}>←</Text>
//       </TouchableOpacity>

//       <Text style={styles1.title}>OTP verification</Text>
//       <Text style={styles1.subtitle}>
//         We’ve sent a verification code to {"\n"}+91 {phone || "XXXXXXXXXX"}
//       </Text>

//       {/* OTP Inputs */}
//       <View style={styles1.otpContainer}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             ref={(input) => (refs[`otp${index}`] = input)}
//             style={styles1.otpBox}
//             value={digit}
//             onChangeText={(text) => handleChange(text, index)}
//             keyboardType="numeric"
//             maxLength={1}
//             textAlign="center"
//           />
//         ))}
//       </View>

//       {/* Verify Button */}
//       <TouchableOpacity
//         style={[
//           styles1.button,
//           { backgroundColor: otp.join("").length === 4 ? "#FF6600" : "#ccc" },
//         ]}
//         disabled={otp.join("").length !== 4}
//         onPress={handleVerify}
//       >
//         <Text style={styles1.buttonText}>Verify</Text>
//       </TouchableOpacity>

//       {/* Resend OTP */}
//       <TouchableOpacity
//         disabled={timer > 0}
//         onPress={() => {
//           setTimer(30);
//           alert("New OTP Sent");
//         }}
//       >
//         <Text style={styles1.resendText}>
//           {timer > 0 ? (`Resend OTP in ${timer}s`) : "Resend OTP"}
//         </Text>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//   );
// };

// export default OtpScreen;

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   backArrow: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 15,
//     color: "#555",
//     marginBottom: 30,
//   },
//   otpContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   otpBox: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     width: 60,
//     height: 60,
//     fontSize: 20,
//   },
//   button: {
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   resendText: {
//     textAlign: "center",
//     color: "#FF6600",
//     fontSize: 15,
//     fontWeight: "500",
//   },
// });
//-------------------------------------------------------

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const OtpScreen = ({ route, navigation }) => {
  const { confirmation, phone } = route.params; // From SignInScreen
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6-digit OTP
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  // Handle OTP change
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, ""); // Only digits
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Auto-focus previous if deleted
    if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify OTP with Firebase
  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      Alert.alert("Error", "Enter a valid 6-digit OTP");
      return;
    }
    try {
      await confirmation.confirm(code); // Firebase verification
      Alert.alert("Success", "Phone verified ✅");
      navigation.replace("BottomTabNavigation");
    } catch (error) {
      Alert.alert("Error", "Invalid OTP, try again");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();
    }
  };

  // Resend OTP
  const handleResend = () => {
    setTimer(30);
    Alert.alert("OTP Sent", `A new OTP has been sent to +91 ${phone}`);
    // You can also call confirmation again here if using Firebase phone auth
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit code sent to +91 {phone}
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.otpBox}
            textAlign="center"
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: otp.join("").length === 6 ? "#FF6600" : "#ccc" },
        ]}
        disabled={otp.join("").length !== 6}
        onPress={handleVerify}
      >
        <LinearGradient
          colors={["#FF7E5F", "#FF6600"]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Resend OTP */}
      <TouchableOpacity
        disabled={timer > 0}
        onPress={handleResend}
        style={{ marginTop: 10 }}
      >
        <Text style={[styles.resendText, timer > 0 && { color: "#999" }]}>
          {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
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
    width: 50,
    height: 50,
    fontSize: 20,
    backgroundColor: "#f9f9f9",
  },
  button: {
    borderRadius: 10,
    overflow: "hidden",
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  resendText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#FF6600",
  },
});
