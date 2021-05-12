import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';

const ProductListItem = ({ item, store }) => {
  return (
    <View style={styles.item}>
      <ProductCard item={item[0]} store={store} />
      {item[1] && <ProductCard item={item[1]} store={store} />}
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
