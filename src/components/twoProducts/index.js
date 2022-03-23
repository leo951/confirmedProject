import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import ProductsGrid from '../products/productsGrid';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const TwoProducts = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  const [products, setProducts] = useState([]);

  console.log('Je suis props.navigation dans twoProduct = ', props.navigation);

  useEffect(() => {
    if (props.product1 && props.product2) {
      setProducts([props.product1, props.product2]);
    }
  }, [props]);

  return (
    <View style={{marginVertical: 50}}>
      {/* <FlatList
        data={products}
        horizontal={true}
        renderItem={({item}) => (
          <View>
            <Image
              style={{
                height: 250,
                width: SCREEN_WIDTH - 50,
                marginHorizontal: 10,
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
              120, 00 €
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
                marginTop: 10,
              }}>
              Acheter
            </Text>
          </View>
        )}
        keyExtractor={item => item.name}
      /> */}
      {/* {props.navigation != undefined && ( */}
        <ProductsGrid
          width={SCREEN_WIDTH - 50}
          marginHorizontal={10}
          navigation={props.navigation}
          horizontal={true}
          products={products}
        />
      {/* )} */}
    </View>
  );
};

export default TwoProducts;
