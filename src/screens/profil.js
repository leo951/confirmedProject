import * as React from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

import {ViewContainer} from '../components/styles';

import Logo from '../components/logo/index';
import ProfilForm from '../components/form/profilForm';

function ProfilScreen({navigation}) {
  return (
    <>
      <Logo />
      <ViewContainer>
        <View>
          <ProfilForm />
        </View>
      </ViewContainer>
    </>
  );
}

export default ProfilScreen;
