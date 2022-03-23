import React from 'react';
import {View, Image, Text, FlatList, Dimensions} from 'react-native';

import CountDownTimer from '../../countDownTimer';

import styled from 'styled-components';

const productsItem = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const counter = {hours: 1, minutes: 20, seconds: 40};

  console.log('Je suis props dans ProductsItem = ', props);

  return (
    <View style={{marginVertical: 20}}>
      <View>
        <Button
          onPress={() => {
            props.navigation?.navigate('Details', {
              id: props.product.id,
              auction: props.auction,
            });
          }}>
          <Image
            style={{
              height: 250,
              width: props.width,
              marginHorizontal: props.marginHorizontal,
            }}
            source={{
              uri: `https:${props.product?.media.imageUrl.split(':')[1]}`,
            }}
          />
          {props.viewTimer == true && (
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
          )}
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
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {`${props.product?.retailPrice}, 00 €`}
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
        {props.viewTimer == true ? 'PARTICIPER' : 'ACHETER'}
      </Text>
    </View>
  );
};

const Button = styled.TouchableOpacity``;
const TextStyled = styled.Text``;

export default productsItem;
