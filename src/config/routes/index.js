import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import LoginScreen from '../../screens/login';
import HomeScreen from '../../screens/home';
import ShopScreen from '../../screens/shop';
import DetailsScreen from '../../screens/details';

// const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Shop" component={ShopScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>

    </Stack.Navigator>
  );
};

export default Routes;
