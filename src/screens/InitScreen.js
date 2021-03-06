import React, { useEffect, useState } from 'react';
import { View, VirtualizedList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import InitStyles from './InitStyles';
import StoreListItem from '../components/StoreListItem';

const InitScreen = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const url = require('./../data.json');
    setStores(url.stores);
  }, [stores]);
  return (
    <View style={InitStyles.initScreen}>
      <Header subtitle="Stores" />
      <View style={InitStyles.container}>
        {stores.length !== 0 && (
          <VirtualizedList
            style={InitStyles.list}
            data={stores}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <StoreListItem item={item} />}
            getItemCount={() => Math.ceil(stores.length / 2)}
            getItem={(data, i) => {
              const index = 2 * i;
              return [data[index], data[index + 1]];
            }}
            keyExtractor={uuidv4}
          />
        )}
      </View>
    </View>
  );
};

export default InitScreen;
