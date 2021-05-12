import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

const Header = ({ subtitle }) => {
  const items = useSelector((state) => state.items);
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Find The Best Clothes</Text>
        <Text style={styles.headerSubText}>In your favorite store</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <View style={styles.iconContainer}>
          <View style={styles.bage}>
            <Text style={styles.bageText}>{items.length.toString()}</Text>
          </View>
          <Icon size={20} name="shopping-cart" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    height: Dimensions.get('screen').height * 0.1,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  headerSubText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey,
  },
  subtitle: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bage: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    zIndex: 1,
    borderRadius: 500,
    borderColor: 'red',
    borderWidth: 1,
    // backgroundColor: colors.darkGrey,
  },
  bageText: {
    fontSize: 10,
  },
});
export default Header;
