import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components';

const DetailsScreen = ({route}) => {
  const [sneaker, setSneaker] = useState([]);
  const {
    params: {id},
  } = route;

  console.log("Je suis dans details et voici l'id = ", id);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
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
        style={{height: 150, width: 280}}
        source={{uri: `https:${item.media.imageUrl.split(':')[1]}`}}
      />
    </Container>
  );
};

const Container = styled.View``;

export default DetailsScreen;
