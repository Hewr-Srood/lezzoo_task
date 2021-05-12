import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import HeaderStyles from './HeaderStyles';

const Header = ({ subtitle }) => {
  const items = useSelector((state) => state.items);

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(false);
  }, [items]);
  const navigation = useNavigation();
  return (
    <View style={HeaderStyles.header}>
      <View style={HeaderStyles.HeaderTextContainer}>
        <Text style={HeaderStyles.headerText}>Find The Best Clothes</Text>
        <Text style={HeaderStyles.headerSubText}>In your favorite store</Text>
        <Text style={HeaderStyles.subtitle}>{subtitle}</Text>
      </View>
      <Pressable
        disabled={disabled}
        onPress={() => navigation.navigate('Basket')}
      >
        <View style={HeaderStyles.iconContainer}>
          <View style={HeaderStyles.bage}>
            <Text style={HeaderStyles.bageText}>{items.length.toString()}</Text>
          </View>
          <Icon
            size={20}
            name="shopping-cart"
            color={`${disabled ? 'gray' : 'green'}`}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
