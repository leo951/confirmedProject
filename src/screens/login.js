import * as React from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

import Logo from '../components/logo/index';
import LoginForm from '../components/form/loginForm';

function LoginScreen({navigation}) {
  return (
    <>
      <ViewContainer>
        <View>
          <Logo />
        </View>
        <View>
          <LoginForm />
        </View>
      </ViewContainer>
    </>
  );
}

const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export default LoginScreen;
