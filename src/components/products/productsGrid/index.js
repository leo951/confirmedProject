import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styled from 'styled-components';


import ProductsItem from '../productsItem';

const ProductsGrid = props => {
  return (
    <ViewContainer>
      {props.shop == true ? (
        <FlatList
          data={props.products}
          numColumns={2}
          renderItem={({item}) => (
            <ProductsItem
              shop={props.shop}
              width={props.width}
              height={props.height}
              viewTimer={false}
              marginHorizontal={20}
              navigation={props.navigation}
              product={item}
              auction={false}
              isFavorite={props.isFavorite}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
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
              isFavorite={props.isFavorite}
            />
          )}
          keyExtractor={item => item.name}
        />
      )}
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  display: flex;
  align-items: center;
  background-color: white;
`

export default ProductsGrid;
