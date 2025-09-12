import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window');
export default function HotDealsCard({ item, navigation }) {
  return (
    <View style={[styles.product,]}>

      <Image source={{ uri: item.image }} style={styles.image} />

      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center", width: "100%", marginTop: 3 }}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { }}
        >
          <Text style={styles.viewButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    elevation: 3,
    width: 150 ,
    marginTop: -8,
  },
  image: {
    width: "50%",
    height: 120,
    resizeMode: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
  },
  price: {
    fontSize: 15,
    color: "green",
    marginBottom: 5,

  },
  viewButton: {
    color: "#31326F",
    fontWeight: "bold",
    fontSize: 40,
    border: 1,
    top: -7,
  },
  btn: {
    backgroundColor: '#BDE3C3',
    borderRadius: 50,
    width:  40,
    height: 40,
    top:0,
    elevation:5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
