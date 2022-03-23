import React from 'react';
import {View, Image, Text, FlatList, Dimensions} from 'react-native';

import styled from 'styled-components';

const productsItem = (props, {navigation}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View style={{marginVertical: 20}}>
      <View>
        <Button onPress={() => props.navigation.navigate('Details', {id: props.product.id})}>
          <Image
            style={{height: 250, width: SCREEN_WIDTH}}
            source={{
              uri: `https:${props.product?.media.imageUrl.split(':')[1]}`,
            }}
          />
          <Text
            style={{
              fontWeight: '500',
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {props.product?.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {props.product?.shoe}
          </Text>
        </Button>
      </View>
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
  );
};

const Button = styled.TouchableOpacity``;
const TextStyled = styled.Text``;

export default productsItem;
