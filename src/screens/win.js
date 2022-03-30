import React, {useEffect, useState} from 'react';
import {Dimensions, Button} from 'react-native';
import {
  Image,
  TextShoe,
  TextColor,
  TextShoeColor,
  TextLoading,
} from '../components/styles';
import styled from 'styled-components';
import {getSneaker} from '../utils/Request';

const WinScreen = ({route}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [sneaker, setSneaker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    params: {id},
  } = route;

  useEffect(() => {
    setTimeout(() => {
      getShoe();
    }, 500);
  }, []);

  const getShoe = () => {
    getSneaker(id)
      .then(response => {
        setSneaker(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Je suis error dans le getById = ', error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <TextLoading>Veuillez patienter</TextLoading>;
  }

  return (
    <Container>
      {sneaker[0].shoe ? (
        <>
          <Image
            width={SCREEN_WIDTH}
            source={{
              uri: `https:${sneaker[0]?.media?.imageUrl.split(':')[1]}`,
            }}
          />
          <TextShoeColor color={'green'}>VOUS AVEZ GAGNÉ</TextShoeColor>
          <TextShoe>{sneaker[0]?.shoe}</TextShoe>
          <TextColor>{sneaker[0]?.colorway}</TextColor>
        </>
      ) : (
        <>
          <TextLoading>Pas de Sneakers pour le moment</TextLoading>
          <Button onPress={getShoe()} title="recharger" />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

export default WinScreen;
