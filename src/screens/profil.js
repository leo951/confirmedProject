import * as React from 'react';
import styled from 'styled-components';

import {View, Button} from 'react-native';

import {ViewContainer} from '../components/styles';

import Logo from '../components/logo/index';
import ProfilForm from '../components/form/profilForm';

function ProfilScreen({navigation}) {
  return (
    <>
      <ViewContainer>
        <View>
          <Logo />
        </View>
        <View>
          <ProfilForm/>
        </View>
      </ViewContainer>
    </>
  );
}

export default ProfilScreen;
