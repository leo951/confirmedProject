import * as React from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

function FavoriteScreen({navigation}) {
    console.log("Je suis dans favoriteScreen");
  return (
    <>
      <ViewContainer></ViewContainer>
    </>
  );
}

const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export default FavoriteScreen;
