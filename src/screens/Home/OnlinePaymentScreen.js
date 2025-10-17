import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { paymentVerify } from '../../store/slice/PaymentSlice'; // adjust your import
// import colors from '../../constants/colors'; // your colors file
// import OrderSuccessScreen from '../../screens/Orders/OrdersSuccessScreen';
import { addOrder } from '../../store/slice/OrdersSlice';
import OrderSuccessScreen from '../Orders/OrdersSuccessScreen';

const OnlinePaymentScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(state => state.profile || {});

  // const [price, setPrice] = useState('');
  const route = navigation
    ?.getState?.()
    ?.routes?.find(r => r.name === 'OnlinePaymentScreen');
  const amountFromCheckout = route?.params?.totalAmount || 0;
  const [price, setPrice] = useState(amountFromCheckout.toString());

  const [loading, setLoading] = useState(false);

  // const onPayment = async () => {
  //   if (!price || isNaN(price) || Number(price) <= 0) {
  //     return Alert.alert('Invalid Amount', 'Please enter a valid amount');
  //   }

  //   try {
  //     setLoading(true);

  //     const options = {
  //       description: 'Credits towards consultation',
  //       currency: 'INR',
  //       key: 'rzp_test_nfY709knHa5l4u', // your Razorpay key
  //       amount: parseInt(price) * 100, // amount in paise
  //       name: name || 'User',
  //       prefill: {
  //         email: email || 'test@example.com',
  //         contact: phone || '9999999999',
  //         name: name || 'User',
  //       },
  //       // theme: { color: colors?.primary || "#4C63B6" },
  //       theme: { color: '#4C63B6' },
  //       method: {
  //         upi: true,
  //         card: true,
  //         netbanking: true,
  //         wallet: true, // wallets like PhonePe Wallet
  //       },
  //     };

  //     RazorpayCheckout.open(options)
  //       .then(async data => {
  //         try {
  //           // You can still dispatch your verification if needed
  //           const resultAction = await dispatch(
  //             paymentVerify({
  //               razorpay_payment_id: data.razorpay_payment_id,
  //               // razorpay_order_id: data.razorpay_order_id || null ,
  //               // razorpay_signature: data.razorpay_signature || null,
  //             }),
  //           );
  //           const result = resultAction.payload;

  //           console.log('Verification result:', result);

  //           if (result.message_type === 'success') {
  //             Toast.show({
  //               type: 'success',
  //               text1: 'Payment Verified',
  //               text2: result?.message || 'Payment successful',
  //               visibilityTime: 2000,
  //               onHide: () => navigation.navigate('BottomTabNavigations'),
  //             });
  //             navigation.replace('OrderSuccessScreen');
  //             // setTimeout(() => {
  //             //   navigation.replace('OrderSuccessScreen'); // ✅ replace instead of navigate
  //             // }, 100);
  //           } else {
  //             Toast.show({
  //               type: 'error',
  //               text1: 'Payment Verification Failed',
  //               text2: result?.message || 'Verification failed',
  //             });
  //           }
  //         } catch (verifyErr) {
  //           console.error('Verify Failed:', verifyErr);
  //           Toast.show({
  //             type: 'error',
  //             text1: 'Payment Verification Error',
  //             text2: verifyErr?.message || 'Verification failed',
  //           });
  //         } finally {
  //           setLoading(false);
  //         }
  //       })
  //       .catch(error => {
  //         setLoading(false);
  //         console.error('Razorpay Error:', error);
  //         Alert.alert(
  //           'Payment Failed',
  //          ` ${error.description || 'Something went wrong nee bonda'}`,
  //         );
  //       });
  //   } catch (err) {
  //     setLoading(false);
  //     console.error('Payment error:', err);
  //     Alert.alert('Error', 'Something went wrong during payment');
  //   }
  // };

  // const onPayment = async () => {
  //   if (!price || isNaN(price) || Number(price) <= 0) {
  //     return Alert.alert('Invalid Amount', 'Please enter a valid amount');
  //   }

  //   try {
  //     setLoading(true);

  //     const options = {
  //       description: 'Test Razorpay Payment',
  //       currency: 'INR',
  //       key: 'rzp_test_nfY709knHa5l4u', // your Razorpay key
  //       amount: parseInt(price) * 100, // amount in paise
  //       name: name || 'User',
  //       prefill: {
  //         email: email || 'test@example.com',
  //         contact: phone || '9999999999',
  //         name: name || 'User',
  //       },
  //       theme: { color: '#4C63B6' },
  //       method: {
  //         upi: true,
  //         card: true,
  //         netbanking: true,
  //         wallet: true,
  //       },
  //     };

  //     console.log('🔍 Razorpay Options:', options);

  //     // 🧾 Start payment
  //     RazorpayCheckout.open(options)
  //       .then(async data => {
  //         console.log('✅ Razorpay Success Response:', data);
  //         Alert.alert('Payment Success', JSON.stringify(data, null, 2));

  //         // You can keep your verification logic here if needed
  //         // try {
  //         //   const resultAction = await dispatch(
  //         //     paymentVerify({
  //         //       razorpay_payment_id: data.razorpay_payment_id,
  //         //       // razorpay_order_id: data.razorpay_order_id || null,
  //         //       razorpay_signature: data.razorpay_signature || null,
  //         //     }),
  //         //   );
  //         //   const result = resultAction.payload;
  //         //   console.log('🧾 Verification result:', result);
  //         // } catch (verifyErr) {
  //         //   console.error('❌ Verification Error:', verifyErr);
  //         // } finally {
  //         //   setLoading(false);
  //         // }
  //       })
  //       // .catch(error => {
  //       //   setLoading(false);
  //       //   console.error('❌ Razorpay Failure Response:', error);

  //       //   // Show detailed debug alert
  //       //   Alert.alert(
  //       //     'Razorpay Error (Debug Info)',
  //       //     JSON.stringify(error, null, 2),
  //       //   );
  //       // });
  //   }
  //   catch (err) {
  //     setLoading(false);
  //     console.error('❌ Outer Payment Error:', err);
  //     // Alert.alert(
  //     //   'Outer Payment Error',
  //     //   err?.message || 'Something went wrong',
  //     // );
  //   }
  // };

  // const onPayment = async () => {
  //   if (!price || isNaN(price) || Number(price) <= 0) {
  //     return Alert.alert('Invalid Amount', 'Please enter a valid amount');
  //   }

  //   try {
  //     setLoading(true);

  //     // Razorpay expects amount in paise (integer)
  //     const amountInPaise = Math.round(Number(price) * 100);

  //     const options = {
  //       description: 'Test Razorpay Payment',
  //       currency: 'INR',
  //       key: 'rzp_test_nfY709knHa5l4u', // your Razorpay key
  //       amount: amountInPaise,
  //       name: name || 'User',
  //       prefill: {
  //         email: email || 'test@example.com',
  //         contact: phone || '9999999999',
  //         name: name || 'User',
  //       },
  //       theme: { color: '#4C63B6' },
  //     };

  //     // console.log('🔍 Razorpay Options:', options);

  //     RazorpayCheckout.open(options)
  //       .then(data => {
  //         console.log('i am here');
  //         console.log('✅ Payment Success:', data);
  //         // navigation.replace('OrderSuccessScreen', { paymentData: data });

  //         // Payment is successful, navigate directly
  //         // Toast.show({
  //         //   type: 'success',
  //         //   text1: 'Payment Successful',
  //         //   // text2: `Payment ID: ${data.razorpay_payment_id}`,
  //         //   visibilityTime: 2000,
  //         // });

  //       })
  //       .catch(error => {
  //         console.error('❌ Payment Failed:', error);
  //         Alert.alert(
  //           'Payment Failed',
  //           error?.description || 'Something went wrong. Please try again.',
  //         );
  //       })
  //       .finally(() => setLoading(false));
  //   } catch (err) {
  //     setLoading(false);
  //     console.error('❌ Unexpected Error:', err);
  //     Alert.alert('Error', err?.message || 'Something went wrong');
  //   }
  // };

  const onPayment = async () => {
    console.log('🟢 Payment started...');

    try {
      setLoading(true);

      const amountInPaise = Math.round(Number(price) * 100);

      const options = {
        description: 'Test Razorpay Payment',
        currency: 'INR',
        key: 'rzp_test_nfY709knHa5l4u', // your key here
        amount: amountInPaise,
        name: 'MyApp',
        prefill: {
          email: 'test@example.com',
          contact: '9999999999',
        },
        theme: { color: '#F37254' },
      };

      console.log('🧩 Razorpay Options:', options);

      RazorpayCheckout.open(options)
        // .then(data => {
        //   console.log('✅ Payment Success:', data);

        //   try {
        //     // Step 1: Verify data presence
        //     if (!data || !data.razorpay_payment_id) {
        //       throw new Error('Missing payment data');
        //     }

        //     // Step 2: Toast check
        //     console.log('🔔 Showing success Toast...');
        //     Toast.show({
        //       type: 'success',
        //       text1: 'Payment Successful',
        //       visibilityTime: 2000,
        //     });

        //     // Step 3: Navigation check
        //     if (!navigation || typeof navigation.replace !== 'function') {
        //       throw new Error('Navigation prop missing or invalid');
        //     }

        //     console.log('🧭 Navigating to OrderSuccessScreen...');
        //     setTimeout(() => {
        //       navigation.replace('OrderSuccessScreen', { paymentData: data });
        //     }, 1200);
        //   } catch (err) {
        //     console.log('🔥 Error inside .then() block:', err);
        //     Alert.alert('Error after payment', err.message);
        //   }
        // })
        // .catch(error => {
        //   console.log('❌ Payment Failed:', JSON.stringify(error, null, 2));
        //   // Alert.alert(
        //   //   'Payment Failed',
        //   //   error?.description ||
        //   //     JSON.stringify(error) ||
        //   //     'Something went wrong. Please try again.',
        //   // );
        // })
        // .finally(() => {
        //   console.log('🔚 Payment flow finished.');
        //   setLoading(false);
        // });
      navigation.navigate(OrderSuccessScreen)
      } catch (error) {
      console.log('🚨 Outer try-catch Error:', error);
      Alert.alert('Unexpected Error', error.message);
      setLoading(false);
    }
  };

  // const onPayment = async orderIdParam => {
  //   const amountInPaise = Math.round(Number(price) * 100);
  //   try {
  //     setLoading(true);

  //     let options = {
  //       description: 'Test Razorpay Payment',
  //       currency: 'INR',
  //       key: 'rzp_test_nfY709knHa5l4u', // your Razorpay key
  //       amount: amountInPaise,
  //       name: name || 'User',
  //       prefill: {
  //         email: email || 'test@example.com',
  //         contact: phone || '9999999999',
  //         name: name || 'User',
  //       },
  //       theme: { color: '#4C63B6' },
  //     };

  //     RazorpayCheckout.open(options)
  //       .then(async data => {
  //         console.log('hello');
  //         try {
  //           const result = await dispatch(
  //             paymentVerify({
  //               razorpay_payment_id: data.razorpay_payment_id,
  //               razorpay_order_id: finalOrderId,
  //               razorpay_signature: data.razorpay_signature,
  //             }),
  //           ).unwrap();
  //           if (result.message_type === 'success') {
  //             await AsyncStorage.setItem(
  //               'studentId',
  //               String(result?.data?.student_id),
  //             );
  //             await AsyncStorage.setItem(
  //               'classId',
  //               String(result?.data?.class_id),
  //             );
  //             await AsyncStorage.setItem('isPaid', 'true');
  //             await AsyncStorage.removeItem('amount');
  //             await AsyncStorage.removeItem('classID');
  //             // setOtpSuccessPopup(false);
  //             console.log('Payment Verify :', result);
  //             navigation.navigate('BottomTabNavigations');
  //           }
  //           // setOtpSuccessPopup(false);
  //           Toast.show({
  //             type: 'success',
  //             text1: 'Payment verified successfully',
  //             text2: result?.message || 'Payment verified successfully',
  //             visibilityTime: 4000,
  //             onHide: () => {
  //               navigation.navigate('BottomTabNavigations');
  //             },
  //           });
  //         } catch (verifyErr) {
  //           console.error('Verify Failed:', verifyErr);
  //           Toast.show({
  //             type: 'error',
  //             text1: 'Payment Failed',
  //             text2: verifyErr?.message || 'Verification failed',
  //           });
  //           setOtpSuccessPopup(true);
  //           // Alert.alert("Payment Failed", verifyErr?.message || "Verification failed", [
  //           //   {
  //           //     text: 'OK',
  //           //     onPress: () => {

  //           //     },
  //           //   },
  //           // ],);
  //         } finally {
  //           setLoading(false);
  //         }
  //       })
  //       .catch(error => {
  //         setLoading(false);
  //         // Alert.alert('Payment Failed', ${error.code} | ${error.description});
  //         console.error('Razorpay error:', error);
  //       });
  //   } catch (err) {
  //     setLoading(false);
  //     console.error('Payment error:', err);
  //     Alert.alert('Error', 'Something went wrong during payment');
  //   }
  // };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>💳 Online Payment</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>User Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>👤 Name:</Text>
          <Text style={styles.value}>{name || 'Not provided'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>📧 Email:</Text>
          <Text style={styles.value}>{email || 'Not provided'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>📱 Phone:</Text>
          <Text style={styles.value}>{phone || 'Not provided'}</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
        💰 Payment Details
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount in ₹"
        value={price}
        onChangeText={setPrice}
      />

      <TouchableOpacity
        style={[styles.payButton, loading && { opacity: 0.7 }]}
        onPress={onPayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.payText}>Pay Now</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.codButton}
        onPress={() => {
          Alert.alert('Cash on Delivery', 'Order placed!');
          setTimeout(() => {
            navigation.navigate('OrderSuccessScreen');
          }, 600); // 300ms delay
        }}
      >
        <Text style={styles.codText}>Cash on Delivery</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OnlinePaymentScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8faff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2B3674',
    marginBottom: 25,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    color: '#555',
    fontSize: 15,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginTop: 10,
    elevation: 2,
  },
  payButton: {
    backgroundColor: '#4C63B6',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#4C63B6',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  payText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  codButton: {
    borderColor: '#4C63B6',
    borderWidth: 1.5,
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
  },
  codText: {
    color: '#4C63B6',
    fontSize: 17,
    fontWeight: '600',
  },
});
