import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Dimensions, Button} from 'react-native';
import {Image, TextShoe, TextColor, TextShoeColor} from '../components/styles';
import styled from 'styled-components';

const WinScreen = ({route}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [sneaker, setSneaker] = useState([]);
  const {
    params: {id},
  } = route;

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
        // 'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
        // 'X-RapidAPI-Key': '4fa17e2b51msha2b169814db974ep1b2769jsnc61411cb32f6',
      },
    })
      .then(response => {
        setSneaker(response.data.results);
      })
      .catch(error => {
        console.log('Je suis error dans le getById = ', error);
      });
  }, []);

  return (
    <Container>
      <Image
        width={SCREEN_WIDTH}
        source={{
          uri: `https:${sneaker[0]?.media?.imageUrl.split(':')[1]}`,
        }}
      />
      <TextShoeColor color={'green'}>VOUS AVEZ GAGNÉ</TextShoeColor>
      <TextShoe>{sneaker[0]?.shoe}</TextShoe>
      <TextColor>{sneaker[0]?.colorway}</TextColor>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

export default WinScreen;
