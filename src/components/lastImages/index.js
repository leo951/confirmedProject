import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const LastImages = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <FlatList
        data={props.images}
        renderItem={({item}) => (
          <View>
            <Image
              style={{
                height: 250,
                width: SCREEN_WIDTH,
              }}
              source={{uri: `https:${item?.media.imageUrl.split(':')[1]}`}}
            />
            <Text
              style={{
                fontWeight: '500',
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              150, 00 €
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              {item.shoe}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                textAlign: 'center',
                justifyContent: 'center',
                textDecorationLine: 'underline',
                marginVertical: 20,
              }}>
              Acheter
            </Text>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default LastImages;
