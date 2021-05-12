import React, { useEffect, useState } from 'react';
import { View, VirtualizedList, Text, Dimensions } from 'react-native';
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
      <View style={InitStyles.conatiner}>
        {stores.length !== 0 && (
          <VirtualizedList
            style={{
              height: Dimensions.get('window').height * 0.9,
            }}
            refreshing
            data={stores}
            scrollEnabled
            initialNumToRender={4}
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
