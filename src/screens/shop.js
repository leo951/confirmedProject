import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View, FlatList, Image, Dimensions} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getSneakers } from '../utils/Request';

import ProductsGrid from '../components/products/productsGrid';
import ProductsItem from '../components/products/productsItem';
import {TextLoading} from '../components/styles';

const Shop = ({navigation}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSneakers()
      .then(response => {
        setProduct(response.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error('Je suis error = ', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <TextLoading>Veuillez patienter</TextLoading>;
  }

  return product ? (
    <ProductsGrid
      width={SCREEN_WIDTH / 2.5}
      height={50}
      navigation={navigation}
      products={product}
      shop={true}
    />
  ) : (
    <TextLoading>Pas de sneakers pour le moment</TextLoading>
  );
};
const Button = styled.TouchableOpacity``;

Shop.propTypes = {};

export default Shop;
