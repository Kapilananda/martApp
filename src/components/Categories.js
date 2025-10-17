import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProductList from '../screens/Home/ProductList';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

export default function Categories({
  item,
  products,
  navigation,
  favorites,
  dispatch,
}) {

  const imageSource =
    typeof item.image === 'string'
      ? { uri: item.image } // remote image
      : item.image; // local require image

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductList', { products, favorites, dispatch })
        }
      >
        {/* <Image
          source={{ uri: item.image }}
          style={styles.img}
        /> */}

        <FastImage
          source={imageSource }
          style={styles.img}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text numberOfLines={1} style={styles.label}>
          {String(item.title)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.19, // 🔹 each item ~22% of screen width (fits 4 per row with spacing)
    height: width * 0.3, // 🔹 each item ~22% of screen width (fits 4 per row with spacing)
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: width * 0.22, // 🔹 image ~18% of screen width
    height: width * 0.22, // 🔹 square image
    // borderRadius: (width * 0.18) / 2, // 🔹 circular style
    borderRadius: 20,
    elevation: 2,
    resizeMode: 'cover',
    backgroundColor: '#f5f5f5',
    // justifyContent:"space-between"
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
  },
});
