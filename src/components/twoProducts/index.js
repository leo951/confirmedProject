import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import ProductsGrid from '../products/productsGrid';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const TwoProducts = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.product1 && props.product2) {
      setProducts([props.product1, props.product2]);
    }
  }, [props]);

  return (
    <ViewContainer>
      <ProductsGrid
        shop={false}
        width={SCREEN_WIDTH - 50}
        marginHorizontal={10}
        navigation={props.navigation}
        horizontal={true}
        products={products}
      />
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  margin: ${50}px 0;
`;

export default TwoProducts;
