import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import {StyleSheet, useColorScheme} from 'react-native';

import Routes from './src/config/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

export default App;
