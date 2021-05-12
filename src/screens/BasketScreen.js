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
import Seperator from '../components/Seperator';

const BasketScreen = () => {
  const items = useSelector((state) => state.items);
  const totalPrice = () =>
    items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.item.price,
      0
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi there</Text>
      <Text style={styles.subtitle}>Your basket list</Text>
      <VirtualizedList
        style={{
          height: Dimensions.get('window').height * 0.75,
        }}
        showsVerticalScrollIndicator={false}
        refreshing
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        getItemCount={() => items.length}
        getItem={(data, i) => {
          return data[i];
        }}
        ItemSeparatorComponent={Seperator}
        keyExtractor={uuidv4}
      />
      <Text style={styles.subtitle}>
        You have {items.length} items in your basket
      </Text>

      <Text style={styles.subtitle}>Total Price: {totalPrice()}$</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontSize: 16,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: { fontSize: 20, color: colors.grey, paddingTop: 10 },
  subtitle: {
    paddingTop: 10,
    fontSize: 24,
    color: colors.darkGrey,
  },
});
export default BasketScreen;
