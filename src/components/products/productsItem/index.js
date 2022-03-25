import React from 'react';
import {View, Image, Text, FlatList, Dimensions} from 'react-native';

import CountDownTimer from '../../countDownTimer';

import removeFromFavorite from '../../../utils/Favorite/removeFavorite';

import styled from 'styled-components';

const productsItem = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const counter = {hours: 1, minutes: 20, seconds: 40};

  return (
    <ViewProductComponent>
      <View>
        <Button
          onPress={() => {
            props.navigation?.navigate('Details', {
              id: props.product.id,
              auction: props.auction,
            });
          }}>
          <ImageItem
            width={props.width}
            marginHorizontal={props.marginHorizontal}
            source={{
              uri: `https:${props.product?.media?.imageUrl.split(':')[1]}`,
            }}
          />

          {props.viewTimer == true && (
            <ViewCounter width={SCREEN_WIDTH}>
              <CountDownTimer counter={counter} />
            </ViewCounter>
          )}
          <TextName>{props.product?.name}</TextName>
          <TextShoe>{props.product?.shoe}</TextShoe>
          <TextPrice>{`${props.product?.retailPrice}, 00 €`}</TextPrice>
        </Button>
      </View>
      <TextInput>
        {props.viewTimer == true ? 'PARTICIPER' : 'ACHETER'}
      </TextInput>
      {props.isFavorite == true && (
        <TextInput onPress={() => removeFromFavorite(props.product)}>
          {'SUPPRIMER DES FAVORIS'}
        </TextInput>
      )}
    </ViewProductComponent>
  );
};

const Button = styled.TouchableOpacity``;

const ViewProductComponent = styled.View`
  margin: 20px 0;
`;
const ViewCounter = styled.View`
  align-items: center;
  justify-content: center;
  height: ${25}px;
  width: ${props => props.width}px;
  background-color: blue;
`;

const ImageItem = styled.Image`
  height: ${250}px;
  width: ${props => props.width}px;
  margin: 0
    ${props => props.marginHorizontal != undefined ? props.marginHorizontal : 0}px;
`;

const TextName = styled.Text`
  font-weight: 500;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
`;
const TextShoe = styled.Text`
  font-size: ${20}px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
`;
const TextPrice = styled.Text`
  font-size: ${18}px;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
`;
const TextInput = styled.Text`
  font-size: ${15}px;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  text-decoration-line: underline;
  margin-top: ${10}px;
`;

export default productsItem;
