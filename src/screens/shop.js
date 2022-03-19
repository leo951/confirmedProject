import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View, FlatList, Image} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Shop = ({navigation}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: {limit: '20', brand: 'Adidas'},
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
      },
    })
      .then(response => {
        setProduct(response.data.results);
      })
      .catch(function (error) {
        console.error('Je suis error = ', error);
      });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={product}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Button
              onPress={() => navigation.navigate('Details', {id: item.id})}>
              <Image
                style={{height: 150, width: 280}}
                source={{uri: `https:${item.media.imageUrl.split(':')[1]}`}}
              />
              <TextStyled>{item.title}</TextStyled>
            </Button>
          </View>
        )}></FlatList>
    </View>
  );
};

const TextStyled = styled.Text``;
const Button = styled.TouchableOpacity``;

Shop.propTypes = {};

export default Shop;
