import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import ProductsItem from '../productsItem';

const productsGrid = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  console.log('🚀 ~ file: index.js ~ line 4 ~ productsGrid ~ props', props);

  return (
    <View>
      <FlatList
        data={props.products}
        renderItem={({item}) => <ProductsItem product={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default productsGrid;
