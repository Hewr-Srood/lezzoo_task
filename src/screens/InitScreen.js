import React, { useMemo, useEffect, useState } from 'react';
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import StoreCard from '../components/StoreCard';
import uuid from 'react-native-uuid';
const DATA = [
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
  { id: uuid.v4(), name: 'defactor', location: 'erbil' },
];

const Item = ({ id, name, location }) => (
  <StoreCard name={name} location={location} />
);
const InitScreen = () => {
  const [stores, setStores] = useState([{}]);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.initHeader}>Stores</Text>

      <VirtualizedList
        data={DATA}
        scrollEnabled
        initialNumToRender={4}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            location={item.location}
          />
        )}
        getItemCount={() => DATA.length}
        getItem={() => DATA}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: { alignItems: 'center' },
  initHeader: {
    alignSelf: 'baseline',
    fontSize: 20,
    marginLeft: Dimensions.get('window').width * 0.1,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default InitScreen;
