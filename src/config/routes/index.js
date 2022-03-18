import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import LoginScreen from '../../screens/login';
import HomeScreen from '../../screens/home';

// const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
};

export default Routes;
