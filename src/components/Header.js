import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector((state) => state.items);
  console.log(items);
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Find The Best Clothes</Text>
        <Text style={styles.headerSubText}>In your favorite store</Text>
      </View>
      <TouchableOpacity>
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
    marginTop: 60,
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
