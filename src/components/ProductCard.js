import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../configs/colors';
import { openStore } from '../Redux/actions';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            dispatch(openStore(item));
            navigation.navigate('Store');
          }}
        >
          <View style={styles.cover}>
            <Image
              style={styles.coverImage}
              resizeMode="cover"
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.title}>{item.itemName}</Text>
          </View>
          <View style={styles.content}>
            <View style={'wrapper'}>
              <Text style={styles.subtitile}>Price: {item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    paddingBottom: 20,
  },
  container: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width * 0.42,
    height: Dimensions.get('window').width * 0.42,
    elevation: 2,
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
    opacity: 0.9,
    top: 0,
    left: 0,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  content: {
    padding: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '30%',
    overflow: 'hidden',
  },
  logoContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  subtitile: {
    color: colors.darkGrey,
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  wrapper: {
    alignItems: 'center',
  },
});

export default ProductCard;
