import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import colors from '../configs/colors';
import { Picker } from '@react-native-picker/picker';
import ProdutCard from './../components/ProductCard';
const StoreScreen = () => {
  const store = useSelector((state) => state.store);
  const [category, setCategory] = useState('All');

  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = require('./../data.json');
    if (category !== 'All') {
      const filtered = url.items.filter((item) => item.category === category);
      setItems(filtered);
    } else {
      setItems(url.items);
    }
  }, [category]);
  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <ProdutCard item={item[0]} />
        {item[1] && <ProdutCard item={item[1]} />}
      </View>
    );
  };
  return (
    <View style={styles.storeScreen}>
      <View
        style={{
          height: Dimensions.get('window').height * 0.33,
        }}
      >
        <Header />
        <Text style={styles.title}>{store.name}</Text>
        <Text style={styles.title}>Category</Text>
        <Picker
          selectedValue={'hi'}
          color="blue"
          onValueChange={(val) => {
            setCategory(val);
          }}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Jeans" value="Jeans" />
          <Picker.Item label="Shirt" value="Shirt" />
          <Picker.Item label="T-Shirt" value="T-Shirt" />
          <Picker.Item label="Jacket" value="Jacket" />
        </Picker>
      </View>
      {items.length !== 0 && (
        <>
          <VirtualizedList
            style={{
              height: Dimensions.get('window').height * 0.75,
            }}
            showsVerticalScrollIndicator={false}
            refreshing
            data={items}
            scrollEnabled
            initialNumToRender={4}
            renderItem={({ item }) => {
              return <Item item={item} />;
            }}
            getItemCount={() => Math.ceil(items.length / 2)}
            getItem={(data, i) => {
              const index = 2 * i;
              return [data[index], data[index + 1]];
            }}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  storeScreen: { paddingLeft: 20, paddingRight: 20 },
  title: {
    alignSelf: 'baseline',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  filterIconContainer: {
    width: 100,
    height: 50,
    marginRight: 10,
    backgroundColor: colors.grey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default StoreScreen;
