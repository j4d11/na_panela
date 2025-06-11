import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function RecipeCard({ title, description, rating, author, onPress, image }) {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>{title}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{description}</Text>
        <View style={styles.ratingRow}>
          <AntDesign name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Text style={styles.author}>{author}</Text>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.button}>
        <Ionicons name="play" size={24} color="#D94F6D" />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6DEEA',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#f9cfd8',
    borderRadius: 10,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e17897',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#a3a3a3',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 6,
    color: '#a3a3a3',
    fontSize: 14,
  },
  author: {
    color: '#a3a3a3',
    fontSize: 12,
  },
  button: {
    padding: 10,
    justifyContent: 'center',
  },
});
