import React from 'react';
import { View, StyleSheet } from 'react-native';
import StoreCard from './StoreCard';

const StoreListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <StoreCard item={item[0]} />
      {item[1] && <StoreCard item={item[1]} />}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StoreListItem;
