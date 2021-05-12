import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import colors from '../configs/colors';

const StoreCard = ({ name, location, cover, logo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.cover}>
          <Image
            style={styles.coverImage}
            source={{
              uri: cover,
            }}
          />
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={{
              uri: logo,
            }}
          />
          <View style={'wrapper'}>
            <Text style={styles.subtitile}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  container: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.45,
    elevation: 8,
    borderRadius: 15,
    marginTop: 10,
  },
  cover: {
    width: '100%',
    height: '70%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    width: 200,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '30%',
  },
  logo: {
    width: 54,
    height: 54,
  },
  subtitile: {
    color: colors.grey,
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  wrapper: {
    alignItems: 'center',
  },
});

export default StoreCard;
