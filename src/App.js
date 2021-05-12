import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import InitScreen from './screens/InitScreen';
import StoreScreen from './screens/StoreScreen';
import Reducers from './Redux/Reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const store = createStore(Reducers);

const App = () => (
  <>
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer initialRouteName="home/init">
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={InitScreen} />
            <Stack.Screen name="Store" component={StoreScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  </>
);

export default App;
