import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

import CountDownTimer from '../countDownTimer';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Auction = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const counter = {hours: 1, minutes: 20, seconds: 40};

  return (
    <View>
      <Image
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
        {props.auction.shoe}
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
      </Text>
    </View>
  );
};

export default Auction;
