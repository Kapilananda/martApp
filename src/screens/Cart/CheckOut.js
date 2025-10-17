import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';
import { addOrder } from '../../store/slice/OrdersSlice';
// import OnlinePaymentScreen from "../../screens/Home/OnlinePaymentScreen";

export default function CheckoutScreen({ navigation }) {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const defaultAddressArray = useSelector(
    state => state.address.defaultAddress,
  );
  const defaultAddress =
    Array.isArray(defaultAddressArray) && defaultAddressArray.length > 0
      ? defaultAddressArray[0]
      : null;

  const dispatch = useDispatch();

  const [discount, setDiscount] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const [PaymentMethod, setPaymentMethod] = useState('');

  const order = {
    id: uuid.v4(),
    date: new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
    }),
    category: cartItems[0]?.category || 'Uncategorized',
    status: 'processed',
    deliveryOtp: Math.floor(1000 + Math.random() * 9000),
    items: cartItems,
    totalPrice: totalPrice,
    address: defaultAddress || null,
    shipmentNo: uuid.v4(),
    paymentMethod: PaymentMethod,
  };

  const taxes = 50;
  const others = 0;
  const subtotal = totalPrice;

  const total = (subtotal + taxes + others).toFixed(2);
  const discountCalculation = total - total * (discount / 100);
  const grandTotal = discountApplied ? discountCalculation.toFixed(2) : total;

  const applyDiscount = () => {
    const match = discount.match(/\d+/);
    if (match && discount.trim() !== '') {
      setDiscountApplied(true);
      setDiscount(match[0].slice(0, 2));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={
          typeof item.image === 'number' ? item.image : { uri: item.image }
        }
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.subText}>Qty: {item.quantity}</Text>
      </View>
      <Text style={styles.price}>
        ₹
        {(
          (item.isDeal
            ? item.discount_price
            : Math.round(item.actual_price - item.discount_percentage)) *
          item.quantity
        ).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Icon name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        {/* Address Section */}
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <TouchableOpacity
          style={styles.addressCard}
          onPress={() => navigation.navigate('LocationScreen')}
        >
          {defaultAddress ? (
            <>
              <Text style={styles.addrName}>{defaultAddress.fullName}</Text>
              <Text style={styles.addrDetails}>
                {defaultAddress.house}, {defaultAddress.street},{' '}
                {defaultAddress.city}, {defaultAddress.state} -{' '}
                {defaultAddress.pincode}
              </Text>
              <Text style={styles.addrChange}>Change Address</Text>
            </>
          ) : (
            <Text style={styles.addrAdd}>Add Address</Text>
          )}
        </TouchableOpacity>

        {/* Cart Items */}
        <Text style={styles.sectionTitle}>Items</Text>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
          style={{ marginTop: 10 }}
        />

        {/* Discount */}
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

        {/* Summary */}
        <View style={styles.summary}>
          <Row label="Subtotal" value={`₹${subtotal.toFixed(2)}`} />
          <Row label="Delivery Charges" value={`₹${taxes.toFixed(2)}`} />
          <Row label="GST Taxes" value={`₹${taxes.toFixed(2)}`} />
          {discountApplied ? (
            <Row label="Discount" value={`${total}-${discount}%`} />
          ) : null}
          <Row label="Total" value={`IND ₹${grandTotal}`} bold totalStyle />
        </View>

        {/* Policies */}
        <View style={styles.policies}>
          <Text style={styles.policyText}>
            • Free shipping to UK, US, BD, Canada
          </Text>
          <Text style={styles.policyText}>
            • Easy return & exchange process
          </Text>
          <Text style={styles.policyText}>• 30-day return policy</Text>
        </View>

        {/* Payment Options */}
        <View style={styles.paymentRow}>
          <TouchableOpacity
            style={[styles.payBtn, { backgroundColor: '#027fd8ff' }]}
            onPress={() => {
              if (!defaultAddress) {
                Alert.alert('Address is Missing', 'Add your Address');
                return;
              }

              const orderWithPayment = {
                ...order,
                paymentMethod: 'Online Payment',
              };

              dispatch(addOrder(orderWithPayment));
              // navigation.navigate('OnlinePaymentScreen');
              navigation.navigate('OnlinePaymentScreen', {
                totalAmount: total,
                // items: cartItems, // array of items
                // address: selectedAddress, // shipping address
              });
            }}
          >
            <Text style={styles.payText}>Online Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.payBtn, { backgroundColor: '#001342ff' }]}
            onPress={() => {
              if (!defaultAddress) {
                Alert.alert('Address is Missing', 'Add your Address');
                return;
              }

              const orderWithPayment = {
                ...order,
                paymentMethod: 'Cash on Delivery',
              };

              dispatch(addOrder(orderWithPayment));
              navigation.navigate('OrderSuccessScreen');
            }}
          >
            <Text style={[styles.payText, { color: '#fff' }]}>
              Cash on Delivery
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Row = ({ label, value, bold, totalStyle }) => (
  <View style={styles.row}>
    <Text style={[styles.label, bold && { fontWeight: '700', fontSize: 16 }]}>
      {label}
    </Text>
    <Text
      style={[
        styles.value,
        bold && { fontWeight: '700', fontSize: 16 },
        totalStyle && { color: '#E64A19' },
      ]}
    >
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { fontSize: 18, fontWeight: '700', color: '#111' },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingTop: 20,
    color: '#111',
  },

  addressCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    marginTop: 10,
  },
  addrName: { fontSize: 15, fontWeight: '700', marginBottom: 3, color: '#111' },
  addrDetails: { fontSize: 14, color: '#555' },
  addrChange: { color: '#2563EB', marginTop: 5, fontWeight: '600' },
  addrAdd: { color: '#2563EB', fontWeight: '600' },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'center',
    backgroundColor: '#eee',
  },
  details: { flex: 1, marginLeft: 10 },
  title: { fontSize: 14, fontWeight: '600', color: '#333' },
  subText: { fontSize: 12, color: '#777', marginTop: 2 },
  price: { fontSize: 14, fontWeight: '700', color: '#2f855a' },

  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
  applyBtn: {
    backgroundColor: '#111',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  applyText: { color: '#fff', fontWeight: '600' },
  discountMsg: { marginLeft: 16, color: 'green', fontSize: 12 },

  summary: { marginHorizontal: 16, marginTop: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  label: { fontSize: 14, color: '#444' },
  value: { fontSize: 14, color: '#333' },

  policies: { margin: 16 },
  policyText: { fontSize: 13, color: '#555', marginVertical: 4 },

  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
  },
  payBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  payText: { fontWeight: '700', fontSize: 14, color: '#fff' },

  othersBtn: {
    backgroundColor: '#111',
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  othersText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
