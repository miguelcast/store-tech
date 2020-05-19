import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card,  } from '@ui-kitten/components';

import Text from '../Text';

function Item({ item: product }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: product.image }} resizeMode="cover" />
      <View style={styles.info}>
        <Text variant="subtile">{product.name}</Text>
        <Text>{product.description}</Text>
        <Text variant="title">{product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    marginBottom: 12
  },
  image: {
    width: 100,
    height: 150,
    backgroundColor: 'gray'
  },
  info: {
    flex: 1,
    padding: 24,
  }
});

export default Item;
