import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, Dimensions, Button} from 'react-native';
import {Image} from '../components/styles';
import styled from 'styled-components';

import addToFavorite from '../utils/Favorite/addFavorite';

const DetailsScreen = ({route}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [sneaker, setSneaker] = useState([]);
  const {
    params: {id, auction},
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
      <TextShoe>{sneaker[0]?.shoe}</TextShoe>
      <TextColor>{sneaker[0]?.colorway}</TextColor>
      {auction == true && (
        <TextAuction>
          Il vous reste moins de 20min pour participer au tirage au sort...
        </TextAuction>
      )}
      <TextDetails>
        Un prototype voit la lumière. Avec sa silhouette inédite issue de la
        collection adidas, cette chaussure affiche clairement son penchant pour
        la competition. la couleur {sneaker[0]?.colorway} ajoute une touche
        d'exigence.
      </TextDetails>

      <AddFav
        onPress={async () => {
          await addToFavorite(sneaker[0]);
        }}
        title={'AJOUTER AUX FAVORIES'}
      />

      <TextCarac>CARACTERISTIQUES</TextCarac>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

const TextShoe = styled.Text`
  width: ${250}px;
  font-size: ${40}px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
`;
const TextColor = styled.Text`
  width: ${230}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
  margin-bottom: ${50}px;
`;
const TextAuction = styled.Text`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  margin: 5 0;
  color: blue;
`;
const TextDetails = styled.Text`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  margin-top: ${10}px;
  margin-bottom: ${20}px;
`;
const TextCarac = styled.Text`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  text-decoration: underline;
  margin-top: ${20}px;
`;

const AddFav = styled.Button`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  text-decoration-line: underline;
  margin-top: ${20}px;
`;

export default DetailsScreen;
