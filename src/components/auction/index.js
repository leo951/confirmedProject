import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductsItem from '../products/productsItem';

const Auction = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  // console.log("Je suis props = ",props);

  return (
    <View>
      {/* <Image
        style={{height: 250, width: SCREEN_WIDTH}}
        source={{uri: `https:${props.auction?.media.imageUrl.split(':')[1]}`}}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 25,
          width: SCREEN_WIDTH,
          backgroundColor: 'blue',
        }}>
        <CountDownTimer counter={counter} />
      </View>
      <Text
        style={{
          fontWeight: '500',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {props.price}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {props.auction?.shoe}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '400',
          textAlign: 'center',
          justifyContent: 'center',
          textDecorationLine: 'underline',
          marginTop: 10,
        }}>
        PARTICIPER
      </Text> */}
      {/* <ProductsItem
        price={props.price}
        viewTimer={true}
        product={props.auction}
        navigation={props.navigation}
        auction={true}
      /> */}
    </View>
  );
};

export default Auction;
