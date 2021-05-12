import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../configs/colors';

const StoreCard = ({ name, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <CoverImage
          source={{
            uri: 'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
          }}
        />
        <Title>{name}</Title>
      </View>
      <Content>
        <Logo
          resizeMode="contain"
          source={{
            uri: 'https://dfcdn.defacto.com.tr/Assets/dist/images/logo.png',
          }}
        />
        <Wrapper>
          <Subtitle>{location}</Subtitle>
        </Wrapper>
      </Content>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width * 0.8,
    height: 280,
    elevation: 8,
    borderRadius: 15,
    marginTop: 10,
  },
  cover: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
});

const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`;
const Logo = styled.Image`
  width: 54px;
  height: 54px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`;
const Wrapper = styled.View`
  align-items: center;
`;

export default StoreCard;
