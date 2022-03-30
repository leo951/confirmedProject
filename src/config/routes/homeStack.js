import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/home';
import Shop from '../../screens/shop';
import Login from '../../screens/login';
import Profil from '../../screens/profil';
import UseAuth from '../../components/useAuth';

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
    // <UseAuth>
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-home-essentials-tanah-basah-basic-outline-tanah-basah-2.png',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: () => (
            <Icon
              source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/48/000000/mens-shoe.png',
              }}
            />
          ),
        }}
      />
      {user != null ? (
        <Bottom.Screen
          name="Profil"
          component={Profil}
          options={{
            tabBarIcon: () => (
              <Icon
                source={{
                  uri: 'https://img.icons8.com/material-outlined/24/000000/user--v1.png',
                }}
              />
            ),
          }}
        />
      ) : (
        <Bottom.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: () => (
              <Icon
                source={{
                  uri: 'https://img.icons8.com/material-outlined/24/000000/user--v1.png',
                }}
              />
            ),
          }}
        />
      )}
    </Bottom.Navigator>
    // </UseAuth>
  );
};

const Icon = styled.Image`
  width: ${25}px;
  height: ${25}px;
`;

export default HomeStack;
