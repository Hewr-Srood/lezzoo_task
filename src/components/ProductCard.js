import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import colors from './../configs/colors';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../Redux/actions';
import { useSelector } from 'react-redux';

const ProductCard = ({ item, store }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Do you want add {item.itemName} to your basket?
              </Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonYes]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>No, Thanks</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonNo]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    dispatch(
                      addToBasket([...items, { item: item, store: store }])
                    );
                  }}
                >
                  <Text style={styles.textStyle}>Yes, Sure</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
              <Text style={styles.subtitile}>Price: {item.price}$</Text>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonYes: {
    backgroundColor: colors.red,
  },
  buttonNo: {
    backgroundColor: colors.green,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ProductCard;
