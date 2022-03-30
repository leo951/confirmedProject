import React from 'react';
import {View, Dimensions} from 'react-native';

import CountDownTimer from '../../countDownTimer';

import removeFromFavorite from '../../../utils/Favorite/removeFavorite';
import getRandomInt from '../../../utils/Random/getRandomInt';

//essayer de faire avec une fonction appeler de mes utils mais ne fonctionne pas
// import buy from '../../../utils/buy';

import styled from 'styled-components';

const productsItem = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const counter = {hours: 1, minutes: 20, seconds: 40};


  const winOrLose = () => {
    const random = getRandomInt(2);
    random != 1
      ? props.navigation?.navigate('Lose', {
          id: props.product.id,
        })
      : props.navigation?.navigate('Win', {
          id: props.product.id,
        });
  };



  const buy = () => {
    props.navigation?.navigate('Buy', {
      id: props.product.id,
    });
  };

  return (
    <ViewProductComponent>
      {props.shop != true ? (
        <>
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
                height={props.height}
                marginHorizontal={props.marginHorizontal}
                source={{
                  uri: `https:${props.product?.media?.imageUrl.split(':')[1]}`,
                }}
              />
            </Button>
            {props.viewTimer == true && (
              <ViewCounter width={SCREEN_WIDTH}>
                <CountDownTimer counter={counter} />
              </ViewCounter>
            )}
            <TextName>{props.product?.name}</TextName>
            <TextShoe>{props.product?.shoe}</TextShoe>
            <TextPrice>{`${props.product?.retailPrice}, 00 €`}</TextPrice>
          </View>
          <Button
            onPress={() => {
              props.viewTimer == true ? winOrLose() : buy();
            }}>
            <TextInput>
              {props.viewTimer == true ? 'PARTICIPER' : 'ACHETER'}
            </TextInput>
          </Button>
          {props.isFavorite == true && (
            <TextInput onPress={() => removeFromFavorite(props.product)}>
              {'SUPPRIMER DES FAVORIS'}
            </TextInput>
          )}
        </>
      ) : (
        <Button
          onPress={() => {
            console.log("Je suis le productID transmis a details === ", props.product.id);
            props.navigation?.navigate('Details', {
              id: props.product.id
            });
          }}>

          <ImageItemShop
            width={props.width}
            height={100}
            marginHorizontal={props.marginHorizontal}
            source={{
              uri: `https:${props.product?.media?.imageUrl.split(':')[1]}`,
            }}
          />
        </Button>
      )}
    </ViewProductComponent>
  );
};

const Button = styled.TouchableOpacity``;

const ViewProductComponent = styled.View`
  margin: 0 0 20px 0;
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
    ${props =>
      props.marginHorizontal != undefined ? props.marginHorizontal : 0}px;
`;
const ImageItemShop = styled.Image`
  height: ${100}px;
  width: ${props => props.width}px;
  margin: 0
    ${props =>
      props.marginHorizontal != undefined ? props.marginHorizontal : 0}px;
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
