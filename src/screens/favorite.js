import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';
import styled from 'styled-components';
import Logo from '../components/logo';
import ProductsGrid from '../components/products/productsGrid';
import readFavorite from '../utils/Favorite/readFavorite';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [favorite, setFavorite] = useState([]);

  readFavorite()
    .then(res => {
      setFavorite(res);
    })
    .catch(err => console.log('Je suis err = ', err));

  return (
    <ViewContainer>
      <Logo />
      {favorite ? (
        <ProductsGrid
          width={SCREEN_WIDTH}
          isFavorite={true}
          navigation={navigation}
          products={favorite}
        />
      ) : null}
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export default FavoriteScreen;
