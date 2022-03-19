import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const DetailsScreen = ({route}) => {
  const [sneakers, setSneakers] = useState([]);
  const {
    params: {id},
  } = route;

  console.log("Je suis id = ",id);

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
        // console.log('Je suis response = ', response.data.results);
        setSneakers(response.data.results)
        console.log(sneakers);
      })
      .catch(error => {
        console.log('Je suis error dans le getById = ', error);
      });
  }, []);

  if(sneakers){
    console.log("Je suis sneakers = ",sneakers);
  }

  return (
    <Container>
      <Text>Je suis dans Details et voici l'id {id}</Text>
    </Container>
  );
};

const Container = styled.View``;

export default DetailsScreen;
