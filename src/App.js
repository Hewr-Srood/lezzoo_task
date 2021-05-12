import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import { NativeRouter, Route } from 'react-router-native';
import colors from './configs/colors';
import InitScreen from './screens/InitScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => (
  <NativeRouter>
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Find The Best Clothes</Text>
            <Text style={styles.headerSubText}>In your favorite store</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.bage}>
              <Text style={styles.bageText}>1</Text>
            </View>
            <Icon size={20} name="shopping-cart" backgroundColor="#3b5998" />
          </View>
        </View>

        <Route exact path="/" component={InitScreen} />
      </View>
    </SafeAreaView>
  </NativeRouter>
);
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
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
    backgroundColor: colors.grey,
  },
  bage: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -5,
    borderRadius: 500,
    backgroundColor: colors.darkGrey,
  },
  bageText: {
    fontSize: 10,
  },
});
export default App;
