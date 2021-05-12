import React, { useMemo, useEffect, useState } from 'react';
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import StoreCard from '../components/StoreCard';

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <StoreCard
        name={item[0].name}
        location={item[0].location}
        cover={item[0].cover}
        logo={item[0].logo}
      />
      {item[1] && (
        <StoreCard
          name={item[1].name}
          location={item[1].location}
          cover={item[1].cover}
          logo={item[1].logo}
        />
      )}
    </View>
  );
};
const InitScreen = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const url = require('./../data.json');
    setStores(url.stores);
    console.log(stores);
  }, [stores]);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.initHeader}>Stores</Text>

      {stores.length !== 0 && (
        <>
          <VirtualizedList
            data={stores}
            scrollEnabled
            initialNumToRender={4}
            renderItem={({ item }) => {
              return <Item item={item} />;
            }}
            getItemCount={() => Math.floor(stores.length / 2) + 1}
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
  conatiner: { alignItems: 'center' },
  initHeader: {
    alignSelf: 'baseline',
    fontSize: 20,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
  },
});
export default InitScreen;
