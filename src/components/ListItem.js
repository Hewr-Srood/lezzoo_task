import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../configs/colors';

const ListItem = ({ item }) => {
  return (
    <View style={styles.contianer}>
      <Text>{item.item.itemName}</Text>
      <Text>From: {item.store}</Text>
      <Text>price: {item.item.price}$</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contianer: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.serenity,
  },
});
export default ListItem;
