import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';

const ProductListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <ProductCard item={item[0]} />
      {item[1] && <ProductCard item={item[1]} />}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ProductListItem;
