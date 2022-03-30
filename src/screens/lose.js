import React, {useEffect, useState} from 'react';
import {Text, Dimensions} from 'react-native';
import {Image, TextShoe, TextColor, TextShoeColor, TextLoading} from '../components/styles';
import { getSneaker } from '../utils/Request';
import styled from 'styled-components';

const LoseScreen = ({route}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [sneaker, setSneaker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    params: {id},
  } = route;

  useEffect(() => {
    setTimeout(() => {
      getSneaker(id)
        .then(response => {
          setSneaker(response.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          console.log('Je suis error dans le getById = ', error);
          setIsLoading(false);
        });
    }, 500);
  }, []);

  if (isLoading) {
    return <TextLoading>Veuillez patienter</TextLoading>;
  }

  return (
    <Container>
      {sneaker[0] ? (
        <>
          <Image
            width={SCREEN_WIDTH}
            source={{
              uri: `https:${sneaker[0]?.media?.imageUrl.split(':')[1]}`,
            }}
          />
          <TextShoeColor color={'red'}>VOUS AVEZ PERDU</TextShoeColor>
          <TextShoe>{sneaker[0]?.shoe}</TextShoe>
          <TextColor>{sneaker[0]?.colorway}</TextColor>
        </>
      ) : (
        <TextLoading>Pas de Sneakers pour le moment</TextLoading>
      )}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

export default LoseScreen;
