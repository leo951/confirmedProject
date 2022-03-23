import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import ProductsGrid from '../products/productsGrid';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const LastImages = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <ProductsGrid
        width={SCREEN_WIDTH}
        navigation={props.navigation}
        horizontal={false}
        products={props.images}
      />
    </View>
  );
};

export default LastImages;
