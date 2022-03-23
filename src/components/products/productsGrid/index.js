import React from 'react';
import {View, FlatList, Text} from 'react-native';

import ProductsItem from '../productsItem';

const productsGrid = props => {
  console.log('Je suis props dans ProductsGrid = ', props.navigation);

  return (
    <View>
      {/* {props.navigation != undefined && ( */}
        <FlatList
          horizontal={props.horizontal}
          data={props.products}
          renderItem={({item}) => (
            <ProductsItem
              width={props.width}
              viewTimer={false}
              marginHorizontal={props.marginHorizontal}
              navigation={props.navigation}
              product={item}
              auction={false}
            />
          )}
          keyExtractor={item => item.name}
        />
      {/* )} */}
    </View>
  );
};

export default productsGrid;
