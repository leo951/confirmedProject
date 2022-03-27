import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from '../../screens/details';
import HomeStack from '../routes/homeStack';
import FavoriteScreen from '../../screens/favorite';
import WinScreen from '../../screens/win';
import LoseScreen from '../../screens/lose';
import BuyScreen from '../../screens/buy';

// const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Win" component={WinScreen} />
      <Stack.Screen name="Lose" component={LoseScreen} />
      <Stack.Screen name="Buy" component={BuyScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
