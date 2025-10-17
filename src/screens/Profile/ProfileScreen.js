import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Switch,
  Modal,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setEmail,
  setPhone,
  setProfileImage,
  setNotificationsEnabled,
  setDarkModeEnabled,
  toggleEditing,
} from "../../store/slice/ProfileSlice";
import { resetProfile } from '../../store/slice/ProfileSlice';

export default function ProfileScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (Platform.OS === "android") {
      requestAndroidPermissions();
    }
  }, []);

  const handleSignOut = () => {
  dispatch(resetProfile()); // clear redux state
  Alert.alert("Signed Out", "Your profile has been cleared!");
  // optionally navigate to login screen
  navigation.replace("LoginScreen"); // if you have a login screen
};

  const requestAndroidPermissions = async () => {
    try {
      const permissionsToRequest = [PermissionsAndroid.PERMISSIONS.CAMERA];
      if (Platform.Version >= 33) {
        permissionsToRequest.push(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        );
      } else {
        permissionsToRequest.push(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
      }
      const granted = await PermissionsAndroid.requestMultiple(
        permissionsToRequest
      );
      const allPermissionsGranted = Object.values(granted).every(
        (status) => status === PermissionsAndroid.RESULTS.GRANTED
      );
      if (!allPermissionsGranted) {
        Alert.alert(
          "Permissions Required",
          "Camera and storage permissions are required to select a profile photo. Please grant them in your device settings."
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Pick image from gallery
  const pickImageFromGallery = async () => {
    const options = { mediaType: "photo", quality: 1 };
    const result = await launchImageLibrary(options);
    if (result.didCancel) return;
    if (result.errorCode) {
      Alert.alert("Error", result.errorMessage || "Failed to pick image");
    } else if (result.assets && result.assets.length > 0) {
      dispatch(setProfileImage(result.assets[0].uri));
      setModalVisible(false);
    }
  };

  // Take photo with camera
  const takePhotoWithCamera = async () => {
    const options = {
      mediaType: "photo",
      quality: 1,
      saveToPhotos: true,
      cameraType: "front",
    };
    const result = await launchCamera(options);
    if (result.didCancel) return;
    if (result.errorCode) {
      Alert.alert("Error", result.errorMessage || "Failed to take photo");
    } else if (result.assets && result.assets.length > 0) {
      dispatch(setProfileImage(result.assets[0].uri));
      setModalVisible(false);
    }
  };

  const saveProfile = () => {
    if (!profile.name.trim()) {
      Alert.alert("Validation Error", "Name is required!");
      return;
    }
    if (!profile.email.trim()) {
      Alert.alert("Validation Error", "Email is required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(profile.email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return;
    }
    dispatch(toggleEditing());
    Alert.alert("Success", "Profile updated successfully! 🎉");
  };

  const showImagePickerOptions = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#03020e" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#03030f",
                marginLeft: 8,
              }}
            >
              Profile
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              profile.isEditing ? saveProfile() : dispatch(toggleEditing())
            }
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>
              {profile.isEditing ? "Save" : "Edit"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <View style={styles.profileSection}>
          <TouchableOpacity
            onPress={profile.isEditing ? showImagePickerOptions : null}
          >
            <View style={styles.imageContainer}>
              {profile.profileImage ? (
                <Image
                  source={{ uri: profile.profileImage }}
                  style={styles.profileImage}
                />
              ) : (
                <View style={styles.placeholderImage}>
                  <Ionicons name="person" size={60} color="#fff" />
                </View>
              )}
              {profile.isEditing && (
                <View style={styles.cameraIcon}>
                  <Ionicons name="camera" size={20} color="#fff" />
                </View>
              )}
            </View>
          </TouchableOpacity>

          {!profile.isEditing ? (
            <>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.username}>{profile.email}</Text>
            </>
          ) : (
            <Text style={styles.editHint}>Tap image to change</Text>
          )}
        </View>

        {/* Profile Details */}
        <View style={styles.detailsCard}>
          <Text style={styles.cardTitle}>Personal Information</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            {profile.isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.name}
                onChangeText={(text) => dispatch(setName(text))}
              />
            ) : (
              <Text style={styles.value}>{profile.name}</Text>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            {profile.isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.email}
                onChangeText={(text) => dispatch(setEmail(text))}
              />
            ) : (
              <Text style={styles.value}>{profile.email}</Text>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            {profile.isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.phone}
                onChangeText={(text) => dispatch(setPhone(text))}
              />
            ) : (
              <Text style={styles.value}>{profile.phone}</Text>
            )}
          </View>
        </View>

        {/* Preferences */}
        <View style={styles.detailsCard}>
          <Text style={styles.cardTitle}>Preferences</Text>
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceText}>
              <Ionicons name="notifications" size={22} color="#6C63FF" />
              <Text style={styles.preferenceLabel}>Push Notifications</Text>
            </View>
            <Switch
              value={profile.notificationsEnabled}
              onValueChange={(val) => dispatch(setNotificationsEnabled(val))}
              trackColor={{ false: "#767577", true: "#6C63FF" }}
            />
          </View>

          <View style={styles.preferenceItem}>
            <View style={styles.preferenceText}>
              <Ionicons name="moon" size={22} color="#6C63FF" />
              <Text style={styles.preferenceLabel}>Dark Mode</Text>
            </View>
            <Switch
              value={profile.darkModeEnabled}
              onValueChange={(val) => dispatch(setDarkModeEnabled(val))}
              trackColor={{ false: "#767577", true: "#6C63FF" }}
            />
          </View>
        </View>

        {/* Additional Options */}
        <View style={styles.detailsCard}>
          <Text style={styles.cardTitle}>More</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate("BottomTabNavigation", {
                screen: "Favourite",
              })
            }
          >
            <View style={styles.menuText}>
              <FontAwesome name="heart" size={22} color="#FF6B6B" />
              <Text style={styles.menuLabel}>Favorites</Text>
            </View>
            <Entypo name="chevron-right" size={22} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("OrderScreen");
            }}
          >
            <View style={styles.menuText}>
              <Ionicons name="document-text" size={22} color="#4ECDC4" />
              <Text style={styles.menuLabel}>Order History</Text>
            </View>
            <Entypo name="chevron-right" size={22} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("LocationScreen");
            }}
          >
            <View style={styles.menuText}>
              <Ionicons name="location" size={22} color="#FF9F1C" />
              <Text style={styles.menuLabel}>Addresses</Text>
            </View>
            <Entypo name="chevron-right" size={22} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}
          onPress={()=> navigation.navigate('OnlinePaymentScreen')}
          >
            <View style={styles.menuText}>
              <MaterialIcons name="payment" size={22} color="#6C63FF" />
              <Text style={styles.menuLabel}>Payment Methods</Text>
            </View>
            <Entypo name="chevron-right" size={22} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Sign Out */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Image Picker Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Profile Photo</Text>
            <TouchableOpacity style={styles.modalOption} onPress={takePhotoWithCamera}>
              <Ionicons name="camera" size={24} color="#6C63FF" />
              <Text style={styles.modalOptionText}>Take Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalOption} onPress={pickImageFromGallery}>
              <Ionicons name="image" size={24} color="#6C63FF" />
              <Text style={styles.modalOptionText}>Choose from Library</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalOption, styles.cancelOption]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelOptionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Styles remain the same
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  scrollContainer: { paddingBottom: 30 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 15, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#eee" },
  editButton: { paddingHorizontal: 15, paddingVertical: 8 },
  editButtonText: { color: "#6C63FF", fontSize: 16, fontWeight: "600" },
  profileSection: { alignItems: "center", paddingVertical: 25, backgroundColor: "#fff", marginBottom: 15 },
  imageContainer: { position: "relative", marginBottom: 15 },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: "#6C63FF" },
  placeholderImage: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#6C63FF", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: "#6C63FF" },
  cameraIcon: { position: "absolute", bottom: 0, right: 0, backgroundColor: "#6C63FF", borderRadius: 20, width: 40, height: 40, justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: "#fff" },
  name: { fontSize: 24, fontWeight: "700", color: "#333", marginBottom: 5 },
  username: { fontSize: 16, color: "#6C63FF", marginBottom: 10 },
  editHint: { fontSize: 14, color: "#999", marginTop: 5 },
  detailsCard: { backgroundColor: "#fff", borderRadius: 15, padding: 20, marginHorizontal: 15, marginBottom: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "#333", marginBottom: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", color: "#555", marginBottom: 5 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, fontSize: 16, backgroundColor: "#f9f9f9" },
  value: { fontSize: 16, padding: 12, backgroundColor: "#f9f9f9", borderRadius: 10, color: "#333" },
  preferenceItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12 },
  preferenceText: { flexDirection: "row", alignItems: "center" },
  preferenceLabel: { fontSize: 16, marginLeft: 15, color: "#444" },
  menuItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
  menuText: { flexDirection: "row", alignItems: "center" },
  menuLabel: { fontSize: 16, marginLeft: 15, color: "#444" },
  signOutButton: { backgroundColor: "#fff", marginHorizontal: 15, padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10, borderWidth: 1, borderColor: "#ff6b6b" },
  signOutText: { color: "#ff6b6b", fontSize: 16, fontWeight: "600" },
  modalContainer: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "600", marginBottom: 20, color: "#333" },
  modalOption: { flexDirection: "row", alignItems: "center", paddingVertical: 15, width: "100%", borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
  modalOptionText: { fontSize: 16, marginLeft: 15, color: "#333" },
  cancelOption: { justifyContent: "center", borderBottomWidth: 0, marginTop: 10 },
  cancelOptionText: { fontSize: 16, fontWeight: "600", color: "#ff6b6b" },
});
