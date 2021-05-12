import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Platform } from 'react-native';
import InitScreen from './screens/InitScreen';
import StoreScreen from './screens/StoreScreen';
import Reducers from './Redux/Reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';

const Stack = createStackNavigator();
const store = createStore(Reducers);

const App = () => (
  <>
    <Provider store={store}>
      <StatusBar
        backgroundColor="#F2F2F2"
        barStyle="dark-content"
        translucent
      />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={InitScreen} />
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  </>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default App;
