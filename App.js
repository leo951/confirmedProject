import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet, useColorScheme} from 'react-native';

import Routes from './src/config/routes';

const App = () => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
