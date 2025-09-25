import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  addAddress,
  setDefaultAddress,
  removeAddress,
} from "../../store/slice/AddressSlice";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Marker,PROVIDER_GOOGLE  } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

export default function LocationScreen({ navigation }) {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses);
  const defaultAddressArray = useSelector(
    (state) => state.address.defaultAddress
  );
  const defaultAddress =
    Array.isArray(defaultAddressArray) && defaultAddressArray.length > 0
      ? defaultAddressArray[0]
      : null;


  //__________________________validation_____________________________
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!manualAddress.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!/^[6-9]\d{9}$/.test(manualAddress.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
      valid = false;
    }

    if (!manualAddress.house.trim()) {
      newErrors.house = "House / Flat No. is required";
      valid = false;
    }

    if (!manualAddress.street.trim()) {
      newErrors.street = "Street is required";
      valid = false;
    }

    if (!manualAddress.city.trim()) {
      newErrors.city = "City is required";
      valid = false;
    }

    if (!manualAddress.state.trim()) {
      newErrors.state = "State is required";
      valid = false;
    }

    if (!manualAddress.country.trim()) {
      newErrors.country = "Country is required";
      valid = false;
    }

    if (!/^\d{6}$/.test(manualAddress.pincode)) {
      newErrors.pincode = "Enter valid 6-digit pincode";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  //__________________________validation__ end___________________________
  const [modalVisible, setModalVisible] = useState(false);
  const [manualAddress, setManualAddress] = useState({
    fullName: "",
    mobile: "",
    house: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    type: "",
  });
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // const requestPermission = async () => {
  //   if (Platform.OS === "android") {
  //     const granted = await PermissionsAndroid.requestMultiple([
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //     ]);
  //     return (
  //       granted["android.permission.ACCESS_FINE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED ||
  //       granted["android.permission.ACCESS_COARSE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED
  //     );
  //   } else {
  //     return await Geolocation.requestAuthorization("whenInUse");
  //   }
  // };
  const requestPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      return (
        granted["android.permission.ACCESS_FINE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED ||
        granted["android.permission.ACCESS_COARSE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED
      );
    } else {
      return await Geolocation.requestAuthorization("whenInUse");
    }
  };


  // const fetchCurrentLocation = async () => {
  //   const hasPermission = await requestPermission();
  //   if (!hasPermission) {
  //     setErrorMsg("Permission denied");
  //     return;
  //   }
  //   setLoadingLocation(true);
  //   Geolocation.getCurrentPosition(
  //     async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setRegion({
  //         latitude,
  //         longitude,
  //         latitudeDelta: 0.01,
  //         longitudeDelta: 0.01,
  //       });

  //       try {
  //         const res = await fetch(
  //           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
  //           {
  //             headers: { "User-Agent": "martApp/1.0" },
  //           }
  //         );
  //         const data = await res.json();
  //         setManualAddress((prev) => ({
  //           ...prev,
  //           street:
  //             data.address.road || data.address.neighbourhood || prev.street,
  //           city:
  //             data.address.city ||
  //             data.address.town ||
  //             data.address.village ||
  //             prev.city,
  //           state: data.address.state || prev.state,
  //           country: data.address.country || prev.country,
  //           pincode: data.address.postcode || prev.pincode,
  //         }));
  //       } catch (err) {
  //         setErrorMsg("Unable to fetch address details");
  //       }
  //       setLoadingLocation(false);
  //     },
  //     (error) => {
  //       setErrorMsg(error.message || "Unable to fetch location");
  //       setLoadingLocation(false);
  //     },
  //     { enableHighAccuracy: false, timeout: 20000, maximumAge: 5000 }
  //   );
  //   useFocusEffect(
  //     useCallback(() => {
  //       fetchCurrentLocation();
  //     }, [])
  //   );

  //   // Auto fetch again when modal opens
  //   useEffect(() => {
  //     if (modalVisible) {
  //       fetchCurrentLocation();
  //     }
  //   }, [modalVisible]);
  // };
  //___________editted
  // const fetchCurrentLocation = async () => {
  //   const hasPermission = await requestPermission();
  //   if (!hasPermission) {
  //     setErrorMsg("Permission denied");
  //     return;
  //   }

  //   setLoadingLocation(true);

  //   Geolocation.getCurrentPosition(
  //     async (position) => {
  //       const { latitude, longitude } = position.coords;

  //       // Update map region
  //       setRegion({
  //         latitude,
  //         longitude,
  //         latitudeDelta: 0.01,
  //         longitudeDelta: 0.01,
  //       });

  //       try {
  //         // Reverse geocode using OpenStreetMap
  //         const res = await fetch(
  //           "https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1",
  //           {
  //             headers: {
  //               "User-Agent": "martApp/1.0", // Required by OSM
  //             },
  //           }
  //         );

  //         const data = await res.json();
  //         console.log("OSM response:", data);

  //         // Autofill manual address fields
  //         setManualAddress((prev) => ({
  //           ...prev,
  //           street: data.address.road || data.address.neighbourhood || "",
  //           city:
  //             data.address.city ||
  //             data.address.town ||
  //             data.address.village ||
  //             "",
  //           state: data.address.state || "",
  //           country: data.address.country || "",
  //           pincode: data.address.postcode || "",
  //         }));
  //       } catch (err) {
  //         console.error("Reverse geocode error:", err);
  //         setErrorMsg("Unable to fetch address details");
  //       }

  //       setLoadingLocation(false);
  //     },
  //     (error) => {
  //       console.error("Location error:", error);
  //       setErrorMsg(error.message || "Unable to fetch location");
  //       setLoadingLocation(false);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 20000,       // ⬆ Increased
  //       maximumAge: 5000,  // Cached result if available
  //       forceRequestLocation: true, // Makes sure fresh request
  //       showLocationDialog: true, // On Android, opens GPS dialog
  //     }
  //   );
  // };
  const fetchCurrentLocation = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      setErrorMsg("Permission denied");
      return;
    }

    setLoadingLocation(true);

    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        if (typeof latitude !== "number" || typeof longitude !== "number") {
          setErrorMsg("Invalid coordinates received");
          setLoadingLocation(false);
          return;
        }

        // Update map region
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        try {
          // Use template literal properly
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: { "User-Agent": "martApp/1.0" }, // Required by OSM
            }
          );

          const data = await res.json();
          console.log("OSM response:", data);

          const addr = data.address || {};
          const display = data.display_name || {};

          // Autofill manual address fields safely
          setManualAddress((prev) => ({
            ...prev,
            street: addr.quarter || addr.neighbourhood || prev.street,
            // street: display,
            city: addr.city || addr.town || addr.village || addr.county || prev.city,
            state: addr.state || prev.state,
            country: addr.country || prev.country,
            pincode: addr.postcode || prev.pincode,
          }));
        } catch (err) {
          console.error("Reverse geocode error:", err);
          setErrorMsg("Unable to fetch address details");
        }

        setLoadingLocation(false);
      },
      (error) => {
        console.error("Location error:", error);
        setErrorMsg(error.message || "Unable to fetch location");
        setLoadingLocation(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 5000,
      }
    );
  };


  const saveAddress = () => {
    const required = [
      "fullName",
      "mobile",
      "house",
      "street",
      "city",
      "state",
      "country",
      "pincode",
      "type",
    ];

    // basic required check
    for (let field of required) {
      if (!manualAddress[field] || manualAddress[field].trim() === "") {
        // Alert.alert("Error", `Please enter ${field}`);
        ToastAndroid.showWithGravity(`Error Please Enter ${field}`, ToastAndroid.SHORT, ToastAndroid.CENTER)
        return;
      }
    }

    // mobile validation
    if (!/^[6-9]\d{9}$/.test(manualAddress.mobile)) {
      Alert.alert("Error", "Please enter a valid 10-digit mobile number");
      return;
    }

    // pincode validation
    if (!/^\d{6}$/.test(manualAddress.pincode)) {
      Alert.alert("Error", "Please enter a valid 6-digit pincode");
      return;
    }

    // everything valid → save
    const newAddr = { id: Date.now().toString(), ...manualAddress };
    dispatch(addAddress(newAddr));
    setModalVisible(false);
    resetForm();
  };

  // const saveAddress = () => {
  //   const required = [
  //     "fullName",
  //     "mobile",
  //     "house",
  //     "street",
  //     "city",
  //     "state",
  //     "country",
  //     "pincode",
  //     "type",
  //   ];
  //   for (let field of required) {
  //     if (!manualAddress[field]) {
  //       Alert.alert("Error", `Please enter ${field}`);
  //       return;
  //     }
  //   }
  //   const newAddr = { id: Date.now(), ...manualAddress };
  //   dispatch(addAddress(newAddr));
  //   setModalVisible(false);
  //   resetForm();
  // };

  const resetForm = () => {
    setManualAddress({
      fullName: "",
      mobile: "",
      house: "",
      street: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      type: "",
    });
    setRegion(null);
    setErrorMsg("");
  };

  return (
    <View style={{ flex: 1, padding: 20, marginBottom: 20 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#007aa2ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Addresses</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="add" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Default Address */}
      {defaultAddress && (
        <View style={[styles.addressCard, styles.defaultCard]}>
          <Text style={styles.addrName}>{defaultAddress.fullName}</Text>
          <Text>{defaultAddress.mobile}</Text>
          <Text style={styles.addrDetails}>
            {defaultAddress.house}, {defaultAddress.street},{" "}
            {defaultAddress.city}, {defaultAddress.state},{" "}
            {defaultAddress.country} - {defaultAddress.pincode}
          </Text>
          <Text style={styles.addrType}>Type: {defaultAddress.type}</Text>
          {/* <TouchableOpacity
            style={styles.changeBtn}
            onPress={() => navigation.navigate("LocationScreen")}
          >
            <Text style={{ color: "#007aa2ff", fontWeight: "bold" }}>
              Change Address
            </Text>
          </TouchableOpacity> */}
        </View>
      )}
      <Text> Select Any Other</Text>
      {/* Saved Addresses List */}
      <ScrollView style={{ marginTop: 10, }}>
        {addresses.map((item) => (
          <View key={item.id} style={styles.addressCard}>
            <Text style={styles.addrName}>{item.fullName}</Text>
            <Text>{item.mobile}</Text>
            <Text style={styles.addrDetails}>
              {item.house}, {item.street}, {item.city}, {item.state},{" "}
              {item.country} - {item.pincode}
            </Text>
            <Text style={styles.addrType}>Type: {item.type}</Text>
            <View style={styles.actionRow}>




              defaultAddress.id === item.id ? null :
              (
              <TouchableOpacity
                style={styles.deliverButton}
                onPress={() => {
                  dispatch(setDefaultAddress([item]));
                  ToastAndroid.showWithGravity("Delivering Address is Selected", ToastAndroid.SHORT, ToastAndroid.CENTER)
                  navigation.goBack();
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Deliver Here
                </Text>
              </TouchableOpacity>
              )
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => dispatch(removeAddress(item.id))}
              >
                <Text style={{ color: "#007aa2ff", fontWeight: "bold" }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Address</Text>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={fetchCurrentLocation}
            >
              <Icon name="location-sharp" size={18} color="#007aa2ff" />
              <Text style={{ marginLeft: 10 }}>
                {loadingLocation ? "Fetching..." : "Use Current Location"}
              </Text>
            </TouchableOpacity>
            {errorMsg ? (
              <Text style={{ color: "red", marginVertical: 5 }}>{errorMsg}</Text>
            ) : <Text></Text>}

            {/* {region && (
              <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE}>
                <Marker
                  coordinate={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                  }}
                />
              </MapView>
            )}   */}

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 10,
                color: "#333",
              }}
            >
              Enter Address
            </Text>
            {/* //________________Editted______________ */}
            {/* {Object.keys(manualAddress).map((field, index) => (
              <TextInput
                key={field}
                style={styles.input}
                placeholder={
                  field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
                }
                keyboardType={
                  field === "mobile" || field === "pincode"
                    ? "numeric"
                    : "default"
                }
                value={manualAddress[field]}
                onChangeText={(text) =>
                  setManualAddress({ ...manualAddress, [field]: text })
                }
              />
            ))} */}
            {Object.keys(manualAddress).map((field, index) => (
              <View key={`${field}-${index}`} style={{ marginBottom: 10 }}>
                <TextInput
                  style={[
                    styles.input,
                    errors[field] ? { borderColor: "red" } : null
                  ]}
                  placeholder={
                    field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
                  }
                  keyboardType={
                    field === "mobile" || field === "pincode"
                      ? "numeric"
                      : "default"
                  }
                  value={manualAddress[field]}
                  onChangeText={(text) =>
                    setManualAddress({ ...manualAddress, [field]: text })
                  }
                />
                {errors[field] && (
                  <Text style={{ color: "red", fontSize: 12 }}>
                    {errors[field]}
                  </Text>
                )}
              </View>
            ))}
            {/* ________________Editted____end__________ */}

            <TouchableOpacity style={styles.saveButton} onPress={saveAddress}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Save Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => {
                setModalVisible(false);
                resetForm();
              }}
            >
              <Text
                style={{
                  color: "#007aa2ff",
                  fontWeight: "bold",
                  textAlign: "center",

                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#333" },
  addButton: {
    flexDirection: "row",
    backgroundColor: "#007aa2ff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", marginLeft: 5, fontWeight: "bold" },
  addressCard: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  defaultCard: { borderColor: "#007aa2ff", borderWidth: 2 },
  addrName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  addrDetails: { color: "#555", marginVertical: 5 },
  addrType: { fontStyle: "italic", color: "#777" },
  actionRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  deliverButton: {
    flex: 1,
    backgroundColor: "#007aa2ff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButton: {
    justifyContent: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#007aa2ff",
    borderRadius: 8,
  },
  changeBtn: { marginTop: 10 },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#333" },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#f1f1f1",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  saveButton: {
    backgroundColor: "#007aa2ff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  cancelBtn: {
    borderRadius: 7,
    padding: 12,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#007aa2ff",
    marginBottom: 30,
  },
  map: { width: "100%", height: 200, marginVertical: 10 },
});
