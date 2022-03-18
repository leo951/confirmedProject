import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
      //   <BottomTab.Navigator screenOptions={{headerShown: false}}>
      //   <BottomTab.Screen name="HomeStack" component={HomeStack} />
      //   <BottomTab.Screen name="Characters" component={Characters} />
      // </BottomTab.Navigator>
  )
}

export default HomeStack
