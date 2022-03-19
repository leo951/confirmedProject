import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/home';
import Shop from '../../screens/shop';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name='Home' component={Home} />
    //   <Stack.Screen name='Shop' component={Shop} />
    // </Stack.Navigator>
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeStack" component={HomeStack} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Shop" component={Shop} />
    </BottomTab.Navigator>
  );
};

export default HomeStack;
