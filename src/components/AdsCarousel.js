import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function AdsCarousel({
  autoPlayInterval = 3000,
  itemWidth = screenWidth ,
  itemHeight = 250,
}) {
  const data = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
      title: 'Summer Sale',
      description: 'Up to 50% off on summer essentials',
      ctaText: 'Shop Now',
      discount: '50% OFF',
      backgroundColor: '#FF6B6B',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=800&q=80',
      title: 'Prime Member Deals',
      description: 'Exclusive discounts for Prime members',
      ctaText: 'See Offers',
      discount: 'PRIME',
      backgroundColor: '#4ECDC4',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1555529771-7888783a18d3?auto=format&fit=crop&w=800&q=80',
      title: 'New Arrivals',
      description: 'Discover the latest products',
      ctaText: 'Explore',
      discount: 'NEW',
      backgroundColor: '#FFD166',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80',
      title: 'Electronics Sale',
      description: 'Top deals on gadgets and devices',
      ctaText: 'Buy Now',
      discount: '30% OFF',
      backgroundColor: '#118AB2',
    },
  ];

  const flatRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  // Start autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      flatRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, autoPlayInterval);

    return () => clearInterval(autoplayRef.current);
  }, [currentIndex]);

  // Jump to specific slide
  const jumpTo = (i) => {
    flatRef.current?.scrollToIndex({ index: i, animated: true });
    setCurrentIndex(i);
  };

  const renderItem = ({ item }) => (
    <View style={{ width: itemWidth, height: itemHeight , margin:0}}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Discount badge */}
      <View style={[styles.discountBadge, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity
          style={[styles.ctaButton, { backgroundColor: item.backgroundColor }]}
          onPress={() => console.log('CTA pressed:', item)}
        >
          <Text style={styles.ctaText}>{item.ctaText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        ref={flatRef}
        data={data}
        horizontal
        snapToInterval={itemWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(ev) => {
          const newIndex = Math.round(ev.nativeEvent.contentOffset.x / itemWidth);
          setCurrentIndex(newIndex);
        }}
      />

      {/* Dots */}
      <View style={styles.dots}>
        {data.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => jumpTo(i)} style={styles.dotTouchable}>
            <View style={[styles.dot, currentIndex === i && styles.dotActive]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
  },
  discountBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  discountText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  content: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  description: { color: 'rgba(255,255,255,0.9)', fontSize: 14, marginVertical: 6 },
  ctaButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  ctaText: { color: 'white', fontWeight: 'bold' },
  dots: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotTouchable: { padding: 4 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 18,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
