import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import colors from '../configs/colors';
import { v4 as uuidv4 } from 'uuid';

const BasketScreen = () => {
  const items = useSelector((state) => state.items);
  const totalPrice = () =>
    items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi there</Text>
      <Text style={styles.subtitle}>You basket list</Text>
      <VirtualizedList
        style={{
          height: Dimensions.get('window').height * 0.75,
        }}
        showsVerticalScrollIndicator={false}
        refreshing
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} key={item.name + item.id} />
        )}
        getItemCount={() => items.length}
        getItem={(data, i) => {
          return data[i];
        }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={uuidv4}
      />
      <Text style={styles.subtitle}>Total Price: {totalPrice()}$</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontSize: 16,
  },
  title: { fontSize: 20, color: colors.grey },
  subtitle: {
    fontSize: 24,
    color: colors.darkGrey,
  },
});
export default BasketScreen;
