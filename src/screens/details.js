import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, Image, Dimensions, Button} from 'react-native';
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
        style={{height: 250, width: SCREEN_WIDTH}}
        source={{
          uri: `https:${sneaker[0]?.media?.imageUrl.split(':')[1]}`,
        }}
      />
      <Text
        style={{
          width: 250,
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {sneaker[0]?.shoe}
      </Text>
      <Text
        style={{
          width: 230,
          fontSize: 15,
          fontWeight: '400',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 50,
        }}>
        {sneaker[0]?.colorway}
      </Text>
      {auction == true && (
        <Text
          style={{
            width: 330,
            fontSize: 15,
            fontWeight: '400',
            textAlign: 'left',
            justifyContent: 'flex-start',
            marginVertical: 5,
            color: 'blue',
          }}>
          Il vous reste moins de 20min pour participer au tirage au sort...
        </Text>
      )}

      <Text
        style={{
          width: 330,
          fontSize: 15,
          fontWeight: '400',
          textAlign: 'left',
          justifyContent: 'flex-start',
          marginTop: 10,
          marginBottom: 20,
        }}>
        Un prototype voit la lumière. Avec sa silhouette inédite issue de la
        collection adidas, cette chaussure affiche clairement son penchant pour
        la competition. la couleur {sneaker[0]?.colorway} ajoute une touche
        d'exigence.
      </Text>

      <Button
        onPress={async () => {
          await addToFavorite(sneaker[0]);
        }}
        style={{
          width: 330,
          fontSize: 15,
          fontWeight: '400',
          textAlign: 'left',
          justifyContent: 'flex-start',
          textDecorationLine: 'underline',
          marginTop: 20,
        }}
        title={'AJOUTER AUX FAVORIES'}
      />

      <Text
        style={{
          width: 330,
          fontSize: 15,
          fontWeight: '400',
          textAlign: 'left',
          justifyContent: 'flex-start',
          textDecorationLine: 'underline',
          marginTop: 20,
        }}>
        CARACTERISTIQUES
      </Text>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

export default DetailsScreen;
