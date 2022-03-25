import React from 'react';
import {View,Dimensions} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductsItem from '../products/productsItem';

const Auction = props => {
  console.log("Je suis dans auction ");
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <ProductsItem
        width={SCREEN_WIDTH}
        price={props.price}
        viewTimer={true}
        product={props.auction}
        navigation={props.navigation}
        auction={true}
      />
    </View>
  );
};

export default Auction;
