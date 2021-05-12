import React, { useEffect, useState } from 'react';
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import StoreCard from '../components/StoreCard';

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <StoreCard item={item[0]} />
      {item[1] && <StoreCard item={item[1]} />}
    </View>
  );
};
const InitScreen = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const url = require('./../data.json');
    setStores(url.stores);
  }, [stores]);
  return (
    <View style={styles.initScreen}>
      <Header />
      <View style={styles.conatiner}>
        <Text style={styles.initHeader}>Stores</Text>
        {stores.length !== 0 && (
          <VirtualizedList
            style={{
              height: Dimensions.get('window').height * 0.9,
            }}
            refreshing
            data={stores}
            scrollEnabled
            initialNumToRender={4}
            renderItem={({ item }) => {
              return <Item item={item} />;
            }}
            getItemCount={() => Math.ceil(stores.length / 2)}
            getItem={(data, i) => {
              const index = 2 * i;
              return [data[index], data[index + 1]];
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  initScreen: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  initHeader: {
    alignSelf: 'baseline',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default InitScreen;
