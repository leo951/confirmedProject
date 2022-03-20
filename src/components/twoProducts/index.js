import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const TwoProducts = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  const [products, setProducts] = useState([]);
  console.log('Je suis props = ', props);

  useEffect(() => {
    console.log('Je suis dans le useEffect');
    if (props.product1 && props.product2) {
      console.log('Je suis dans le if du useEffect');
      setProducts([props.product1, props.product2]);
    }
  }, [props]);

  return (
    <View style={{marginVertical: 50}}>
      <FlatList
        data={products}
        horizontal={true}
        renderItem={({item}) => (
          <View>
            <Image
              style={{height: 250, width: SCREEN_WIDTH - 50, marginHorizontal: 10}}
              source={{uri: `https:${item?.media.imageUrl.split(':')[1]}`}}
            />
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default TwoProducts;
