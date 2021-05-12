import React, { useState, useEffect } from 'react';
import { View, Text, VirtualizedList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { Picker } from '@react-native-picker/picker';
import { v4 as uuidv4 } from 'uuid';
import StoreStyles from './StoreStyles';
import ProductListItem from '../components/ProductListItem';

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

  return (
    <View style={StoreStyles.storeScreen}>
      <View
        style={{
          height: Dimensions.get('window').height * 0.33,
        }}
      >
        <Header />
        <Text style={StoreStyles.title}>{store.name}</Text>
        <Text style={StoreStyles.title}>Category</Text>
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
            renderItem={({ item }) => <ProductListItem item={item} />}
            getItemCount={() => Math.ceil(items.length / 2)}
            getItem={(data, i) => {
              const index = 2 * i;
              return [data[index], data[index + 1]];
            }}
            keyExtractor={uuidv4}
          />
        </>
      )}
    </View>
  );
};

export default StoreScreen;
