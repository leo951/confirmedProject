import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import ProductsItem from '../productsItem';

const productsGrid = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <FlatList
        horizontal={props.horizontal}
        data={props.products}
        renderItem={({item}) =>  <ProductsItem width={props.width} marginHorizontal={props.marginHorizontal} navigation={props.navigation} product={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default productsGrid;
