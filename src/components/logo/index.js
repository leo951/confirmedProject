import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';

// import {LogoImg} from '../style/index';

const Logo = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <LogoView width={SCREEN_WIDTH}>
      <LogoImg source={require('../../../assets/logo/adidas-logo-png.png')} />
    </LogoView>
  );
};

const LogoView = styled.View`
  width: ${props => props.width}px;
  height: 150px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const LogoImg = styled.Image`
  width: 40px;
  height: 40px;
`;

export default Logo;
