import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../screens/home';
import Shop from '../../screens/shop';

const Bottom = createBottomTabNavigator()

const ProtectedStack = () => {
  return (
    <Bottom.Navigator>
      <BottomTab.Screen name="HomeStack" component={HomeStack} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Shop" component={Shop} />
    </Bottom.Navigator>
  )
}

export default ProtectedStack
