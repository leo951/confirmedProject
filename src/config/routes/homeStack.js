import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/home';
import Shop from '../../screens/shop';
import Login from '../../screens/login';
import Profil from '../../screens/profil';

const Bottom = createBottomTabNavigator();

const HomeStack = () => {
  const [user, setUser] = useState(null);
  /**
   * @todo: Faire en sorte d'actualiser cette page
   */
  useEffect(() => {
    verifUser();
  }, []);

  const verifUser = async () => {
    let item = undefined;
    item = await AsyncStorage.getItem('user');

    item != null ? setUser(JSON.parse(item)) : setUser(null);
  };

  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Shop" component={Shop} />
      {user != null ? (
        <Bottom.Screen name="Profil" component={Profil} />
      ) : (
        <Bottom.Screen name="Login" component={Login} />
      )}
    </Bottom.Navigator>
  );
};

export default HomeStack;
