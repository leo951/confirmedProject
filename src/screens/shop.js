import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View, FlatList, Image, Dimensions} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductsGrid from '../components/products/productsGrid';
import ProductsItem from '../components/products/productsItem';

const Shop = ({navigation}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: {limit: '20', brand: 'Adidas'},
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
        // 'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
        // 'X-RapidAPI-Key': '4fa17e2b51msha2b169814db974ep1b2769jsnc61411cb32f6'
      },
    })
      .then(response => {
        setProduct(response.data.results);
      })
      .catch(function (error) {
        console.error('Je suis error = ', error);
      });
  }, []);

  return (
      <ProductsGrid width={SCREEN_WIDTH} navigation={navigation} products={product} />
  );
};
const Button = styled.TouchableOpacity``;

Shop.propTypes = {};

export default Shop;
