import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export function CircleButton({ imageSource, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F8BBD0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
